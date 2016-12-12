
module.exports = function(app, db) {

    app.get("/api/public/settings", function(req, res) {

        db.collection('global_settings').find({}).toArray(function(err, docs){
            if(err) {
                error(err.message);
            } else {
                res.status(200).json(docs[0]);
            }
        });
    });
}