module.exports = function (app, request, cheerio, db) {
	/**
	 * @api {get} /student Student
	 * @apiName Get Student Information
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formatted data with fullname, name, rollno, degree, batch, campus and email.
	 * @apiError error Reason for failing.
	 */
	app.get('/student', function(req, res) {
		console.log("student GET");
        global.LoginCheck(req, res, request,  studentCallback, true);
	})

	
	function studentCallback(req, res, store) {
			var token = req.query.token;
			if (!store) {
				res.statusCode = 406;
				res.send({
					error: "Session expired, Login again."
				});
				return;
			}
			
			var cookie = request.cookie(store.cookies);
			var j = request.jar();
			j.setCookie(cookie, global.setting.NeonURL);

			request({
				url		: global.setting.NeonURL + 'ViewStudentProfile.aspx',
				timeout	: global.setting.DefaultTimeout,
				headers	: global.setting.DefaultHeaders,
				jar		: j
			}, function(error, response, html) {
				if (!error) {
					var $ = cheerio.load(html);
					var student = {};
					student.fullname = $('#MainContent_fvPersonal_lblName').text();
					student.name = student.fullname.split(" ")[0];
					student.rollno = $('#MainContent_fvPersonal_lblRollno').text();
					student.degree = $('#MainContent_fvPersonal_lblDegree').text();
					student.batch = $('#MainContent_fvPersonal_lblBatch').text();
					student.campus = $('#MainContent_fvPersonal_lblCampus').text();
					student.email = $('#MainContent_fvPersonal_lblEmail').text();

					var ImgURI = global.setting.NeonURL + $('#MainContent_fvPersonal_imgStudent').attr('src');
					request({
						url: ImgURI,
						encoding: null
					}, function(error, response, data) {
						if (!error && response.statusCode == 200) {
							student.img = 'data:image/jpeg;base64,' + data.toString('base64');
							res.send({
								result: student
							});
						} else {
							res.statusCode = 406;
							res.send({
								error: "Error getting image." + global.setting.NeonURL + $('#MainContent_fvPersonal_imgStudent').attr('src')
							});
						}
					});
				} else {
					res.statusCode = 406;
					res.send({
						error: "Fail to get data."
					});
				}
			})
	}
};