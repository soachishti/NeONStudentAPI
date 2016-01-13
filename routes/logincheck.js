module.exports = function (req, res, request, callback, isLoginCheck){
	if (isLoginCheck != 1) isLoginCheck = 0;
	var token = req.query.token;
	if (!token) {
		res.statusCode = 406;
		res.send({
			error: "No token! Please login first."
		});
		return false;
	}

	global.db.GetUser(token, function (store) {
		if (store != null) {
			if (store.cookies && store.LoginData && isLoginCheck == 1) 
			{
				// Checking if user have logged in on /load
				callback(req, res, store);
			}
			else if (store.cookies && isLoginCheck == -1) 
			{
				// Checking if user have logged in on /load
				callback(req, res, store);
			}
			else if (store.cookies && store.LoggedIn && isLoginCheck == 0) {		
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
								error: "NeON session expired! Try logging in again."
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
					error: "Please login first."
				});
				return false;				
			}
		}
		else {
			res.statusCode = 406;
			res.send({
				error: "Session expired! Try logging in again."
			});
			return false;
		}
	});
	
}