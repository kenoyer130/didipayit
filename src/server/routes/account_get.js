module.exports = function(app, db) {

    app.get("/api/account/:email", function(req, res) {
        var email = req.params.email;

        db.collection('account').find({email: email}).toArray(function(err, docs) {
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
}