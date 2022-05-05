const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolformlistschema = new Schema({
    
    firstname : { type : String},
    lastname : { type : String},
    grade : { type : String},
    schoollastattended : {type : String},
    gender : {type : String},
    dateofbirth: {type : String},
    address : {type : String}

})

module.exports = mongoose.model('schoolformlist', schoolformlistschema);