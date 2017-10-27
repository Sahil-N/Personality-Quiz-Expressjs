var tableData = require("../data/resultsData");
var express = require("express");
var computeFunction = require("../services/comparechoices");
var router = express.Router();



  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

router.route("/resultsjson")
  .get(function(req, res) { 
    res.json(resultsData);
  })

  .post(function(req,res){ //responsible for taking in user choice array, compare it with character's choices & send back winner
    console.log("post request made");
    console.log(req.body);

    var newMatch = computeFunction(req.body.results.answers);

    res.json({
      name: newMatch.name,
      picture: newMatch.pic
    })
  });



// app.post("/api/results", function(req, res) {
















module.exports = router;