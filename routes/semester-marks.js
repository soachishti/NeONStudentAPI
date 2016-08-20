module.exports = function (app, request, cheerio) {
	/**
	 * @api {get} /marks Marks
	 * @apiName Student Marks
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formated array data with title, and marks
	 * @apiError error Reason for failing to get data.
	 */
	app.post('/semester-marks', function(req, res) {
        global.LoginCheck(req, res, request,  attendenceCallback, 0);
	})

	app.get('/semester-marks', function(req, res) {
        global.LoginCheck(req, res, request,  attendenceCallback, 0);
	})

	function attendenceCallback(req, res, store) {
		var cookie = request.cookie(store.cookies);
			var j = request.jar();
			var BaseResponse;
			j.setCookie(cookie, global.setting.NeonURL);

			request({
				url		: global.setting.NeonURL + 'Registration/StudentMArksEvaluations.aspx', 
				timeout	: global.setting.DefaultTimeout,
				headers	: global.setting.DefaultHeaders,
				jar		: j
			}, function(error, response, html) {
				if (!error) {
					BaseResponse = cheerio.load(html);
					var AjaxData = {};

					AjaxData.__EVENTTARGET = 'ctl00$MainContent$ddlSem';
					AjaxData.__LASTFOCUS = '';
					AjaxData.__EVENTARGUMENT = '';
						
					AjaxData.__VIEWSTATE = BaseResponse('#__VIEWSTATE').attr('value');
					AjaxData.__EVENTVALIDATION = BaseResponse('#__EVENTVALIDATION').attr('value');
					
					AjaxData.__ASYNCPOST = 'true';

					AjaxData['ctl00$MainContent$CollapsiblePanelExtender1_ClientState'] = 'true';
					
					if (req.query.semester) {
						AjaxData['ctl00$MainContent$ddlSem'] = req.query.semester;
					}
					else {
						AjaxData['ctl00$MainContent$ddlSem'] = req.body.semester;
					}


					AjaxData['ctl00$MainContent$ddlRollno'] = '';//req.query.rollno;
					
					AjaxData['ctl00$cpeDesc_ClientState'] = 'false';
					AjaxData['ctl00$ScriptManager1'] = 'ctl00$MainContent$UP1|ctl00$MainContent$ddlSem';

					// New request with credentials	
					request.post({
						url		: global.setting.NeonURL + 'Registration/StudentMArksEvaluations.aspx',
						timeout	: global.setting.DefaultTimeout,
						headers	: global.setting.DefaultHeaders,
						jar		: j,
						form    : AjaxData
					}, function(error, response, data) {
						if (!error) {							
							data = data.split("|");
							var ajax_html = data[7];
							var html_id = data[6];

							BaseResponse("#" + html_id).html(ajax_html);

							global.tools.ProcessMarks(BaseResponse, res, req);		
						} else {
		                    console.log(error);
							res.statusCode = 406;
							res.send({
								error: global.Errors.NetworkError
							});
						}
					});
				} else {
                    console.log(error);
					res.statusCode = 406;
					res.send({
						error: global.Errors.NetworkError
					});
				}
			});
	}
};