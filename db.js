var uuidV4      = require('uuid/v4');
//var uuid 		= require('node-uuid');
var crypto 		= require('crypto');
var mysql       = require('mysql');
var connection; 

//console.log(process.env);

var db_config   = {
	host     : process.env.OPENSHIFT_MYSQL_DB_HOST || '127.0.0.1',
	user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'root',
	password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD || 'root',
	port     : process.env.OPENSHIFT_MYSQL_DB_PORT || 3306,
	database : process.env.OPENSHIFT_APP_NAME || 'neonapi'
};

// Keep data base connection live.
function handleDisconnect() {
    connection = mysql.createConnection(db_config); 

    connection.connect(function(err) {             
        if(err) {                                  
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);                
        }                                          
        else 
        	console.log('connected as id ' + connection.threadId);
    });                                             
    
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {   
            handleDisconnect();                         
        } 
        else {                                         
            throw err;
        }
    });
}

handleDisconnect();

var dbConfig 	= {
	algorithm 	: 'aes-256-ctr',
	password  	: process.env.NEON_SECURE_PASSWORD || 'ha6hG123Jhajy'
};
  
function encrypt(text){
  var cipher = crypto.createCipher(dbConfig.algorithm,dbConfig.password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(dbConfig.algorithm,dbConfig.password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}  
 
connection.query(
	"CREATE TABLE IF NOT EXISTS `UserData` (" + 
	"  `ID` int(11) NOT NULL AUTO_INCREMENT," + 
	"  `key` varchar(50) NOT NULL," + 
	"  `value` text NOT NULL," + 
	"  `expire` datetime NOT NULL," + 
	"  PRIMARY KEY (`ID`)" + 
	") ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;"
);
	
// Clear expired data
connection.query("DELETE FROM UserData WHERE expire < ?" , [Math.round(new Date().getTime() / 1000)], function (err, result) {
	if (result) console.log('Delete Expired data: Count ' + result.affectedRows + ' rows');
});

module.exports = {
	CreateUser: function(callback) {
		var id = uuidV4();
		console.log(Date() + ": Creating session : " + id.substring(0, 7));	
	
		var data  = {
			key		: id,
			value	: encrypt('{}'),
			expire	: new Date()
		};
		
		var query = connection.query('INSERT INTO `UserData` SET ?', data, function(err, result) {
            if (err != null) {
                console.log("DeleteUser() : Error on next line");
                console.log(err);
                callback(null)
            }
            else {
                callback(id);
            }
        });
	},
	DeleteUser: function (key, callback) {
		console.log(Date() + ": User logout : " + key.substring(0, 7)); 
        var sql = "DELETE FROM `UserData` WHERE `key` = " + connection.escape(key);
        
		connection.query(sql, function (err, result) {
            if (err != null) {
                console.log("DeleteUser() : Error on next line");
                console.log(err);
                callback(null)
            }
            else {
                //console.log(result);
                callback(result);
            }
		});		
	},
	UpdateUser: function (key, value, callback) {
        console.log(Date() + ": User data updated : " + key.substring(0, 7));   
		var expireTime = Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout;
		
		var sql = "UPDATE UserData SET `value` = "+ connection.escape(encrypt(JSON.stringify(value))) +
				", `expire` = " + connection.escape(new Date(expireTime * 1000))  + 
				" WHERE `key` = " + connection.escape(key) + ";";
	
		connection.query(sql, function (err, result) {
            if (err != null) {
                console.log("UpdateUser() : Error on next line");
                console.log(err);
                callback(null)
            }
            else {
                callback(result);
		    }
        });
	},
	GetUser: function (key, callback) {
		// Update expire date
		var expireTime = Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout;
		
		var sql    = "SELECT value FROM UserData WHERE `key` = " +  connection.escape(key) + ";";
		connection.query(sql, function(err, row) {
            if (err) {
                console.log(err);
                callback(null)
            }
			else if (typeof row[0] !== 'undefined') {
				callback(JSON.parse(decrypt(row[0].value)));
                var sql = "UPDATE UserData SET `expire` = " + connection.escape(new Date(expireTime * 1000)) + 
                        " WHERE `key` = " + connection.escape(key)  + ";";		
                connection.query(sql, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            else callback(false);            
		});
	},
    con: connection
};
