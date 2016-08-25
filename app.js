'use strict';

var cron = require('node-cron');
var app 	= require('./server.js');
var request = require('request');
var cheerio = require('cheerio');
//var process = require('process');
global.db 			= require("./db.js");
global.setting      = require("./setting.js");
global.tools      	= require("./tools.js");

require("./routes/index.js")(app, request, cheerio);

// Handle 404
app.use(function(req, res) {
	// TODO: remove this
	//console.log('This process is your pid ' + process.pid);

    res.statusCode = 404;
	res.send({
		error: "Page not Found"
    });
});
  
// Handle 500
app.use(function(error, req, res, next) {
    res.statusCode = 500;
	res.send({
		error: "Internal Server Error"
    });
});

app.listen(global.setting.port, global.setting.ip_address, function() {
    console.log("Listening on " + global.setting.ip_address + ", server_port " + global.setting.port)
}); 


function cron_task() {
    console.log('Will Run every 15 min ');
    var sql = "SELECT `key` FROM UserData;";
    db.con.query(sql, function(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            for (var i in data) {
                var key = data[i].key;                
                
                (function(user_key) {
                    var url = "http://" + global.setting.ip_address + ":" + global.setting.port + "/keepalive";
                    request.post({
                        url: url,
                        timeout: global.setting.DefaultTimeout,
                        headers: global.setting.DefaultHeaders,
                        form: {token: user_key}
                    }, function(error, response, html) {
                        if (!error && response.statusCode == 200) {
                            console.log(Date() + ": CRON[INFO]: " + user_key + " session updated.");
                        } else {
                            global.db.DeleteUser(user_key, function(result) {
                                console.log(Date() + ": CRON[FAIL]: " + user_key + " delete from db");
                            });
                        }
                    });
                })(key);
            }
           
        } 
    });
}
cron_task();
var task = cron.schedule('*/15 * * * *', cron_task, false);
task.start();