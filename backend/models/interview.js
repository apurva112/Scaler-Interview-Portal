const mongoose = require('mongoose')
const Schema = mongoose.Schema;


 const interview = new Schema({
     participants: {
         type: [{
             type: Schema.Types.ObjectId,
             ref: 'Participant'
         }]
     },
     title: {
        type: String,
        required: true
     },
     startTime: { 
        type: Date,
        default: Date.now
    },
    endTime: { 
        type: Date, 
        default: Date.now 
    },  
    status: {
        type: Number,
        default: 0,
        enum: [-1, 0, 1]
    }
 });

module.exports = mongoose.model('Interview', interview);