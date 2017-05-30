var express = require('express'),
    router = express.Router(),
    models = require('../app/db');

router.get('/', function (req, res, next) {
    res.render('login', {title: 'Test Task'});
});

router.get('/sign-in', function (req, res, next) {
    models.Users.findOne({email: req.query.email, password: req.query.password}, function (err, user) {
        if (user) {
            models.Tokens.findOne({user_id: user._id}, function (err, token) {
                res.send({token: token.token})
            })
        }
    })
});

module.exports = router;
