var express = require('express');
var bodyParser = require("body-parser");
var request = require('request');
var path = require('path')

var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var ACCOUNTS_COLLECTION = "accounts";
var GLOBAL_SETTINGS_COLLECTION = "global_settings";

var app = express();
var public_path = path.join(__dirname + "/../../dist");

app.use(express.static(public_path));

console.log("public files served from " + public_path);

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

app.get("/api/github_authentication_callback", function(req, res) {
    
    var session_code = req.query.code;

    request({
        uri: 'https://github.com/login/oauth/access_token', 
        method: "POST",
        json: {
          "client_id" :  process.env.GITHUB_CLIENT_ID,
          "client_secret" : process.env.GITHUB_CLIENT_SECRET,
          "code" : session_code, 
        },
        function(err, response, body) {
            console.log(body);
            var github_access_token = JSON.parse(body)["access_token"];
        }
    });            
});
