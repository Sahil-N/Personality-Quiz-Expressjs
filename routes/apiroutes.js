var tableData = require("../data/resultsData");


module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/resultsjson", function(req, res) {
    res.json(tableData);
  });


  app.post("/api/resultsjson",function(req,res){
    console.log("post request made");
    console.log(req.body);
    res.json(true);
  });
}
// app.post("/api/results", function(req, res) {