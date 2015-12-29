//http://www.w3schools.com/jsref/jsref_match.asp
//id=MainContent_lblerror
// Return JSON {} no []

'use strict';

var express = require('express');
var session = require('express-session');
var cors = require('cors')
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');
var FileStore = require('session-file-store')(session);
//var SQLiteStore 	= require('connect-sqlite3')(session);

var ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 7881;
var NeonURL = 'http://nu.edu.pk/NeONStudent/';
var DefaultTimeout = 60000;
var DefaultHeaders = {
		'Accept'			:'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		'Accept-Encoding'	:'gzip, deflate',
		'Accept-Language'	:'en-GB,en;q=0.8,en-US;q=0.6',
		'Cache-Control'		:'no-cache',
		'Connection'		:'keep-alive',
		'DNT'				:'1',
		'User-Agent'		:'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36',
		'Pragma'			:'no-cache',
		'Upgrade-Insecure-Requests'	:'1',
		'Host'				:'nu.edu.pk',
		'Origin'			:'http://nu.edu.pk'
	};

var j = request.jar();
request = request.defaults({ jar : j });	

var app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true // to support URL-encoded bodies
}));
app.use('/docs', express.static('apidoc'));

var session_option = {
    genid: function(req) {
        return uuid.v1();
    },
    name: 'Biskut',
    secret: 'oRsZmO1LwIyx563DC1V3',
    resave: true,
    saveUninitialized: true,
    cookie: false,
    store: new FileStore({
        path: "./BiskutStore",
        encrypt: true
    }),
    //store: new SQLiteStore({db:"BiskutStore", table:"Biskuts"})
};

app.use(session(session_option));

var corsOptions = {
    origin: true,
    methods: ['POST'],
    credentials: true,
    maxAge: 3600
};

app.use(cors(corsOptions)); // For allowing Ajax to access out API

function CleanSubject(str) {
	var res = /\s+(.*?)\s+\-/g.exec(str);
	if (res != null && res != 'undefined') return res[1];
	return null;
} 

function LoginCheck(req, callback) {
	var url = 'http://nu.edu.pk/NeONStudent/Registration/ViewStudentAttendance.aspx';
	
	if (!req.session.cookies) {
        callback(false);
        return;
    }
	else {
		request({
				url: url,
				timeout: DefaultTimeout,
				headers: DefaultHeaders,
				followRedirect : false
			}, function (error, response, body) {
				if (error) {
					console.log(response);
					callback(false);
					return;
				}

				if(typeof response.headers !== 'undefined' && response.headers['location']) {
					// Redirect Found
					callback(false);
				}
				else {
					callback(true);
				}
			}
		);
	}
}

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

/**
 * @api {get} /load Initialize Session
 * @apiName Load NeON Session
 * @apiGroup Login
 *
 * @apiSuccess {String} captcha Base64 encoded value of captcha image.
 * @apiSuccess {String} token Unique ID of session, Which is also send in cookie for maintaining session.
 */
app.get('/load', function(req, res) {
	    
	request({
        url: NeonURL,
        timeout: DefaultTimeout,
		headers: DefaultHeaders
    }, function(error, response, html) {
		req.session.cookies = j.getCookieString(NeonURL);
		
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            req.session.LoginData = {};
			
			var eventtarget = $('#__EVENTTARGET').attr('value');
			if (typeof eventtarget === "undefined") eventtarget = '';
            req.session.LoginData.__EVENTTARGET = eventtarget;
			
			var eventargument =  $('#__EVENTARGUMENT').attr('value');
			if (typeof eventargument === "undefined") eventargument = '';
            req.session.LoginData.__EVENTARGUMENT = eventargument;
				
            req.session.LoginData.__VIEWSTATE = $('#__VIEWSTATE').attr('value');
            req.session.LoginData.__EVENTVALIDATION = $('#__EVENTVALIDATION').attr('value');
            req.session.LoginData.ddlCampus = 'PWR';
            req.session.LoginData.username = '';
            req.session.LoginData.password = '';
            req.session.LoginData.showPassword = 'on';
            req.session.LoginData.txtUserCaptcha = '';
            req.session.LoginData.submit = 'Log in';
            req.session.LoginData.login1_ClientState = '';

            var captchaImgURI = NeonURL + $('img[src^=CaptchaImage]').attr('src');
            request({
                url: captchaImgURI,
                encoding: null,
                timeout: 3000
            }, function(error, response, data) {
                if (!error && response.statusCode == 200) {
                    var captchaImgData = 'data:' + response.headers['content-type'] + ';base64,' + data.toString('base64');
                    res.send({
                        captcha: captchaImgData,
                        token: req.sessionID
                    });
                } else {
                    res.statusCode = 406;
                    res.send({
                        error: "Error getting image, Please try again."
                    });
                }
            });
        } else {
            res.statusCode = 406;
            res.send({
                error: "Server failed to respond."
            });
        }
    });
})

