// requiring mongoose to connect to database
const mongoose = require('mongoose')

// inserting methods inside a function to export
function connect () {
    //mongoose.set('useNewUrlParser', true)
    //mongoose.set('useUnifiedTopology', true)

    mongoose.connect('mongodb://localhost:27017/projeto-api-restful')
    const db = mongoose.connection
    db.once('open', () => console.log('application connected to database!'))
    db.on('error', () => console.error.bind(console, 'some error has ocurred!'))
}

module.exports = {connect}