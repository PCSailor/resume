var router = require('express').Router(); // back to app.js and looking for something to do routing
var Resume = require('../models/resume.model');

// Note: GET Route using Mongoose & Mongo
router.get('/', function(req, res) {
    console.log('GET resume route hit');
    // db query
    Resume.find({}, function(err, result) { // name must match var name above
        if (err) {
            console.log('GET resume route error', err);
            res.sendStatus(500);
        } else {
            res.send(result);
        }
    }); // Resume.find
}); // router.get

module.exports = router;