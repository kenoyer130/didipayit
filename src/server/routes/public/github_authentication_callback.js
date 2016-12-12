
module.exports = function (app, db) {

    var authToken = require('../../services/AuthToken');

    app.get("/api/public/github_authentication_callback", function (req, res) {

        var session_code = req.query.code;
        requestGithubToken(session_code, res);
    });

    function requestGithubToken(session_code, res) {
        var url = 'https://github.com/login/oauth/access_token';
        request.post({
            uri: url,
            json: {
                "client_id": process.env.GITHUB_CLIENT_ID,
                "client_secret": process.env.GITHUB_CLIENT_SECRET,
                "code": session_code
            }
        },
            function (err, response, body) {

                if (err) {
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
                'User-Agent': 'didipayit'
            }
        },
            function (err, response, body) {

                if (err) {
                    error(err.message)
                    return;
                }

                var primaryEmail = JSON.parse(body)
                    .filter(function (accountEmail) {
                        return accountEmail.primary == true;
                    }).map(function (accountEmail) {
                        return accountEmail.email;
                    })[0];

                var token = authToken.generate(access_token);

                var closeScript = '<scri';
                closeScript += 'pt>opener.postMessage( { "action" : "github_authenticated", "email" : "' + primaryEmail + '", "access_token" : "' + token + '"}, "*");window.close();</scri';
                closeScript += 'pt>';

                res.send(closeScript);
            });
    }
}