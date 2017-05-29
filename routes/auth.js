var express = require('express'),
    router = express.Router(),
    models = require('../app/db');

router.get('/', function (req, res, next) {
    var token = req.body.token || req.params.token;
    models.Tokens.findOne({token: token}, function(err, resp){
        if (resp) {
            next()
        } else (
            res.redirect('login')
        )
    })
});


module.exports = router;
