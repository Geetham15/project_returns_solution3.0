const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/returnsSolution'
mongoose.connect(dbUrl)

module.exports = mongoose