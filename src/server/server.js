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
        var port = server.address().port
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
    requestGithubToken(session_code, res);
});

app.get("/api/account/:email", function(req, res) {
    var email = req.params.email;

    db.collection(ACCOUNTS_COLLECTION).find({email: email}).toArray(function(err, docs) {
        if(err) {
            error(err.message);
        } else {
            if(docs.length === 0) {
                res.status(200).json({});
            } else {
                res.status(200).json(docs[0]);
            }
        }
    });    
});

function requestGithubToken(session_code, res) {
    var url = 'https://github.com/login/oauth/access_token';
    request.post({
        uri: url, 
        json: {
          "client_id" :  process.env.GITHUB_CLIENT_ID,
          "client_secret" : process.env.GITHUB_CLIENT_SECRET,
          "code" : session_code 
        }
       },
        function(err, response, body) {

            if(err) {
                error(err.message)
                return;
            }

            var github_access_token = body["access_token"];
            requestGithubAuthentication(github_access_token, res);
        }
    );
}

function requestGithubAuthentication(access_token, res) {
    request.get({
        uri: 'https://api.github.com/user/emails?access_token=' + access_token,
        headers: {
            'User-Agent' : 'didipayit'
        }
       },
        function(err, response, body) {

                if(err) {
                    error(err.message)
                    return;
                }

                var primaryEmail = JSON.parse(body)
                .filter(function(accountEmail) {
                    return accountEmail.primary == true;         
                }).map(function(accountEmail) {
                    return accountEmail.email;
                })[0];
                
                var closeScript = '<scri';
                closeScript += 'pt>opener.postMessage( { "action" : "github_authenticated", "email" : "' + primaryEmail + '", "access_token" : "' + access_token + '"}, "*");window.close();</scri';
                closeScript += 'pt>';

                res.send(closeScript);
        });
}
