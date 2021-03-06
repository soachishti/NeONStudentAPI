var demo_data = require("./demo_data.js");
var url = require("url");

module.exports = function (req, res, request, callback, isLoginCheck){

	var token;
	if (typeof(req.body.token) != "undefined") {
		token = req.body.token;
	}
	else {
		token = req.query.token;
	}
	
	if (/^([0-9a-z\-]+)$/.test(token) == false) {
        console.log(Date() + ": Invalid Token : " + token);
		res.statusCode = 406;
		res.send({
			error: global.Errors.InvalidToken
		});
		return false;
	}
    if (!token) {
		res.statusCode = 406;
		res.send({
			error: global.Errors.NoToken
		});
		return false;
	}
    
   
    if (token == "00000000-0000-0000-0000-000000000000")
    {
        var path = url.parse(req.url).pathname.substr(1);
        
        if (path == "logout") {
            res.send({
                result: 'Bye, Dummy account.'
            }); 
            return;
        }
        if (path == "login") {
            res.send({
                result: true
            }); 
            return;
        }
        
        var pathname = url.parse(req.url).pathname;
        
        setTimeout (function() {
        	console.log(path);
        	if (path == "studentimage") {
        		res.send({
                	result: demo_data["student"]['result']['img']
            	});	
        		return;
        	}
            res.send({
                result: demo_data[path]['result']
            });
        }
        , 3000);
        return;
    }
    
	global.db.GetUser(token, function (store) {
		if (store) {
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
				/* 
				var url = global.setting.NeonURL + 'Registration/ChangePassword.aspx';
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
								error: global.Errors.NetworkError
							});
                        }
						else if(typeof(response.headers) !== 'undefined' && response.headers['location']) {
                            res.statusCode = 406;
							res.send({
								error: global.Errors.NeONExpired
							});
						}
						else {
							callback(req, res, store);
						}
					}
				); */
				callback(req, res, store);				
			}
            else {
				res.statusCode = 406;
				res.send({
					error: global.Errors.LoginFirst
				});
				return false;				
			}
		}
        else if (store == null) {
            res.statusCode = 406;
            res.send({
                error: global.Errors.DatabaseError
            });
        }
		else {
            console.log(store);
			res.statusCode = 406;
			res.send({
				error: global.Errors.NeONExpired
				//error: global.Errors.APIExpired
			});
			return false;
		}
	});
	
}