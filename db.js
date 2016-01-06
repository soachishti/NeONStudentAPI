var uuid = require('node-uuid');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(".data.db");
 
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

 //db.close();
 
module.exports = {
	CreateUser: function() {
		var id = uuid.v1();
		db.run("INSERT INTO UserData ('key', 'value', 'expire') VALUES ($key, $value, $expire)", {
			$key: id,
			$value: '{}',
			$expire: Math.round(new Date().getTime() / 1000)
		});
		return id;
	},
	UpdateUser: function (key, value) {
		console.log("Update User")
		db.run("UPDATE UserData SET value = ?, expire = ? WHERE key = ?",
			[
				JSON.stringify(value),
				(Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout),
				key
			]);
	},
	GetUser: function (key, callback) {
		// Update expire date
		db.run("UPDATE UserData SET expire = ? WHERE key = ?",
		[
			(Math.round(new Date().getTime() / 1000) + global.setting.DataStoreTimeout),
			key
		]);
		
		db.get("SELECT value FROM UserData WHERE key = ?", key,
		function(err, row) {
			if (typeof row != 'undefined') {
				return callback(JSON.parse(row.value));
			}
			return callback(null);
		});
	} 
};
