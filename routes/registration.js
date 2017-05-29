var express = require('express'),
    router = express.Router(),
    models = require('../app/db');

router.get('/', function (req, res, next) {
    res.render('registration', {title: 'Test Task'});
});

router.post('/create-user', function (req, res, next) {
    models.Users.create(req.body, function(err, resp){
        models.Tokens.create({user_id: resp._id}, function (err, token) {
            res.send(token)
        })
    })
});

module.exports = router;