/**
 * @api {post} /login Log In 
 * @apiName Login To NeON
 * @apiGroup Login
 *
 * @apiParam {String} username NeON username.
 * @apiParam {String} password NeON password.
 * @apiParam {String} txtUserCaptcha Captcha solution of the image given in \load request.
 * @apiParam {String} campus Campus name such as PWR, ISB, KHI, .
 *
 * @apiSuccess {String} result true
 * @apiError error Reason for failing to login such wrong captcha, credential or server down.
 */
app.post('/login', function(req, res) {
	
    console.log("Login POST");
	
	if (!req.session.LoginData) {
		res.statusCode = 406;
		res.send({
			error: "Login first"
		});
		return;
	}
	
	req.session.cookies = req.session.cookies + ";myCookie=username=" + req.body.username;
	var cookie = request.cookie(req.session.cookies);
	j.setCookie(cookie, NeonURL);
	
	// Get value add in session by Load
	req.session.LoginData.ddlCampus = req.body.campus;
	req.session.LoginData.username = req.body.username;
	req.session.LoginData.password = req.body.password;
	req.session.LoginData.txtUserCaptcha = req.body.captcha;
			
	var customHeader = DefaultHeaders;
	customHeader.Referer = "http://nu.edu.pk/NeonStudent/";
			
	request.post({
		url: NeonURL,
		timeout: DefaultTimeout,
		headers: customHeader,
		form: req.session.LoginData
	}, function(error, response, body) {
		if (!error && response.statusCode == 302) {
			res.statusCode = 200;
			req.session.LoggedIn = true;
			
			// Delete password from server
			req.session.LoginData = null;
			
			res.send({
				result: true
			});
		} else {
			res.statusCode = 406;
			if (body.indexOf("Invalid Code") != -1) {
				res.send({
					error: "Invalid captcha value!"
				});
			} else if (body.indexOf("Login Failed.Try Again") != -1) {
				res.send({
					error: "Invalid username or password!"
				});
			} else if (body.indexOf("Something goes wrong with the connection") != -1) {
				res.send({
					error: "Server switch off!"
				});
			} else {
				res.send({
					error: "NeON behaving awkward - " + response.statusCode + " - " +  body  
				});
			}
		}
	});
})

/**
 * @api {get} /student Student
 * @apiName Get Student Information
 * @apiGroup Info
 *
 * @apiSuccess {String} result JSON formatted data with fullname, name, rollno, degree, batch, campus and email.
 * @apiError error Reason for failing.
 */
app.get('/student', function(req, res) {
	LoginCheck(req, function(status) {
		if (status == false) {
			res.statusCode = 406;
			res.send({
				error: "Login first"
			});
			return;
		}

		var cookie = request.cookie(req.session.cookies);
		j.setCookie(cookie, NeonURL);

		request({
			url: NeonURL + 'ViewStudentProfile.aspx',
			timeout: DefaultTimeout,
			headers: DefaultHeaders
		}, function(error, response, html) {
			if (!error) {
				var $ = cheerio.load(html);
				var student = {};
				student.fullname = $('#MainContent_fvPersonal_lblName').text();
				student.name = student.fullname.split(" ")[0];
				student.rollno = $('#MainContent_fvPersonal_lblRollno').text();
				student.degree = $('#MainContent_fvPersonal_lblDegree').text();
				student.batch = $('#MainContent_fvPersonal_lblBatch').text();
				student.campus = $('#MainContent_fvPersonal_lblCampus').text();
				student.email = $('#MainContent_fvPersonal_lblEmail').text();

				var ImgURI = NeonURL + $('#MainContent_fvPersonal_imgStudent').attr('src');
				request({
					url: ImgURI,
					encoding: null
				}, function(error, response, data) {
					if (!error && response.statusCode == 200) {
						//student.img = 'data:' + response.headers['content-type'] + ';base64,' + data.toString('base64');
						student.img = 'data:image/jpeg;base64,' + data.toString('base64');
						res.send({
							result: student
						});
					} else {
						res.statusCode = 406;
						res.send({
							error: "Error getting image." + NeonURL + $('#MainContent_fvPersonal_imgStudent').attr('src')
						});
					}
				});
			} else {
				res.statusCode = 406;
				res.send({
					error: "Fail to get data."
				});
			}
		})
    });
})

/**
 * @api {get} /logout Destroy Session
 * @apiName Logout
 * @apiGroup Option
 *
 * @apiSuccess {String} message "Have a good day!" and Delete all session data
 */
