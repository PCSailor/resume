// app.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var resumeRouter = require('./routes/resume.route.js');

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // creates req.body
app.use(bodyParser.json());


app.use('/resume', resumeRouter);

app.listen(port, function() {
    console.log(new Date().getFullYear() + " app.js & server run on port 5000");
});
console.log("app.js is run");