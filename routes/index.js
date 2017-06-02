var express = require('express'),
    router = express.Router(),
    models = require('../app/db'),
    config = require('../app/config'),
    auth = require('./auth'),
    request = require('request');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Test Task'});
});

router.post('/create-url', auth, function (req, res, next) {
    // checking real url
    request(req.body.real, function (err, resp, body) {
        if (err) {
            res.sendStatus(350)
            return
        }

        var save = function () {
            //create query parameter
               var query = {
                real: req.body.real,
                short: req.body.short,
                user_id: req.user_id,
                time_life: new Date().getTime() + config.time_life
            }
            // saving pair links
            models.Links.create(query, function (err, resp) {
                res.send(resp)
            })
        };
        // if short link empty - create him
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

router.get('/get-all-links-user', auth, function (req, res, next) {
    // getting all pair links by user id
    models.Links.find({user_id: req.user_id}, function (err, links) {
        res.send(links)
    })

})

router.get('/:url', function (req, res, next) {
    // finding pair links by short link and redirecting to real link
    models.Links.findOne({short: req.params.url}, function (err, body) {
        // if pair founded, update her count
        if (body) {
            models.Links.update({_id: body._id}, {$inc: {count: 1}}, function () {
                res.redirect(body.real)
            })
        } else {
            res.render('error', {title: 'Test Task'});
        }
    })
});


function generate(cb) {
    var text = '',
        possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // generate short link
    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    // if short link exist, use generate again
    models.Links.findOne({short: text}, function (err, obj) {
        if (obj) {
            generate();
        } else {
            cb && cb(text)
        }
    })
}

module.exports = router;
