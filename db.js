var dbConfig 	= require('./config.js');
var uuid 		= require('node-uuid');
var sqlite3 	= require('sqlite3').verbose();
var db 			= new sqlite3.Database(dbConfig.filename); 
var crypto 		= require('crypto');
  
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
	db.run(
		"CREATE TABLE IF NOT EXISTS UserData(			" + 
		"	id INTEGER PRIMARY KEY   AUTOINCREMENT,	" +
		"	key           CHAR(50)    	NOT NULL,	" +
		"	value         TEXT,						" +
		"	expire        DATETIME					" +
		");											" 
	);
	
	// Clear expired data
	db.run(
		"DELETE FROM UserData WHERE expire < ?" ,
		(Math.round(new Date().getTime() / 1000))
	);
});
db.close(); 

module.exports = {
	CreateUser: function() {
		var db = new sqlite3.Database(dbConfig.filename); 
		var id = uuid.v1();
		db.run("INSERT INTO UserData ('key', 'value', 'expire') VALUES ($key, $value, $expire)", {
			$key: id,
			$value: encrypt('{}'),
			$expire: Math.round(new Date().getTime() / 1000)
		});
		db.close();
		return id;
	},
	DeleteUser: function (key, value) {
		var db = new sqlite3.Database(dbConfig.filename); 
		console.log("Delete User " + key);
		db.run("DELETE FROM UserData WHERE key = ?",[key]);
		db.close();
	},
	UpdateUser: function (key, value) {
		var db = new sqlite3.Database(dbConfig.filename); 
		console.log("Update User")
		db.run("UPDATE UserData SET value = ?, expire = ? WHERE key = ?",
			[
				encrypt(JSON.stringify(value)),
				(Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout),
				key
			]);
		db.close();
	},
	GetUser: function (key, callback) {
		var db = new sqlite3.Database(dbConfig.filename); 
		// Update expire date
		db.run("UPDATE UserData SET expire = ? WHERE key = ?",
		[
			(Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout),
			key
		]);
		
		db.get("SELECT value FROM UserData WHERE key = ?", key,
		function(err, row) {
			db.close();
			if (typeof row != 'undefined') {
				return callback(JSON.parse(decrypt(row.value)));
			}
			return callback(null);
		});
	} 
};