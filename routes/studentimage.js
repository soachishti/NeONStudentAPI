function ucwords(str) {
  str = str.toLowerCase();
  return (str + '')
    .replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
      return $1.toUpperCase();
    });
}

module.exports = function (app, request, cheerio, db) {
	/**
	 * @api {get} /student Student
	 * @apiName Get Student Information
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formatted data with fullname, name, rollno, degree, batch, campus and email.
	 * @apiError error Reason for failing.
	 */
	app.post('/studentimage', function(req, res) {
        global.LoginCheck(req, res, request,  studentCallback, 0);
	})

	app.get('/studentimage', function(req, res) {
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
				
				var fullname    = ucwords($('#MainContent_fvPersonal_lblName').text());

				// Request initiated when not logged in.
				if (!fullname) {
					res.statusCode = 406;
					res.send({
						error: global.Errors.NeONExpired
					});
					return;
				}
				
				delete fullname;

				var ImgURI = global.setting.NeonURL + $('#MainContent_fvPersonal_imgStudent').attr('src');
				request({
					url: ImgURI,
					encoding: null,
					timeout	: global.setting.DefaultTimeout,
					headers	: global.setting.DefaultHeaders,
					jar		: j
				}, function(error, response, data) {
					if (!error && response.statusCode == 200) {
						var img = 'data:image/jpeg;base64,' + data.toString('base64');
						res.send({
							result: img
						});
					} else {
						res.send({
							info: global.Errors.ImageError
						});
					}
				});
			})
	}
};