const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tejanoule007:7zvrUEvqSyzCKBvB@cluster0.ktpviuw.mongodb.net/CSV');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;