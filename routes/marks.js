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
	app.get('/marks', function(req, res) {
        /* fs.readFile("E:/marks1.html", (err, data) => {
            if (err) throw err;
            
        }); */

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
				if (!error) {       
                    var $ = cheerio.load(html);	
                    
                    var error = $("#MainContent_lblNoReg");
					if (error && error.text()) {
						res.send({
							info: error.text()
						});
						return;
					}
                    
                    var tableInfo = {};
                    $("#MainContent_pnlRegCourses > table").each(function(index, course_tbl) {
                        var SubjectName = global.CleanSubject($(course_tbl).find('span[id^="MainContent_rptrCourses_lblCourseID"]').text());   
                        var subjectMarks = [];

                        $(course_tbl).find('table[id^=MainContent_rptrCourses_gvStudents]').each(function(indexJ, itemJ) {
                            $(itemJ).find('tr.header th').each(function(indexK, itemK) {
                                var markTable = [];
                                $(itemK).find('td').each(function(indexL, itemL) {
                                    if (indexL == 1) return;
                                    markTable.push($(itemL).text());
                                });
                                if (markTable.length == 0) {
                                    // Handling when only student marks are available
                                    markTable.push($(itemK).text());
                                    markTable.push("","","","","","");
                                }
                                subjectMarks.push(markTable);
                            });
                            
                            $(itemJ).find('tr.normal td').each(function(indexM, itemM) {
                                if (indexM == 0) {
                                    subjectMarks[indexM].push('Yours');
                                }
                                else { 
                                    subjectMarks[indexM].push($(itemM).text());
                                }
                            });		
                        });

                        tableInfo[index] = {name:SubjectName,marks:subjectMarks};	
                    }); 


                    var semester = {};
					$("select#MainContent_ddlSem option").each(function(index, item) {
						semester[$(item).text()] = {};
						semester[$(item).text()]['text'] = $(item).val();

						var selected = $(item).attr("selected");
						if (selected == "selected")
							semester[$(item).text()]['selected'] = true;
						else
							semester[$(item).text()]['selected'] = false;
						 
					});
					
					res.send({
						semester: semester,
						result: tableInfo
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