app.get('/logout', function(req, res) {	
	var cookie = request.cookie(req.session.cookies);
	j.setCookie(cookie, NeonURL);
	
	request({
        url: NeonURL + 'logout.aspx',
        timeout: DefaultTimeout,
		headers: DefaultHeaders
    }, function(error, response, html) {
		req.session.destroy();

		res.send({
			result: "Have a good day!"
		});
	});
	

})

/**
 * @api {get} /attendence Attendence
 * @apiName Attendence Information
 * @apiGroup Info
 *
 * @apiSuccess {String} result JSON formated array data with title, percentage, percentHour, absentHour
 * @apiError error Reason for failing to get data.
 */
app.get('/attendence', function(req, res) {
	LoginCheck(req, function(status) {
		if (status == false) {
			res.statusCode = 406;
			res.send({
				error: "Login first"
			});
			return;
		}

		var cookie = request.cookie(req.session.cookies);
		j.setCookie(cookie, NeonURL);

		request({
			url: NeonURL + 'Registration/ViewStudentAttendance.aspx',
			timeout: DefaultTimeout,
			headers: DefaultHeaders
		}, function(error, response, html) {
			if (!error) {
				var $ = cheerio.load(html);
				var json = [];

				$("#MainContent_pnlRegCourses > table").each(function(index, item) {
					var tableInfo = {};
					tableInfo.title = CleanSubject($(item).find("span").first().text().trim());

					var attendence = [];
					$(item).find('.grid-viewForAttendance > tr:nth-child(2) td').each(function(j, cell) {
						var data = $(cell).text().trim();
						if (data) attendence.push([data]);
					});

					tableInfo.attendence = attendence;

					json.push(tableInfo);
				});

				for (var data in json) {
					var percentage = json[data].attendence.pop()
					var presentHour = json[data].attendence.pop()
					var absentHour = json[data].attendence.pop()
					json[data].percentage = percentage;
					json[data].presentHour = presentHour;
					json[data].absentHour = absentHour;
				}

				res.send({
					result: json
				});
			} else {
				res.statusCode = 406;
				res.send({
					error: "Fail to get data."
				});
			}
		})
	});
})

/**
 * @api {get} /marks Marks
 * @apiName Student Marks
 * @apiGroup Info
 *
 * @apiSuccess {String} result JSON formated array data with title, and marks
 * @apiError error Reason for failing to get data.
 */
app.get('/marks', function(req, res) {
	LoginCheck(req, function(status) {
		if (status == false) {
			res.statusCode = 406;
			res.send({
				error: "Login first"
			});
			return;
		}

		var cookie = request.cookie(req.session.cookies);
		j.setCookie(cookie, NeonURL);

		request({
			url: NeonURL + 'Registration/StudentMArksEvaluations.aspx',
			timeout: DefaultTimeout,
			headers: DefaultHeaders
		}, function(error, response, html) {
			if (!error) {
				var $ = cheerio.load(html);
				var tableInfo = {};
				$("div#MainContent_pnlRegCourses").children().each(function(index, item) {
					var SubjectName = CleanSubject($(item).find('span[id^="MainContent_rptrCourses_lblCourseID"]').text());   
					var subjectMarks = [];
					
					$(item).find('.grid-view').each(function(indexJ, itemJ) {
						$(itemJ).find('tr.header th').each(function(indexK, itemK) {
							var markTable = [];
							$(itemK).find('td').each(function(indexL, itemL) {
								if (indexL == 1) return;
								markTable.push($(itemL).text());
							});
							subjectMarks.push(markTable);
						});
						
						$(itemJ).find('tr.normal td').each(function(indexM, itemM) {
							if (indexM == 0) subjectMarks[indexM].push('Yours');
							else subjectMarks[indexM].push($(itemM).text());
						});		
					});

					tableInfo[index] = {name:SubjectName,marks:subjectMarks};	
				}); 

				res.send({
					result: tableInfo
				});
			} else {
				res.statusCode = 406;
				res.send({
					error: "Fail to get data."
				});
			}
		})
	});
})

/**
 * @api {get} /courses Courses
 * @apiName Student All Courses
 * @apiGroup Info
 *
 * @apiSuccess {String} result JSON formated array data with cgpa, CreditEarned, CreditLimit, CurrentCredit, warning and courses list
 * @apiError error Reason for failing to get data.
 */
