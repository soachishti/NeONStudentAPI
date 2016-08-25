var fs = require("fs");

module.exports = function (app, request, cheerio) {
	/**
	 * @api {get} /marks Marks
	 * @apiName Student Marks
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formated array data with title, and marks
	 * @apiError error Reason for failing to get data.
	 */
	
	app.post('/marks', function(req, res) {
        global.LoginCheck(req, res, request,  marksCallback, 0);
	})

	app.get('/marks', function(req, res) {
        global.LoginCheck(req, res, request,  marksCallback, 0);
	})

	function marksCallback(req, res, store) {
		var cookie = request.cookie(store.cookies);
			var j = request.jar();
			j.setCookie(cookie, global.setting.NeonURL);
			
			request({
				url		: global.setting.NeonURL + 'Registration/StudentMArksEvaluations.aspx',
				timeout	: global.setting.DefaultTimeout,
				headers	: global.setting.DefaultHeaders,
				jar		: j
			}, function(error, response, html) {
				if (global.tools.LoginCheckOnRequest(response, res, error)) return;
								
				var $ = cheerio.load(html);	
				
				if ($('#lblRollno').text() == "") {
					res.statusCode = 406;
					res.send({
						error: global.Errors.NeONExpired
					});
				}
								
				global.tools.ProcessMarks($, res, req);
				
			})
	}
};