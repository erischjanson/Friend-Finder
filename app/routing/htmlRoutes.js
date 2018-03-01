var path = require("path");
var express = require("express");
var htmlRouter = express.Router();



  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  htmlRouter.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  htmlRouter.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  htmlRouter.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  module.exports = htmlRouter;




