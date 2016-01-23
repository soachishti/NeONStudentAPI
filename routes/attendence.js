module.exports = function (app, request, cheerio) {
	/**
	 * @api {get} /attendence Attendence
	 * @apiName Attendence Information
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formated array data with title, percentage, percentHour, absentHour
	 * @apiError error Reason for failing to get data.
	 */
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
				if (!error) {
					var $ = cheerio.load(html);
					var json = [];

					var error = $("#MainContent_lblNoReg");
					if (error && error.text()) {
						res.send({
							error: error.text()
						});
						return;
					}
					
					$("#MainContent_pnlRegCourses > table").each(function(index, item) {
						var tableInfo = {};
						tableInfo.title = global.CleanSubject($(item).find("span").first().text().trim());

						var attendence = [];
						$(item).find('.grid-viewForAttendance > tr:nth-child(2) td').each(function(j, cell) {
							var data = $(cell).text().trim();
							if (data) attendence.push([data]);
						});

						tableInfo.attendence = attendence;

						json.push(tableInfo);
					});

					for (var data in json) {
						var percentage = json[data].attendence.pop()
						var presentHour = json[data].attendence.pop()
						var absentHour = json[data].attendence.pop()
						json[data].percentage = percentage;
						json[data].presentHour = presentHour;
						json[data].absentHour = absentHour;
					}

					res.send({
						result: json
					});
				} else {
                    console.log(error);
					res.statusCode = 406;
					res.send({
						error: "Fail to get data."
					});
				}
			})
	}
};