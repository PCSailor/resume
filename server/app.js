// app.js
var express = require('express');
var vexpress = express();
var bodyParser = require('body-parser');
var port = 1969;
var resumeRouter = require('/routes/resume.route.js');

// middleware
vexpress.use(express.static('public'));
vexpress.use(bodyParser.urlencoded({ extended: true })); // creates req.body
vexpress.use(bodyParser.json());


vexpress.use('/resume', resumeRouter);

vexpress.listen(port, function() {
    console.log(new Date().getFullYear() + "app.js & Server Running on port 1969");
});
console.log("app.js is run");