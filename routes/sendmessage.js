module.exports = function (app, request) {		
	/**
	 * @api {post} /sendmessage Send feedback message to author.
	 * @apiName SendMessage
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} true
	 * @apiError {String} false
	 */
	app.post('/sendmessage', function(req, res) {    
        var api_key = 'key-5929d54ff5836aa34a59e2764c29225a';
        var domain = 'sandboxe2e07f9c730543a8bed61289e68a0a2d.mailgun.org';
        var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
        //console.log(req);
        if (!req.body.name || !req.body.email || !req.body.text) {
            res.statusCode = 406;
            res.send({
                error: "Invalid Name, Email, Message"
            });
        }
        else {   
            var data = {
                from: req.body.name + " <" + req.body.email + ">", // sender address
                to: 'p146011@nu.edu.pk', // list of receivers
                subject: 'NeON Student Mobile | Contact', // Subject line
                text: req.body.text, // plaintext body
            };
            mailgun.messages().send(data, function (error, body) {
                if(error){
                    res.statusCode = 406;
                    res.send({
                        error: "false"
                    });
                    console.log(error);
                }
                else {
                    //console.log('Message sent: ' + body);
                    res.send({
                        success: "true"
                    });
                }
            });
        }
    })
};