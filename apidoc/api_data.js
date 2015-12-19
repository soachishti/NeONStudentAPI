define({ "api": [
  {
    "type": "get",
    "url": "/attendence",
    "title": "Return Attendence information of student",
    "name": "Attendence_Information",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>JSON formated array data with title, percentage, percentHour, absentHour</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Reason for failing to get data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/student",
    "title": "Get student information",
    "name": "Get_Student_Information",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>Student full name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Student first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rollno",
            "description": "<p>Student roll no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "degree",
            "description": "<p>Student degree eg. CS, EE</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "batch",
            "description": "<p>Student Campus eg. 2014, 2015</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "campus",
            "description": "<p>Student campus eg. Peshawar, Karachi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Student email address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Reason for failing.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Access to documentation",
    "name": "Load_Documentation",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTML",
            "description": "<p>Redirect to documentation of api</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/courses",
    "title": "Return courses of student",
    "name": "Student_All_Courses",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>JSON formated array data with cgpa, CreditEarned, CreditLimit, CurrentCredit, warning and courses list</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Reason for failing to get data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/challan",
    "title": "Return paid and pending challan",
    "name": "Student_Fee_Challan",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>JSON formated data similar to table in NeON site because it is direct scrape.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Reason for failing to get data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/marks",
    "title": "Return marks of student",
    "name": "Student_Marks",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>JSON formated array data with title, and marks</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Reason for failing to get data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/transcript",
    "title": "Return transcript of student",
    "name": "Student_Transcript",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>JSON formated array data with index semester number and data inside each.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Reason for failing to get data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/load",
    "title": "Return captcha image and set session for next call eg. login",
    "name": "Load_NeON_Session",
    "group": "Login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "captcha",
            "description": "<p>Base64 encoded value of captcha image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Unique ID of session, Which is also send in cookie for maintaining session.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Log user to NeON Student Modules",
    "name": "Login_To_NeON",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>NeON username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>NeON password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "txtUserCaptcha",
            "description": "<p>Captcha solution of the image given in \\load request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "campus",
            "description": "<p>Campus name such as PWR, ISB, KHI, .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>true</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Reason for failing to login such wrong captcha, credential or server down.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "Delete all session data",
    "name": "Logout",
    "group": "Option",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Have a good day!&quot; and Delete all session data</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Option"
  }
] });
