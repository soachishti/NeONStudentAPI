module.exports = function (app, request, cheerio, db) {
	/**
	 * @api {get} /logout Destroy Session
	 * @apiName Logout
	 * @apiGroup Option
	 *
	 * @apiSuccess {String} message "Have a good day!" and Delete all session data
	 */
	app.get('/logout', function(req, res) {
        global.LoginCheck(req, res, request,  logoutCallback, -1);
	})

	
	function logoutCallback(req, res, store) {
		var cookie = request.cookie(store.cookies);
		var j = request.jar();
		j.setCookie(cookie, global.setting.NeonURL);
		var token = req.query.token;
		request({
			url		: global.setting.NeonURL + 'logout.aspx',
			timeout	: global.setting.DefaultTimeout,
			headers	: global.setting.DefaultHeaders,
			jar		: j
		}, function(error, response, html) {
			global.db.DeleteUser(token, function(result) {
                console.log('Delete data: Count ' + result.affectedRows + ' rows');
                res.send({
                    result: "Have a good day!"
                });                
            });
		});
	}
};