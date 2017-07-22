// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  
//**********************************************************
//********Comments API routes*******************************
//**********************************************************

  // GET route for getting all of the comments
  app.get('/api/comments/', function(req, res) {
    db.Comments.findAll({})
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // GET route to create a new comment
  app.get('/api/comments/new', function(req, res) {
    console.log(req.body);
    db.Comments.create({
      name: req.body.name,
      body: req.body.body,
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

 

  // DELETE route for deleting comments
  app.delete('/api/comments/:id', function(req, res) {
    db.Comments.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // PUT route for updating comments
  app.put('/api/comments', function(req, res) {
    db.Comments.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

//*************************************************
//**********Reservation API routes*****************
//*************************************************
//GET route for getting all reservations
 app.get('/api/reservations/new', function(req, res) {
 	db.Reservations.findAll({})
 	.then(function(dbReservation) {
 		res.json(dbReservation);
 	});
 });

 //Get route for creating a new reservation
 app.get('/api/reservations/post', function(req, res) {
 	db.Reservations.findAll({})
 	.then(function(dbReservation) {
 		res.json(dbReservation);
 	});
 });

 //DELETE route for deleting a reservation
 	app.delete('/api/reservations/:id', function(req, res) {
 		db.Reservations.destroy({
 			where: {
 				id: req.params.id
 			}
 		})
 		.then(function(dbReservation) {
 			res.json(dbReservation);
 		});
 	});

 //PUT route for updating reservations
 	app.put('/api/reservations', function(req, res) {
 		db.Reservations.update(req.body,
 		{
 			where: {
 				id: req.body.id
 			}
 		})
 		.then(function(dbReservation) {
 			res.json(dbReservation);
 		});
 	});
};
