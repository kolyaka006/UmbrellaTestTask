var mongoose = require('mongoose')

var LinkSchema = mongoose.Schema({
    short: String,
    real: String,
    created_at: {
        type: Date,
        default: new Date()
    }
})

mongoose.model('Links', LinkSchema)