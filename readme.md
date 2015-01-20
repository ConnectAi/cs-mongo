A Mongo adapter for CS

###To install
npm install git@github.com:ConnectAi/cs-mongo.git

###Configure
In your cs config.json
Under any environment.

    "db": {
        "adapter": "mongodb",
        "mongodb" : {
            "host": "mongodb://localhost:27017/{{your db}}"
        }
    }

###Usage

    app.db.find({name: "sean"}).toArray(function(results) {
        console.log(results);
    });

