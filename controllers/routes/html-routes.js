var path = require("path");
var Reservation = require("../../models/")["Reservations"];
var Comment = require("../../models/")["Comments"];

module.exports = function(app) {

	app.get("/", function(req, res) {
		console.log("hello")
		res.render("home");
	});

	app.get("/reservation", function(req, res) {
		Reservation.findAll({}).then(function(results) {
			var hbsObject = {
				reservations: results
			};
			console.log(hbsObject);
			res.render("reservations", hbsObject);
		});
	});

	app.get("/contact", function(req, res) {
		res.render("contact");
	});

	app.get("/guestbook", function(req, res) {
		Comment.findAll({}).then(function(results) {
			var hbsObject = {
				comments: results
			};
			console.log(hbsObject);
			res.render("guestbook", hbsObject);
		});
	});

	app.get("/photos", function(req, res) {
		res.render("photos");
	});
}
