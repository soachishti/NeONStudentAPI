module.exports = function (app, request, cheerio, db) {	
	/**
	 * @api {get} /challan Challan
	 * @apiName Student Fee Challan
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formated data similar to table in NeON site because it is direct scrape.
	 * @apiError error Reason for failing to get data.
	 */
	app.get('/challan', function(req, res) {
        global.LoginCheck(req, res, request,  challanCallback, false);
	})

	function challanCallback(req, res, store) {
			var cookie = request.cookie(store.cookies);
			var j = request.jar();
			j.setCookie(cookie, global.setting.NeonURL);
			
			request({
				url		: global.setting.NeonURL + 'FMS/GenerateChallan.aspx',
				timeout	: global.setting.DefaultTimeout,
				headers	: global.setting.DefaultHeaders,
				jar		: j
			}, function(error, response, html) {
				console.log("In courses request");
				if (!error) {
					var $ = cheerio.load(html);
					var challans = [];
					var headers = [];
					$('#MainContent_gvChallan th').each(function(index, item) {
						headers[index] = $(item).text();
					});
					$('#MainContent_gvChallan tr').has('td').each(function() {
						var ChalanInfo = {};
						$('td', $(this)).each(function(index, item) {
							ChalanInfo[headers[index]] = $(item).text().replace(/[\t\n]+/g, ' ').trim();
						});
						challans.push(ChalanInfo);
					})

					res.send({
						result: challans
					});
				} else {
					res.statusCode = 406;
					res.send({
						error: "No chalan to show."
					});
				}
			})
	}
};