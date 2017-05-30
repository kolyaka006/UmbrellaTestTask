var mongoose = require('mongoose');

var LinkSchema = mongoose.Schema({
    real: String,
    short: String,
    user_id: String,
    time_life: Number,
    count: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

mongoose.model('Links', LinkSchema);