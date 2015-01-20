/* globals app */
var MongoClient = require('mongodb').MongoClient;

// connect to mongo
if(!app.db || !app.db.collection) {
	MongoClient.connect(app.config.db.host,function(err, conn) {
		if(err) {
			throw new Error(err);
		} else {
			app.db = conn;
		}
	});
}
