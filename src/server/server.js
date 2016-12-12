var express = require('express');
var bodyParser = require("body-parser");
var request = require('request');
var path = require('path')

var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var app = express();
var public_path = path.join(__dirname + "/../../dist");

app.use(express.static(public_path));
app.use(bodyParser.json());

console.log("public files served from " + public_path);

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
    if(err) {
        console.log(err);      
        process.exit(1);
    }

    db = database;
    console.log("Database connection ready");

    setupRoutes(app, db);

    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port
        console.log("App now running on port ", port);
    });
});

function error(msg) {
    console.log("error ", msg);
}

function setupRoutes(app, db) {
    require('./routes/public/settings_get')(app, db);
    require('./routes/public/github_authentication_callback')(app, db);
    require('./routes/public/local_authentication')(app, db);
    require('./routes/account_get')(app, db);
    require('./routes/account_create')(app, db);
}
