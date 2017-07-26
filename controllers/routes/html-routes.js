var path = require("path");
var Reservation = require("../../models/")["Reservations"];
var Comment = require("../../models/")["Comments"];

module.exports = function(app) {

	app.get("/home", function(req, res) {
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
}
