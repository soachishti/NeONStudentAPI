'use strict';

var app 	= require('./server.js');
var request = require('request');
var async = require('async');
var cheerio = require('cheerio');
var wait = require('wait.for');
global.db 			= require("./db.js");
global.setting  	= require("./setting.js");
global.misc 		= require("./misc.js");

require("./routes/index.js")(app, request, cheerio);

app.listen(global.setting.port, global.setting.ip_address, function() {
    console.log("Listening on " + global.setting.ip_address + ", server_port " + global.setting.port)
}); 