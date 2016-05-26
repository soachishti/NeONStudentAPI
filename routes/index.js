// export a function that accepts `app` as a param
global.LoginCheck 	= require("./logincheck.js");
global.CleanSubject = function (str) {
	var res = /\s+(.*?)\s+\-/g.exec(str);
	if (res != null && res != 'undefined') return res[1];
	return null;
} 

module.exports = function (app, request, cheerio) {
    require("./load.js")(app, request, cheerio);
    require("./login.js")(app, request, cheerio);
    require("./attendence.js")(app, request, cheerio);
    require("./challan.js")(app, request, cheerio);
    require("./courses.js")(app, request, cheerio);
    require("./keepalive.js")(app, request, cheerio);
    require("./logout.js")(app, request, cheerio);
    require("./marks.js")(app, request, cheerio);
    require("./student.js")(app, request, cheerio);
    require("./transcript.js")(app, request, cheerio);
    require("./sendmessage.js")(app, request);
	
	/**
	 * @api {get} / Access Doc
	 * @apiName Load Documentation
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} HTML Redirect to documentation folder \apidoc
	 */
	app.get('/', function(req, res) {
		res.redirect('/docs');
	});
};