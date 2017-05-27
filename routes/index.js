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
            return
        }
        var save = function () {
            models.Links.create({real: req.body.real, short: req.body.short}, function (err, resp) {
                res.send(resp)
            })
        };

        if (!req.body.short) {
            generate(function (text) {
                req.body.short = text;
                save()
            })
        } else {
            models.Links.findOne({short: req.body.short}, function (err, body) {
                if (body) {
                    res.sendStatus(351)
                } else {
                    save()
                }
            })
        }
    })
});

router.get('/:url', function (req, res, next) {
    res.render('index', {title: 'Test Task'});
});


function generate(cb) {
    var text = '',
        possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    models.Links.findOne({short: text}, function (err, obj) {
        if (obj) {
            generate();
        } else {
            cb && cb(text)
        }
    })
}

module.exports = router;
