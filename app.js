var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cron = require('node-cron'),

    Links = require('./app/models/links'),
    Users = require('./app/models/users'),
    Tokens = require('./app/models/tokens'),

    config = require('./app/config'),
    models = require('./app/db'),

    index = require('./routes/index'),
    login = require('./routes/login'),
    registration = require('./routes/registration');

var app = express();

// view engine setup
mongoose.connect(config.database)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', login);
app.use('/registration', registration);
app.use('/', index);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

cron.schedule('30 * * * *', function () {
    models.Links.remove({time_life: {$lt: new Date().getTime()}}, function () {
        console.log('Old links was deleted')
    })
});

module.exports = app;
