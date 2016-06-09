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
	app.get('/student', function(req, res) {
		console.log("student GET");
        global.LoginCheck(req, res, request,  studentCallback, 0);
	})

	
	function studentCallback(req, res, store) {
			var token = req.query.token;

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

                    // Request initiated when not logged in.
                    if (!student.fullname) {
                        res.statusCode = 406;
                        res.send({
                            error: global.Errors.NeONExpired
                        });
                        return;
                    }
                    
					var ImgURI = global.setting.NeonURL + $('#MainContent_fvPersonal_imgStudent').attr('src');
					request({
						url: ImgURI,
						encoding: null,
						timeout	: global.setting.DefaultTimeout,
						headers	: global.setting.DefaultHeaders,
						jar		: j
					}, function(error, response, data) {
						if (!error && response.statusCode == 200) {
							student.img = 'data:image/jpeg;base64,' + data.toString('base64');
							res.send({
								result: student
							});
						} else {
                            console.log(error);
							res.send({
								result: student,
								info: global.Errors.ImageError
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
			})
	}
};