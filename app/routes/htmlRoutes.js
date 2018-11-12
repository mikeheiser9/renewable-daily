// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
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
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/About", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/Understaning-Different-Types-of-Green-Energy", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog-post.html"));
  });

  app.get("/Solar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/category.html"));
  });

  app.get("/Contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/Financial-Benefits-of-Switching-to-Solar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/financialbenefits.html"));
  });

  app.get("/Geothermal", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/geothermal.html"));
  });

  app.get("/More", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/more.html"));
  });

  app.get("/On-the-Grid-vs-Off-the-Grid-Renewable-Energy-Systems", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/onvsoff.html"));
  });

  app.get("/Reducing-Home-Energy-Consumption-to-Maximize-Solar-Power-Profits", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reduce.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};