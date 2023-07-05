const express = require('express')
const cors = require('cors')
const app = express()

// importing routes directory and file
const routes = require('./routes')

// importing database file and function, calling function
const database = require('./database/database')
database.connect()

// enabling and configuring CORS - allows other domains to consume our API (or not)
// app.use(cors()) - Enable All CORS Requests
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://example.com.br'
    // remind to to a hard refresh on browser to verify! (shift + refresh)
]

app.use(cors({
    origin: function (origin, callback) {
        let allowed = true

        if (!origin) allowed = true
        // because mobile app doesn't have an origin

        if (!allowedOrigins.includes(origin)) allowed = false
        // if the origin is not included in our list

        callback(null, allowed)
        // the first parameter is a message we want to return to who made the request
        // the second one is if the response is allowed or not, true or false
    }

    /*
        app.use(cors({
            origin: allowedOrigins
        }))
    */
}))

// setting server to receive data on json format, we're not receiving data from form anymore
app.use(express.json()) 

// setting routes
app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))