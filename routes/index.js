var express = require('express'),
    router = express.Router(),
    models = require('../app/db'),
    request = require('request');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Test Task'});
});

router.post('/create-url', function (req, res, next) {
    request(req.body.real, function (err, resp, body) {
        if (err) {
            res.sendStatus(350)
        }
        var save = function () {
            console.log('.......req.body', req.body)
            console.log('.......req.body type', typeof req.body)
            models.Links.create(req.body, function () {
                res.sendStatus(200)
            }, function (err) {
                console.log('.......err', err)
                res.sendStatus(351)
            })
        };

        if (!req.body.short) {
            req.body.short = generate()
            save()
        } else {
            save()
        }
    })
});

router.get('/:url', function (req, res, next) {
    res.render('index', {title: 'Test Task'});
});


function generate() {
    var text = "",
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log('.......text', text)
    models.Links.findOne({short: text}, function () {
        console.log('.......1')
        generate();
    }, function () {
        console.log('.......2')
        return text
    })

}

module.exports = router;
