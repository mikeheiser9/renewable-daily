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

  app.get("/How-to-Set-Up-Your-Own-Solar-Panels", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/setupsolar.html"));
  });

  app.get("/Home-Solar-101", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/solar101.html"));
  });

  app.get("/Best-State-Rebate-Programs-For-Renewable-Energy", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/staterebate.html"));
  });

  app.get("/Wind", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/wind.html"));
  });

  app.get("/Is-Wind-Energy-Right-For-You", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/wind4u.html"));
  });

  app.get("/Zoning-Requirements-For-Renewable-Energy-Systems", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/zoning.html"));
  });


  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};