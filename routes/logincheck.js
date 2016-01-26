module.exports = function (req, res, request, callback, isLoginCheck){
	var token = req.query.token;
	if (/^([0-9a-z\-]+)$/.test(token) == false) {
        console.log(token);
		res.statusCode = 406;
		res.send({
			error: "Invalid token format!"
		});
		return false;
	}
    if (!token) {
		res.statusCode = 406;
		res.send({
			error: "No token! Please login first."
		});
		return false;
	}

	global.db.GetUser(token, function (store) {
		if (store) {
            //console.log(store.cookies);
            //console.log(store.LoginData);
            //console.log(isLoginCheck);
			if (store.cookies && store.LoginData && isLoginCheck == 1) 
			{
				// Checking if user have logged in on /load
				callback(req, res, store);
			}
			else if (store.cookies && isLoginCheck == -1) 
			{
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
                        if (error) {
                            console.log(error);
                            res.statusCode = 406;
							res.send({
								error: "Failed to get data."
							});
                        }
						else if(typeof response.headers !== 'undefined' && response.headers['location']) {
							console.log(response.headers);
                            res.statusCode = 406;
							res.send({
								error: "NeON session expired! Try logging in again."
							});
						}
						else {
							callback(req, res, store);
						}
					}
				);
				
				
			}
			else if (store.cookies && !store.LoggedIn) {
                res.statusCode = 406;
				res.send({
					error: "Your last login failed, Login again."
				});
				return false;
            }
            else {
				res.statusCode = 406;
				res.send({
					error: "Please login first."
				});
				return false;				
			}
		}
        else if (store == null) {
            res.statusCode = 406;
            res.send({
                error: "Failed to query database."
            });
        }
		else {
            console.log(store);
			res.statusCode = 406;
			res.send({
				error: "Session expired! Try logging in again."
			});
			return false;
		}
	});
	
}