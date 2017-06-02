var express = require('express'),
    md5= require('md5'),
    router = express.Router(),
    models = require('../app/db');

router.get('/', function (req, res, next) {
    res.render('registration', {title: 'Test Task'});
});

router.post('/create-user', function (req, res, next) {
    req.body.password = md5(req.body.password);
    models.Users.create(req.body, function (err, resp) {
        models.Tokens.create({user_id: resp._id}, function (err, token) {
            res.send(token)
        })
    })
});

module.exports = router;
