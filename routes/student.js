function ucwords(str) {
  str = str.toLowerCase();
  return (str + '')
    .replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
      return $1.toUpperCase();
    });
}

var campus = new Array();
campus['PWR'] = 'Peshawar';
campus['KHI'] = 'Karachi';
campus['ISB'] = 'Islamabad';
campus['LHR'] = 'Lahore';
campus['FSD'] = 'Faisalabad';

module.exports = function (app, request, cheerio, db) {
	/**
	 * @api {get} /student Student
	 * @apiName Get Student Information
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formatted data with fullname, name, rollno, degree, batch, campus and email.
	 * @apiError error Reason for failing.
	 */
	app.post('/student', function(req, res) {
		console.log("student POST");
        global.LoginCheck(req, res, request,  studentCallback, 0);
	})

	app.get('/student', function(req, res) {
		console.log("student GET");
        global.LoginCheck(req, res, request,  studentCallback, 0);
	})

	
	function studentCallback(req, res, store) {
			var cookie = request.cookie(store.cookies);
			var j = request.jar();
			j.setCookie(cookie, global.setting.NeonURL);

			request({
				url		: global.setting.NeonURL + 'ViewStudentProfile.aspx',
				timeout	: global.setting.DefaultTimeout,
				headers	: global.setting.DefaultHeaders,
				jar		: j
			}, function(error, response, html) {
				if (global.tools.LoginCheckOnRequest(response, res, error)) return;
				
				var $ = cheerio.load(html);
				var student = {};
				student.fullname    = ucwords($('#MainContent_fvPersonal_lblName').text());
				student.name        = ucwords(student.fullname.split(" ")[0]);
				student.rollno      = $('#MainContent_fvPersonal_lblRollno').text();
				student.degree      = $('#MainContent_fvPersonal_lblDegree').text();
				student.batch       = $('#MainContent_fvPersonal_lblBatch').text();
				student.campus      = campus[$('#MainContent_fvPersonal_lblCampus').text()];
				student.email       = $('#MainContent_fvPersonal_lblEmail').text();
				student.mobile      = $('#MainContent_fvPersonal_lblMobileno').text();
				student.cnic        = $('#MainContent_fvPersonal_lblCNIC').text();
				student.nationality = $('#MainContent_fvPersonal_lblNationality').text();
				student.gender 		= $('#MainContent_fvPersonal_lblGender').text();
				

				// Request initiated when not logged in.
				if (!student.fullname) {
					res.statusCode = 406;
					res.send({
						error: global.Errors.NeONExpired
					});
					return;
				}

				res.send({
					result: student
				});
			})
	}
};