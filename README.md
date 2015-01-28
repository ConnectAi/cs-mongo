cs-mongo
================
A [MongoDB](http://www.mongodb.com/) adapter for [Cornerstone](https://github.com/ConnectAi/cs)


### To install

We will eventually push this project to `npm`, but for now:

	npm install git://github.com/ConnectAi/cs-mongo.git


### Configure

Under any environment in your `config.json` file, in a Cornerstone project:

```json
    ...

	"db": {
		"adapter": "mongodb",
		"mongodb" : {
			"host": "mongodb://localhost:27017/${DATABASE}"
		}
	}

    ...
```


### Usage

```js
app.db.collection("${COLLECTION}")
    .find({ name: "Taylor Swift" })
    .toArray(function(err, results) {
        console.log(results);
    });
```
