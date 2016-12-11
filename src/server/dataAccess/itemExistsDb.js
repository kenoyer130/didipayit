/**
 * Returns if the item exists
 * @callback itemExistsCallback
 * @param {bool} itemExists
 */

/**
 * Checks if the account exists based on the collection _id field
 * @param {Database} db
 * @param {string} collection 
 * @param {*} id 
 * @param {itemExistsCallback} callback
 */
module.exports = function (db, collection, field, id, callback) {

    var filter = {}

    if(field === 'email') {
        filter = {
            email : id
        };
    } else if (field === 'family') {
        filter = {
            family: id
        }
    }

    db.collection(collection + "").find(filter)
        .toArray(function (err, docs) {
            if (err) {
                callback.has_error = true;
                callback.error_type = "database";
                callback.error = err.message;
            } else {
                callback(docs.length !== 0);
            }
        });
}