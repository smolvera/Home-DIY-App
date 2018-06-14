// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");

// var logger = require("morgan");



// scrapping tool
// var axios = require("axios");


// Setting the port
var PORT = process.env.PORT || 3000;

// Initializing the Express Port
var app = express();

// setting our express router
var router = express.Router()

// Requires routes and pass through router
require("./config/routes")(router);

// Use express.static to serve the public folder as a static directory
app.use(express.static(__dirname + "/public"));

// set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));

// Requests go through the router middleware
app.use(router);

// connect to deployed database otherwise Connect to the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds255930.mlab.com:55930/heroku_z7blwv6m";

mongoose.connect(db, function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Mongoose connection is successful!");
    }
})

// mongoose.Promise = Promise;





// Use morgan logger for logging requests
// app.use(logger("dev"));







// Links require routes
// var routes = require("./routes/routes.js");


// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});