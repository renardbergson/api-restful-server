const express = require('express')

// requiring routes directory and file
const routes = require('./routes/routes')

const app = express()
app.use(express.urlencoded({ extended: true }))

// setting routes
app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))