var express = require('express');
var bodyParser = require("body-parser");

var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var ACCOUNTS_COLLECTION = "accounts";
var GLOBAL_SETTINGS_COLLECTION = "global_settings";

var app = express();
app.use(express.static(__dirname + "/dist"));

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
    if(err) {
        console.log(err);      
        process.exit(1);
    }

    db = database;
    console.log("Database connection ready");

    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log("App now running on port ", port);
    });
});

function error(msg) {
    console.log("error ", msg);
}

// routes

app.get("/api/settings", function(req, res) {

    console.log("starting request /settings");

    db.collection(GLOBAL_SETTINGS_COLLECTION).find({}).toArray(function(err, docs){
        if(err) {
            error(err.message);
        } else {
            console.log(docs[0]);
            res.status(200).json(docs[0]);
        }
    });
});