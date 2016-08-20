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
        global.LoginCheck(req, res, request, loginCallback, 1);
    })
		
	function loginCallback(req, res, store) {
		store.cookies = store.cookies + ";myCookie=username=" + req.body.username;
		
		var token;
		if (typeof(req.body.token) != "undefined") {
			token = req.body.token;
		}
		else {
			token = req.query.token;
		}


		var cookie = request.cookie(store.cookies);
		var j = request.jar();
		j.setCookie(cookie, global.setting.NeonURL);
		request = request.defaults({
			jar: j
		});
				
		// Get value add in session by Load
		store.LoginData.ddlCampus = req.body.campus;
        var campuses = ['PWR', 'KHI', 'LHR', 'ISB', 'FSD'];
        if (campuses.indexOf(store.LoginData.ddlCampus) == -1) {
            res.statusCode = 406;
            res.send({
                error: global.Errors.InvalidCampus
			});
            return;
        }       

		store.LoginData.username = req.body.username;
        if (/^([0-9]{6})$/.test(store.LoginData.username) == false) {
            res.statusCode = 406;            
            res.send({
                error: global.Errors.InvalidUser
			});
            return;
        }   
        
		store.LoginData.password = req.body.password;
        
		store.LoginData.txtUserCaptcha = req.body.captcha;
        if (/^([a-zA-Z0-9]+)$/.test(store.LoginData.txtUserCaptcha) == false) {
            res.statusCode = 406;
            res.send({
                error: global.Errors.InvalidCaptcha
			});
            return;
        }   
        
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
				global.db.UpdateUser(token, store, function(result) {
                    if (!result) {
                        res.statusCode = 406;
                        res.send({
                            error: global.Errors.DatabaseError
                        });
                        return;
                    }
                    //console.log('changed ' + result.affectedRows + ' rows');
                    res.send({
                        result: true
                    });                    
                });
			} else {
                console.log(error);
				res.statusCode = 406;
				if (typeof body === 'undefined')
                    res.send({
						error: global.Errors.NetworkError
					});
                else if (body.indexOf("Invalid Code") != -1) {
					res.send({
						error: global.Errors.InvalidCaptcha
					});
				} else if (body.indexOf("Login Failed.Try Again") != -1) {
					res.send({
						error: global.Errors.InvalidUserPass
					});
				} else if (body.indexOf("Something goes wrong with the connection") != -1) {
					res.send({
						error: global.Errors.NeONDown
					});
				} else {
					res.send({
						error: global.Errors.NetworkError
					});
				}
			}
		});
	}
};