app.get('/courses', function(req, res) {
	LoginCheck(req, function(status) {
		if (status == false) {
			res.statusCode = 406;
			res.send({
				error: "Login first"
			});
			return;
		}

		var cookie = request.cookie(req.session.cookies);
		j.setCookie(cookie, NeonURL);

		request({
			url: NeonURL + 'Registration/StudentREgistration.aspx',
			timeout: DefaultTimeout,
			headers: DefaultHeaders
		}, function(error, response, html) {
			//request('http://localhost/NeonSample/RegisteredCourse.html', function (error, response, html) {
			if (!error) {
				var $ = cheerio.load(html);
				var json = {};
				json.cgpa = $('#MainContent_lblCGPA').text();
				json.CreditEarned = $('#MainContent_lblCrErn').text();
				json.CreditLimit = $('#MainContent_lblCreditLimit').text();
				json.CurrentCredit = $('#MainContent_lblCredits').text();
				json.warning = $('#MainContent_lblWarning').text();

				var courses = [];
				var headers = [];

				var calls = [];

				$('#MainContent_GVRegisterCourses th').each(function(index, item) {
					headers[index] = $(item).text();
				})

				$('#MainContent_GVRegisterCourses tr').has('td').each(function() {
					var CourseInfo = {};
					$('td', $(this)).each(function(index, item) {
						CourseInfo[headers[index]] = $(item).text().replace(/[\t\n]+/g, ' ').trim();
					});
					courses.push(CourseInfo);
				});

				json.courses = courses;
				res.send({
					result: json
				});
			} else {
				res.statusCode = 406;
				res.send({
					error: "No course registered."
				});
			}
		})
	});
})

/**
 * @api {get} /transcript Transcript
 * @apiName Student Transcript
 * @apiGroup Info
 *
 * @apiSuccess {String} result JSON formated array data with index semester number and data inside each.
 * @apiError error Reason for failing to get data.
 */
app.get('/transcript', function(req, res) {
    LoginCheck(req, function(status) {
		if (status == false) {
			res.statusCode = 406;
			res.send({
				error: "Login first"
			});
			return;
		}

		var cookie = request.cookie(req.session.cookies);
		j.setCookie(cookie, NeonURL);

		request({
			url: NeonURL + 'Registration/StudentTranscript.aspx',
			timeout: DefaultTimeout,
			headers: DefaultHeaders
		}, function(error, response, html) {
			//request('http://localhost/NeonSample/transcript.html', function (error, response, html) {
			if (!error) {
				var jsonResponse = [];
				var $ = cheerio.load(html);

				//https://github.com/iaincollins/tabletojson
				$("table[class='grid-view']").each(function(i, table) {
					var tableAsJson = [];
					var columnHeadings = [];
					$(table).find('tr').each(function(i, row) {
						$(row).find('th').each(function(j, cell) {
							columnHeadings[j] = $(cell).text().trim();
						});
					});

					// Fetch each row
					$(table).find('tr').each(function(i, row) {
						var rowAsJson = {};
						$(row).find('td').each(function(j, cell) {
							if (columnHeadings[j]) {
								rowAsJson[columnHeadings[j]] = $(cell).text().trim();
							} else {
								rowAsJson[j] = $(cell).text().trim();
							}
						});

						// Skip blank rows
						if (JSON.stringify(rowAsJson) != '{}')
							tableAsJson.push(rowAsJson);
					});

					// Add the table to the response
					if (tableAsJson.length != 0)
						jsonResponse.push({
							semester: i + 1,
							grade: tableAsJson
						});
				});
				res.send({
					result: jsonResponse
				});
			} else {
				res.statusCode = 406;
				res.send({
					error: "Fail to get data."
				});
			}
		})
	});
})

/**
 * @api {get} /challan Challan
 * @apiName Student Fee Challan
 * @apiGroup Info
 *
 * @apiSuccess {String} result JSON formated data similar to table in NeON site because it is direct scrape.
 * @apiError error Reason for failing to get data.
 */
app.get('/challan', function(req, res) {
	LoginCheck(req, function(status) {
		if (status == false) {
			res.statusCode = 406;
			res.send({
				error: "Login first"
			});
			return;
		}

		var cookie = request.cookie(req.session.cookies);
		j.setCookie(cookie, NeonURL);

		request({
			url: NeonURL + 'FMS/GenerateChallan.aspx',
			timeout: DefaultTimeout,
			headers: DefaultHeaders
		}, function(error, response, html) {
			console.log("In courses request");
			if (!error) {
				var $ = cheerio.load(html);
				var challans = [];
				var headers = [];
				$('#MainContent_gvChallan th').each(function(index, item) {
					headers[index] = $(item).text();
				});
				$('#MainContent_gvChallan tr').has('td').each(function() {
					var ChalanInfo = {};
					$('td', $(this)).each(function(index, item) {
						ChalanInfo[headers[index]] = $(item).text().replace(/[\t\n]+/g, ' ').trim();
					});
					challans.push(ChalanInfo);
				})

				res.send({
					result: challans
				});
			} else {
				res.statusCode = 406;
				res.send({
					error: "No chalan to show."
				});
			}
		})
	});
})

app.listen(port, ip_address, function() {
    console.log("Listening on " + ip_address + ", server_port " + port)
});