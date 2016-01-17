'use strict';

var app 	= require('./server.js');
var request = require('request');
var cheerio = require('cheerio');
global.db 			= require("./db.js");
global.setting  	= require("./setting.js");

require("./routes/index.js")(app, request, cheerio);

// Handle 404
app.use(function(req, res) {
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
