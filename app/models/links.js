var mongoose = require('mongoose');

var LinkSchema = mongoose.Schema({
    real: {
        type: String,
        required: true
    },
    short: {
        type: String,
        unique: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

mongoose.model('Links', LinkSchema);