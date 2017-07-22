// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/public/home.html"));
  });
  
  //reservation route loads reservations.html
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/public/reservations.html"));
  });

  // guestbook route loads guestbook.html
  app.get("/comments", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/public/guestbook.html"));
  });
};

  //photo route that loads photos.html
  app.get('/photos', function(req, res) {
  	res.sendFile(path.join(__dirname, '../views/public/photos.html'))
  })

  //contact route that loads contact.html
   app.get('/photos', function(req, res) {
  	res.sendFile(path.join(__dirname, '../views/public/contact.html'))
  })
