module.exports = function (app, request, cheerio) {		
	/**
	 * @api {get} /transcript Transcript
	 * @apiName Student Transcript
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formated array data with index semester number and data inside each.
	 * @apiError error Reason for failing to get data.
	 */
	app.get('/transcript', function(req, res) {
        global.LoginCheck(req, res, request,  transcriptCallback, 0);
	})
	
	function transcriptCallback(req, res, store) {
			var cookie = request.cookie(store.cookies);
			var j = request.jar();
			j.setCookie(cookie, global.setting.NeonURL);
			
			request({
				url		: global.setting.NeonURL + 'Registration/StudentTranscript.aspx',
				timeout : global.setting.DefaultTimeout,
				headers : global.setting.DefaultHeaders,
				jar		: j
			}, function(error, response, html) {
				//request('http://localhost/NeonSample/transcript.html', function (error, response, html) {
				if (!error) {
					var jsonResponse = [];
					var $ = cheerio.load(html);

                    $("table[width='420']").each(function(i, sem_tbl) {
                        var semester_detail = {};
                        semester_detail['semester']         = i+1; // Attempted Credit
                        semester_detail['semester_season']  = $(sem_tbl).find("span[id^='MainContent_dlSemesters_lblSemNO']").first().html(); // Attempted Credit
                        semester_detail['attempted']        = $(sem_tbl).find("span[id^='MainContent_dlSemesters_lblAttCr']").first().html(); // Attempted Credit
                        semester_detail['earned']           = $(sem_tbl).find("span[id^='MainContent_dlSemesters_lblEarnedCr']").first().html(); // Credit Earn
                        semester_detail['cgpa']             = $(sem_tbl).find("span[id^='MainContent_dlSemesters_lblCGPA']").first().html(); // CGPA
                        semester_detail['sgpa']             = $(sem_tbl).find("span[id^='MainContent_dlSemesters_lblSGPA']").first().html(); // SGPA
                                               
                        // Collecting Course Grade
                        var course_grade_table = $("table[id^='MainContent_dlSemesters_gvCourses_"+i+"']").first();
                        //console.log(sem_tbl);
                        //console.log($(course_grade_table).find('tr'));
                        var tableAsJson = [];
                        var columnHeadings = [];
                        $(course_grade_table).find('tr').each(function(i, row) {
                            $(row).find('th').each(function(j, cell) {
                                columnHeadings[j] = $(cell).text().trim();
                            });
                        });

                        // Fetch each row
                        $(course_grade_table).find('tr').each(function(i, row) {
                            var rowAsJson = {};
                            $(row).find('td').each(function(j, cell) {
                                if (columnHeadings[j]) {
                                    rowAsJson[columnHeadings[j]] = $(cell).text().trim();
                                } else {
                                    rowAsJson[j] = $(cell).text().trim();
                                }
                            });
                            if (JSON.stringify(rowAsJson) != '{}')
                                tableAsJson.push(rowAsJson);
                        });
                        semester_detail['grade'] = tableAsJson;
                                    
                        jsonResponse.push(semester_detail);
					});

					res.send({
						result: jsonResponse
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