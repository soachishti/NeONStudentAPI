var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');

module.exports = function (app, request) {		
	/**
	 * @api {get} /transcript Transcript
	 * @apiName Student Transcript
	 * @apiGroup Info
	 *
	 * @apiSuccess {String} result JSON formated array data with index semester number and data inside each.
	 * @apiError error Reason for failing to get data.
	 */
	app.get('/sendmessage', function(req, res) {

        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport(sendmailTransport({
            path: '/usr/share/sendmail'
        }));    

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: req.param.name + " <" + req.param.email + ">", // sender address
            to: 'p146011@nu.edu.pk', // list of receivers
            subject: 'NeON Student Mobile | Contact', // Subject line
            text: req.param.message, // plaintext body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                res.send({
                    error: "false"
                });
                console.log(error);
            }
            else {
                console.log('Message sent: ' + info.response);
                res.send({
                    error: "true"
                });
            }
        });
    })
};