var mongoose = require('mongoose');

var LinkSchema = mongoose.Schema({
    real: String,
    short:  String,
    created_at: {
        type: Date,
        default: new Date()
    }
})

mongoose.model('Links', LinkSchema);