module.exports = function (app, request, cheerio) {
	/**
	 * @api {get} /courses Courses
	 * @apiName Student All Courses
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formated array data with cgpa, CreditEarned, CreditLimit, CurrentCredit, warning and courses list
	 * @apiError error Reason for failing to get data.
	 */
	app.get('/courses', function(req, res) {
        global.LoginCheck(req, res, request, coursesCallback, 0);
	})

	function coursesCallback(req, res, store) {
		var cookie = request.cookie(store.cookies);
			var j = request.jar();
			j.setCookie(cookie, global.setting.NeonURL);
			
			request({
				url		: global.setting.NeonURL + 'Registration/StudentREgistration.aspx',
				timeout	: global.setting.DefaultTimeout,
				headers	: global.setting.DefaultHeaders,
				jar		: j
			}, function(error, response, html) {
				if (!error) {
					var $ = cheerio.load(html);
									
					var json = {};
					json.cgpa = $('#MainContent_lblCGPA').text();
					json.CreditEarned = $('#MainContent_lblCrErn').text();
					json.CreditLimit = $('#MainContent_lblCreditLimit').text();
					json.CurrentCredit = $('#MainContent_lblCredits').text();
					json.warning = $('#MainContent_lblWarning').text();
					json.SelectedCourse = $('#MainContent_lblTotalRegisteredCourse').text();

					var error = $("#MainContent_lblNoReg");
					if (error && error.text()) {
						//res.statusCode = 406;
						res.send({
							error: error.text(),
							result: json
						});
						return;
					}				
					
					var courses = [];
					var headers = [];

					var calls = [];

					$('#MainContent_GVRegisterCourses th').each(function(index, item) {
						headers[index] = $(item).text();
					})

					$('#MainContent_GVRegisterCourses tr').has('td').each(function() {
						var CourseInfo = {};
						$('td', $(this)).each(function(index, item) {
							CourseInfo[headers[index]] = $(item).text().replace(/[\t\n]+/g, ' ').trim();
						});
						courses.push(CourseInfo);
					});

					json.courses = courses;
					res.send({
						result: json
					});
				} else {
                    console.log(error);
					res.statusCode = 406;
					res.send({
						error: "No course registered."
					});
				}
			})
	}
};