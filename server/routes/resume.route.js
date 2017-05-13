var router = require('express').Router(); // back to app.js and looking for something to do routing
var resume = require('../models/resume.model.js');

// Note: GET Route using Mongoose & Mongo
router.get('/', function(req, res) {
    console.log('GET resume route hit');
    // db query
    resume.find({}, function(err, result) { // name must match var name above
        if (err) {
            console.log('GET resume route error', err);
            res.sendStatus(500);
        } else {
            res.send(result);
        }
    }); // resume.find
}); // router.get

module.exports = router;
console.log("resume.route.js is run");