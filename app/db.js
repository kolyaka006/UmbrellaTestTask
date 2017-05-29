var mongoose = require('mongoose')

module.exports = {
    Links: mongoose.model('Links'),
    Users: mongoose.model('Users'),
    Tokens: mongoose.model('Tokens')
}