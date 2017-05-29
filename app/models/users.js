var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    email: String,
    password:  String,
    created_at: {
        type: Date,
        default: new Date()
    }
})


mongoose.model('Users', UserSchema);