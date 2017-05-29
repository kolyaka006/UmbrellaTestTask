var mongoose = require('mongoose');

var TokenSchema = mongoose.Schema({
    user_id: String,
    token: String,
    created_at: {
        type: Date,
        default: new Date()
    }
})

TokenSchema.pre('save', true, function (next, done) {
    this.token = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 10; i++) {
        this.token += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    done()
    next()
})

mongoose.model('Tokens', TokenSchema);