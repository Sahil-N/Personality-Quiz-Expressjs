 var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "..html/index.html"));
  });

  app.get("/quiz", function(req, res) {
    res.sendFile(path.join(__dirname, "..html/quiz.html"));
  });

  // If no matching route is found default to home
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "..html/results.html"));
  });
};
