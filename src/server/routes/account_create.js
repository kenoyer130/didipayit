var itemExistsDb = require('../dataAccess/itemExistsDb');
var accountCreateDb = require('../dataAccess/accountCreateDb');

module.exports = function (app, db) {

    app.post("/api/account/", function (req, res) {
        createAccount(req, res);
    });

    function createAccount(req, res) {
        var accountEmail = req.body.accountEmail;
        var family = req.body.family;
        var joinFamily = req.body.joinFamily;

        itemExistsDb(db, "account", "family", family, function (familyExists) {
    
            // if we are attempting to join a family make sure it exists
            if(joinFamily && !familyExists) {
                res.statusMessage = "Attempting to join a family that does not exist";
                res.status(500).send();
                return;
            }

            // if we are creating a new family make sure it doesn't exist
            if(!joinFamily && familyExists) {
                res.statusMessage = "Family already exists.";
                res.status(500).send();
                return;
            }

            // check if account exists
            itemExistsDb(db, "account", "email", accountEmail, function (accountExists) {
                if (accountExists) {
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
        });
    }
};