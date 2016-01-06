module.exports = function (app, request, cheerio, db) {
    /**
	 * @api {get} /load Initialize Session
	 * @apiName Load NeON Session
	 * @apiGroup Login
	 *
	 * @apiSuccess {String} captcha Base64 encoded value of captcha image.
	 * @apiSuccess {String} token Unique ID of session, Which is also send in cookie for maintaining session.
	 */
	app.get('/load', function(req, res) {
		var j = request.jar();
		request({
			url		: global.setting.NeonURL,
			timeout	: global.setting.DefaultTimeout,
			headers	: global.setting.DefaultHeaders,
			jar		: j
		}, function(error, response, html) {
			var store = {};
			store.cookies = j.getCookieString(global.setting.NeonURL);		
					
			if (!error && response.statusCode == 200) {
				var $ = cheerio.load(html);
				store.LoginData = {};
				
				var eventtarget = $('#__EVENTTARGET').attr('value');
				if (typeof eventtarget === "undefined") eventtarget = '';
				store.LoginData.__EVENTTARGET = eventtarget;
				
				var eventargument =  $('#__EVENTARGUMENT').attr('value');
				if (typeof eventargument === "undefined") eventargument = '';
				store.LoginData.__EVENTARGUMENT = eventargument;
					
				store.LoginData.__VIEWSTATE = $('#__VIEWSTATE').attr('value');
				store.LoginData.__EVENTVALIDATION = $('#__EVENTVALIDATION').attr('value');
				store.LoginData.ddlCampus = 'PWR';
				store.LoginData.username = '';
				store.LoginData.password = '';
				store.LoginData.showPassword = 'on';
				store.LoginData.txtUserCaptcha = '';
				store.LoginData.submit = 'Log in';
				store.LoginData.login1_ClientState = '';

				// Adding to Database
				var token = global.db.CreateUser();
				global.db.UpdateUser(token, store);
				
				var captchaImgURI = global.setting.NeonURL + $('img[src^=CaptchaImage]').attr('src');
				request({
					url: captchaImgURI,
					encoding: null,
					timeout: global.setting.DefaultTimeout
				}, function(error, response, data) {
					if (!error && response.statusCode == 200) {
						var captchaImgData = 'data:' + response.headers['content-type'] + ';base64,' + data.toString('base64');
						res.send({
							captcha: captchaImgData,
							token: token
						});
					} else {
						res.statusCode = 406;
						res.send({
							error: "Error getting image, Please try again."
						});
					}
				});
			} else {
				res.statusCode = 406;
				res.send({
					error: "Server failed to respond."
				});
			}
		});
	})

};