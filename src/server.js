const express = require('express')

// importing routes directory and file
const routes = require('./routes/routes')

// importing database file and function, calling function
const database = require('./database/database')
database.connect()

const app = express()
app.use(express.json()) 
// setting server to receive data on json format, we're not receiving data from form anymore

// setting routes
app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))