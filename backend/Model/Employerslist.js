const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employerslistschema = new Schema({
    
    name : { type : String},
    username : { type : String},
    gender : {type : String},
    email : { type : String},
    password : {type : String},
    
})

module.exports = mongoose.model('employerslist', employerslistschema);