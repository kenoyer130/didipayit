
module.exports = function(app, db) {

    var authToken = require('../../services/AuthToken');

    app.get("/api/public/local_authentication", function(req, res) {
        
        // if we are not set to local mode then ignore this route
        if(!process.env.LOCAL_MODE) {
            res.status(404).send();
            return;
        }

        // generate a random auth token
        var auth_token = Math.random();

        var token = authToken.generate(auth_token);

        res.write(JSON.stringify({ token: token, email: 'test@test.com' }));
        res.status(200).send();
    });
}