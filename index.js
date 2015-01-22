/* globals app */
let MongoClient = require('mongodb').MongoClient;


// cs-* components may export a promise, to delay the loading of the server
module.exports = new Promise(function(resolve, reject) {
	if (!app.db || !app.db.collection) {
		// connect to MongoDB
		MongoClient.connect(app.config.db.host, function(err, conn) {
			if (err) return reject(err);

			app.db = conn;
			resolve(app.db);
		});
	}
});
