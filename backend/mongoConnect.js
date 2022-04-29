const Mongoose = require('mongoose');
Mongoose.Promise = require('bluebird');
require('dotenv').config();

Mongoose.connect("mongodb+srv://amitt:Amitkumar1997@cluster0.lomtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.db = db;
