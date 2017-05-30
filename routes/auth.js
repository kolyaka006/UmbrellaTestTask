var models = require('../app/db')

module.exports = function (req, res, next) {
    var token = req.headers.token;
    if (token) {
        models.Tokens.findOne({token: token}, function (err, resp) {
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
