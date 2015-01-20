/* globals app */
var MongoClient = require('mongodb').MongoClient;

// all cs-* components export a promise
module.exports = new Promise(function(resolve, reject) {

	// connect to mongo
	if(!app.db || !app.db.collection) {
		MongoClient.connect(app.config.db.host,function(err, conn) {
			if(err) {
				reject(err);
			} else {
				app.db = conn;
				resolve(app.db);
			}
		});
	}

});
