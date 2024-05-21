require('dotenv').config();
const mongoose = require('mongoose');
 

var MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection

console.log("Mongo URI: ", MONGO_URI);

connection.on('error', ()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection successful')
})

module.exports = mongoose