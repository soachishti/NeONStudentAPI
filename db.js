var uuid 		= require('node-uuid');
var crypto 		= require('crypto');
var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : process.env.OPENSHIFT_MYSQL_DB_HOST,
	user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
	pass     : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
	port     : process.env.OPENSHIFT_MYSQL_DB_PORT,
	database : process.env.OPENSHIFT_APP_NAME
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

var dbConfig 	= {
	algorithm 	: 'aes-256-ctr',
	password  	: process.env.NEON_SECURE_PASSWORD	
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
 
db.serialize(function() {
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
});

module.exports = {
	CreateUser: function() {
		var id = uuid.v1();
		connection.query("INSERT INTO UserData ('key', 'value', 'expire') VALUES (?,?,?)", 
			[id, encrypt('{}'), Math.round(new Date().getTime() / 1000)]
		);
		return id;
	},
	DeleteUser: function (key, value) {
		console.log("Delete User " + key);
		connection.query("DELETE FROM UserData WHERE key = ?",[key]);
	},
	UpdateUser: function (key, value) {
		console.log("Update User")
		connection.query("UPDATE UserData SET value = ??, expire = ?? WHERE key = ?",
			[
				encrypt(JSON.stringify(value)),
				(Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout),
				key
			]);
	},
	GetUser: function (key, callback) {
		// Update expire date
		connection.query("UPDATE UserData SET expire = ?? WHERE key = ?",
		[
			(Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout),
			key
		]);
		
		connection.query("SELECT value FROM UserData WHERE key = ?", [key],
		function(err, row) {
			if (typeof row != 'undefined') {
				return callback(JSON.parse(decrypt(row.value)));
			}
			return callback(null);
		});
	} 
};
