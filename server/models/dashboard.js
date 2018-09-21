const mongoose = require('mongoose')

const dashboard = mongoose.Schema({
    header: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('dashboard', dashboard)