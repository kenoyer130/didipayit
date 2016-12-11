/**
 * Creates a new account 
 * @callback createAccountCallback 
 * @param {bool} success
 */

/**
 * Checks the db if the account exists
 * @param {db} DataBase
 * @param {string} email 
 * @param {string} family 
 * @param {createAccountCallback}
 */
module.exports = function (db, email, family, callback) {
    db.collection('account').insert({ _id: email, family: family }, function (err, docs) {
        callback(err !== null);
    });
}