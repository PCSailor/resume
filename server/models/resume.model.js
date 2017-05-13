var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// NOTE: will prevent a user from ability to dump anything into the db
// NOTE: mongoose is to mongo like pg is to SQL

mongoose.connect('mongodb://localhost/resume'); // NOTE: address to db using mongo/mongoose
console.log('router.get/dbconnection error', err);

mongoose.model( // mongoose model function defining how database info comes in
    'Resume', // model name
    new Schema({ // NOTE: Constructor function
        "name": String,
        "description": String, // typeof
        "status": { type: Boolean, default: false } // NOTE: Schema structure // what will entered data be
    }, {
        collection: 'resume'
    }));
module.exports = mongoose.model('Resume'); // NOTE: model function calls  mongoose.model-model name
console.log("resume.model.js is run");