module.exports = function (req, res, request, callback, isLoginCheck){
	if (isLoginCheck != true) isLoginCheck = false;
	var token = req.query.token;
	if (!token) {
		res.statusCode = 406;
		res.send({
			error: "No token found."
		});
		return false;
	}

	global.db.GetUser(token, function (store) {
		if (store != null) {
			if (store.cookies && isLoginCheck) 
			{
				callback(req, res, store);
			}
			else if (store.cookies && store.LoggedIn) {		
				var url = 'http://nu.edu.pk/NeONStudent/Registration/ViewStudentAttendance.aspx';
				var j = request.jar();
				var cookie = request.cookie(store.cookies);
				j.setCookie(cookie, global.setting.NeonURL);
				
				request({
						url: url,
						timeout: global.setting.DefaultTimeout,
						headers: global.setting.DefaultHeaders,
						followRedirect : false,
						jar : j
					}, function (error, response, body) {
						if(error || typeof response.headers !== 'undefined' && response.headers['location']) {
							res.statusCode = 406;
							res.send({
								error: "Session expired on NeON"
							});
							return false;	
						}
						else {
							callback(req, res, store);
						}
					}
				);
				
				
			}
			else {
				res.statusCode = 406;
				res.send({
					error: "Session not found on API server."
				});
				return false;				
			}
		}
		else {
			res.statusCode = 406;
			res.send({
				error: "Token expired."
			});
			return false;
		}
	});
	
}