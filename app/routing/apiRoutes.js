// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var express = require("express");
var friends = require("../data/friends");
var apiRouter = express.Router();

apiRouter.get("/friends", function(req, res){
	res.json(friends);
	console.log("testing");
});

apiRouter.post("/friends", function(req, res){
	console.log("Request body/name: ", req.body.name);
	var newFriend = req.body;
	friends.push(newFriend);
	console.log("New Friend: ", newFriend);
	console.log("ApiRoutes");
	res.json("compared/matched data goes here:" , friends);
});


module.exports = apiRouter;