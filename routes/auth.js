var models = require('../app/db')

module.exports = function (req, res, next) {
    // getting token from header request
    var token = req.headers.token;
    // if token not empty
    if (token) {
        // finding token in DB
        models.Tokens.findOne({token: token}, function (err, resp) {
            // if token is found add user ID to request and continue processing
            if (resp) {
                req.user_id = resp.user_id;
                next()
            } else (
                res.sendStatus(403)
            )
        })
    } else {
        res.sendStatus(403)
    }
};
