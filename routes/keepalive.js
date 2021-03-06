module.exports = function (app, request, cheerio, db) {	
	/**
	 * @api {get} /keepalive Keep NeON session alive for more whatever NeON timeout
	 * @apiName NeON Session Alive
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} Return error or result
	 */
	app.post('/keepalive', function(req, res) {
        global.LoginCheck(req, res, request,  keepaliveCallback, 0);
    });

    app.get('/keepalive', function(req, res) {
        global.LoginCheck(req, res, request,  keepaliveCallback, 0);
	});
	
	function keepaliveCallback(req, res, store) {
		var cookie = request.cookie(store.cookies);
        var j = request.jar();
        j.setCookie(cookie, global.setting.NeonURL);

        request({
            url: global.setting.NeonURL + 'ViewStudentProfile.aspx',
            timeout: global.setting.DefaultTimeout,
            headers: global.setting.DefaultHeaders,
            jar: j
        }, function(error, response, html) {
			if (global.tools.LoginCheckOnRequest(response, res, error)) return;
			
			res.send({
				result: "success"
			});
        });
	}

};