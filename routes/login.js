var express = require('express'),
    router = express.Router(),
    models = require('../app/db');

router.get('/', function (req, res, next) {
    res.render('login', {title: 'Test Task'});
});

router.post('/login', function (req, res, next) {
});

module.exports = router;
