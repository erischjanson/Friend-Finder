var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var apiRouter = require("./app/routing/apiRoutes.js");
var htmlRouter = require("./app/routing/htmlRoutes.js");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// app.use(function(req,res,next){
// 	req.body.age--;
// 	next();
// });

app.use("/api", apiRouter);
app.use("/", htmlRouter);
// app.post("/elizabeth", function(req, res){
// 	console.log(req.body);
	
// 	// res.sendFile(__dirname + "/app/public/home.html");
// 	res.status(202).json({message: "request body", data:req.body});
// })

require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});