var Reservation = require("../../models/")["Reservations"];
var Comment = require("../../models/")["Comments"];

module.exports = function(app) {
	app.post("/api/new/reservation", function(req, res) {
		Reservation.create({
			name: req.body.name,
			date: req.body.date,
			nights: req.body.nights
		});
	});

	app.post("/api/new/comment", function(req, res) {
		Comment.create({
			name: req.body.name,
			comment: req.body.comment
		});
	});
};
