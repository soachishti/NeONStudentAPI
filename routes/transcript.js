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
        global.LoginCheck(req, res, request,  transcriptCallback, false);

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

					//https://github.com/iaincollins/tabletojson
					$("table[class='grid-view']").each(function(i, table) {
						var tableAsJson = [];
						var columnHeadings = [];
						$(table).find('tr').each(function(i, row) {
							$(row).find('th').each(function(j, cell) {
								columnHeadings[j] = $(cell).text().trim();
							});
						});

						// Fetch each row
						$(table).find('tr').each(function(i, row) {
							var rowAsJson = {};
							$(row).find('td').each(function(j, cell) {
								if (columnHeadings[j]) {
									rowAsJson[columnHeadings[j]] = $(cell).text().trim();
								} else {
									rowAsJson[j] = $(cell).text().trim();
								}
							});

							// Skip blank rows
							if (JSON.stringify(rowAsJson) != '{}')
								tableAsJson.push(rowAsJson);
						});

						// Add the table to the response
						if (tableAsJson.length != 0)
							jsonResponse.push({
								semester: i + 1,
								grade: tableAsJson
							});
					});
					res.send({
						result: jsonResponse
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