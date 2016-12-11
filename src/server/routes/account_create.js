var itemExistsDb = require('../dataAccess/itemExistsDb');
var accountCreateDb = require('../dataAccess/accountCreateDb');

module.exports = function (app, db) {

    app.post("/api/account/", function (req, res) {
        createAccount(req, res);
    });

    function createAccount(req, res) {
        var accountEmail = req.body.accountEmail;
        var family = req.body.family;

        // check if account exists
        itemExistsDb(db, "account", "email", accountEmail, function(itemExists) {
            if (itemExists) {
                // if so return 409 error
                res.status(409).send();
            } else {
                // if not create account
                accountCreateDb(db, accountEmail, family, function () {
                    // return 200 success
                    res.write('{}');
                    res.status(200).send();
                });
            }
        });
    }
};