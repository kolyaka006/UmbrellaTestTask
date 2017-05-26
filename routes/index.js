var express = require('express'),
    router = express.Router(),
    models = require('../app/db')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Test Task'});
});

router.get('/generate-url', function (req, res, next) {
    res.render('index', {title: 'Test Task'});
});

router.post('/create-url', function (req, res, next) {
    res.render('index', {title: 'Test Task'});
});

router.get('/:url', function (req, res, next) {
    res.render('index', {title: 'Test Task'});
});

module.exports = router;
