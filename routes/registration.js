var express = require('express'),
    md5= require('md5'),
    router = express.Router(),
    models = require('../app/db');

router.get('/', function (req, res, next) {
    res.render('registration', {title: 'Test Task'});
});

router.post('/create-user', function (req, res, next) {
    // hash password
    req.body.password = md5(req.body.password);
    //create user
    models.Users.create(req.body, function (err, resp) {
        // create token and send
        models.Tokens.create({user_id: resp._id}, function (err, token) {
            res.send(token)
        })
    })
});

module.exports = router;
