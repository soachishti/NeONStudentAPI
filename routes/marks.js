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
        global.LoginCheck(req, res, request,  marksCallback, false);
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
					if (error) {
						res.statusCode = 406;
						res.send({
							error: error.text()
						});
						return;
					}
					
					var tableInfo = {};
					$("div#MainContent_pnlRegCourses").children().each(function(index, item) {
						var SubjectName = CleanSubject($(item).find('span[id^="MainContent_rptrCourses_lblCourseID"]').text());   
						var subjectMarks = [];
						
						$(item).find('.grid-view').each(function(indexJ, itemJ) {
							$(itemJ).find('tr.header th').each(function(indexK, itemK) {
								var markTable = [];
								$(itemK).find('td').each(function(indexL, itemL) {
									if (indexL == 1) return;
									markTable.push($(itemL).text());
								});
								subjectMarks.push(markTable);
							});
							
							$(itemJ).find('tr.normal td').each(function(indexM, itemM) {
								if (indexM == 0) subjectMarks[indexM].push('Yours');
								else subjectMarks[indexM].push($(itemM).text());
							});		
						});

						tableInfo[index] = {name:SubjectName,marks:subjectMarks};	
					}); 

					res.send({
						result: tableInfo
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