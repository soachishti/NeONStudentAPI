module.exports = function(app, request, cheerio) {
    /**
     * @api {post} /login Log In 
     * @apiName Login To NeON
     * @apiGroup Login
     *
     * @apiParam {String} username NeON username.
     * @apiParam {String} password NeON password.
     * @apiParam {String} txtUserCaptcha Captcha solution of the image given in \load request.
     * @apiParam {String} campus Campus name such as PWR, ISB, KHI, .
     *
     * @apiSuccess {String} result true
     * @apiError error Reason for failing to login such wrong captcha, credential or server down.
     */
    app.post('/login', function(req, res) {
        console.log("Login POST");
        global.LoginCheck(req, res, request, loginCallback, 1);
    })
		
	function loginCallback(req, res, store) {
		store.cookies = store.cookies + ";myCookie=username=" + req.body.username;
		var token = req.query.token;
		var cookie = request.cookie(store.cookies);
		var j = request.jar();
		j.setCookie(cookie, global.setting.NeonURL);
		request = request.defaults({
			jar: j
		});
		
		/* var allowed = {
			'146011' : 'PWR', 
			'146016' : 'PWR', 
			'152173' : 'KHI' 
		};
		
		if (allowed[req.body.username] != req.body.campus) {
			res.statusCode = 406;
			res.send({
				error: "App isn't public yet."
			});
			return;
		} */
		
		// Get value add in session by Load
		store.LoginData.ddlCampus = req.body.campus;
		store.LoginData.username = req.body.username;
		store.LoginData.password = req.body.password;
		store.LoginData.txtUserCaptcha = req.body.captcha;

		var customHeader = global.setting.DefaultHeaders;
		customHeader.Referer = "http://nu.edu.pk/NeonStudent/";

		request.post({
			url: global.setting.NeonURL,
			timeout: global.setting.DefaultTimeout,
			headers: global.setting.customHeader,
			form: store.LoginData
		}, function(error, response, body) {
			if (!error && response.statusCode == 302) {
				res.statusCode = 200;
				store.LoggedIn = true;

				// Delete password from server
				store.LoginData = null;
				global.db.UpdateUser(token, store);
				res.send({
					result: true
				});
			} else {
				res.statusCode = 406;
				if (typeof body === 'undefined')
                    res.send({
						error: "No response from NeON - Timeout"
					});
                else if (body.indexOf("Invalid Code") != -1) {
					res.send({
						error: "Invalid captcha value!"
					});
				} else if (body.indexOf("Login Failed.Try Again") != -1) {
					res.send({
						error: "Invalid username or password!"
					});
				} else if (body.indexOf("Something goes wrong with the connection") != -1) {
					res.send({
						error: "Server switch off!"
					});
				} else {
					res.send({
						error: "NeON behaving awkward"
					});
				}
			}
		});
	}
};

