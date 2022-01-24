// contains server configuration 
const fs = require('fs')
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
require('./Models/Products') //Model will be accessible through out the app
const app = require('./app')


// Setup server port
var port = 3001;

// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true, autoIndex: false });
const connection = mongoose.connection;
const db =  mongoose.connection.db;
console.log('db is '+db)

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})



// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Node-react-mongodb app on port " + port)})