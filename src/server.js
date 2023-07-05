const express = require('express')
const cors = require('cors')
const app = express()

// importing routes directory and file
const routes = require('./routes/routes')

// importing database file and function, calling function
const database = require('./database/database')
database.connect()

// enabling and configuring CORS - allows other domains to consume our API (or not)
app.use(cors()) - //Enable All CORS Requests

// setting server to receive data on json format, we're not receiving data from form anymore
app.use(express.json()) 

// setting routes
app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))