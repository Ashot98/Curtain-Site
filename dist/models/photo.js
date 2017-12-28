var mongoose = require('mongoose');

var Photo = mongoose.model('Photo', {
    path: {
        type: String,
       // required: true,
        minlenght: 1,
        trim: true
    },
    type: {
        type: String,
      //  required: true,
        minglenght: 1,
        trim: true
    }
 }); 

 module.exports = {Photo};