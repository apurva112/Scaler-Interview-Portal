const mongoose = require('mongoose')
const Schema = mongoose.Schema;

 const participant = new Schema({
     name: {
         type: String,
         required: true
     },
     email: {
         type: String,
         required: true
     },
     resume:{
         type: String,
         default: null
     }
 })

 module.exports = mongoose.model('Participant', participant);