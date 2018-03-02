// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friends = require("../data/friends");
var express = require("express");
var apiRouter = express.Router();
//get route to display the JSON data of all possible friends
apiRouter.get("/friends", function(req, res){
	res.json(friends);
	console.log("testing");
});
//post route to handle incoming surevey results and to handle compatibility logic
// apiRouter.post("/friends", function(req, res){
// 	console.log("Request body/name: ", req.body.name);
// 	var newFriend = req.body;
// 	friends.push(newFriend);
// 	console.log("New Friend: ", newFriend);
// 	console.log("ApiRoutes");
// 	res.json(friends);//"compared/matched data goes here:" ,
// });
//this route is resonsible for taking the new user data and comparing to existing users data
apiRouter.post("/friends", function(req, res){
	var newFriend = req.body;
	// console.log(newFriend);
	var newFriendName = newFriend.name;
	var newFriendPhoto = newFriend.photo;
	var newFriendScores = newFriend.scores;
	console.log(newFriendScores);

	var match = {
		name: "",
		photo:"",
		friendDifference: 11
	};

	var totalDifference = 0;

	var scoresDifferences = [];

	// var match = 0;
	// var matchName = "";
	// var matchPhoto = "";
	//var totalDifference  = 10000;

	//go through all the existing friends in the friends array

	for(var i = 0; i < friends.length; i++){
		console.log("friend: " + JSON.stringify(friends[i]));

		totalDifference = 0;

		for (var j = 0; j < friends[i].scores[j]; j++){
			totalDifference += Math.abs(parseInt(newFriendScores[j])-parseInt(friends[i].scores[j]));
		}
		console.log("totalDifference: " + totalDifference);
		// scoresDifferences.push(difference);
		// console.log(scoresDifferences);		
	}


})


module.exports = apiRouter;