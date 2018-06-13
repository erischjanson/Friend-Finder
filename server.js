var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var apiRouter = require("./app/routing/apiRoutes.js");
var htmlRouter = require("./app/routing/htmlRoutes.js");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "app/public")));

// Serve static content for the app from the "public" directory in the application directory.


app.use("/api", apiRouter);
app.use("/", htmlRouter);




require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});