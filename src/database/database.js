// requiring mongoose to connect to database
const mongoose = require('mongoose')

function connect () {
    // remote conection with Mongodb - ATLAS
    const username = 'admin'
    const password = 'admin'
    const database = 'api-restful'
    
    mongoose.connect(`mongodb+srv://${username}:${password}@api-restful.ceducaz.mongodb.net/${database}?retryWrites=true&w=majority`)
    
    const db = mongoose.connection
    
    db.once('open', () => console.log('application connected to database!'))
    db.on('error', () => console.error.bind(console, 'some error has ocurred!'))

    /* LOCAL CONECTION
        mongoose.connect('ex: mongodb://localhost:27017/projeto-api-restful')
        const db = mongoose.connection
        db.once('open', () => console.log('application connected to database!'))
        db.on('error', () => console.error.bind(console, 'some error has ocurred!'))
    */
}

module.exports = {connect}