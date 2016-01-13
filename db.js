var uuid 		= require('node-uuid');
var crypto 		= require('crypto');
var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : process.env.OPENSHIFT_MYSQL_DB_HOST || '127.0.0.1',
	user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'root',
	password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD || '',
	port     : process.env.OPENSHIFT_MYSQL_DB_PORT || 3306,
	database : process.env.OPENSHIFT_APP_NAME || 'neonapi'
}); 

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		throw err;
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

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
connection.query("DELETE FROM UserData WHERE expire < ?" , [Math.round(new Date().getTime() / 1000)]);


module.exports = {
	CreateUser: function() {
		var id = uuid.v1();
		console.log("Creating User " + id);	
	
		var data  = {
			key		: id,
			value	: encrypt('{}'),
			expire	: new Date()
		};
		
		var query = connection.query('INSERT INTO UserData SET ?', data, function(err, result) {});
		return id;
	},
	DeleteUser: function (key, value) {
		console.log("Delete User " + key);
		var sql = "DELETE FROM UserData WHERE `key` = " + connection.escape(key);
		connection.query(sql, function (err, result) {
			if (err) throw err;
			console.log('Delete Expired data: Count ' + result.affectedRows + ' rows');
		});		
	},
	UpdateUser: function (key, value) {
		console.log("Update User")
		var expireTime = Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout;
		
		var sql = "UPDATE UserData SET `value` = "+ connection.escape(encrypt(JSON.stringify(value))) +
				", `expire` = " + connection.escape(new Date(expireTime * 1000))  + 
				" WHERE `key` = " + connection.escape(key) + ";";
	
		connection.query(sql, function (err, result) {
			if (err) throw err;
			console.log('changed ' + result.affectedRows + ' rows');
		});
	},
	GetUser: function (key, callback) {
		// Update expire date
		var expireTime = Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout;

		var sql = "UPDATE UserData SET `expire` = " + connection.escape(new Date(expireTime * 1000)) + 
			" WHERE `key` = " + connection.escape(key)  + ";";
		console.log(sql);
		
		connection.query(sql, function (err, result) {});
		
		var sql    = "SELECT value FROM UserData WHERE `key` = " +  connection.escape(key) + ";";
		connection.query(sql, function(err, row) {
			if (typeof row != 'undefined') {
				return callback(JSON.parse(decrypt(row.value)));
			}
			return callback(null);
		});
	} 
};
