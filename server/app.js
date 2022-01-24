const express = require('express')
const mongoose = require('mongoose');

// Initialize the app
let app = express();
// Send message for default URL
const routes = require('./Routes/ProductRouts')

app.use('/',routes)



module.exports = app;