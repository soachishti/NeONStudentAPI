module.exports = function (app, request, cheerio) {
	/**
	 * @api {get} /attendence Attendence
	 * @apiName Attendence Information
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formated array data with title, percentage, percentHour, absentHour
	 * @apiError error Reason for failing to get data.
	 */
	app.post('/attendence', function(req, res) {
        global.LoginCheck(req, res, request,  attendenceCallback, 0);
	})

	app.get('/attendence', function(req, res) {
        global.LoginCheck(req, res, request,  attendenceCallback, 0);
	})

	function attendenceCallback(req, res, store) {
		var cookie = request.cookie(store.cookies);
			var j = request.jar();
			j.setCookie(cookie, global.setting.NeonURL);

			request({
				url		: global.setting.NeonURL + 'Registration/ViewStudentAttendance.aspx',
				timeout	: global.setting.DefaultTimeout,
				headers	: global.setting.DefaultHeaders,
				jar		: j
			}, function(error, response, html) {
				if (global.tools.LoginCheckOnRequest(response, res, error)) return;
				
				var $ = cheerio.load(html);
				global.tools.ProcessAttendence($, res, req);					
			})
	}
};