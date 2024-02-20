// For access to the enviroment file
require('dotenv').config()

// Import express.js
const express = require('express')

// Intialize the express.js app
const app = express()

// Provide ability to parse json data to the app
app.use(express.json());

// Listen for requests with the port from the .env file
app.listen(process.env.PORT, () => { console.log(`Listening on port ${process.env.PORT}`)})


