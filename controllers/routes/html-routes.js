var path = require("path");
var Reservation = require("../../models/")["Reservations"];
var Comment = require("../../models/")["Comments"];

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../index.html"));
	});
<<<<<<< HEAD

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
=======
}
>>>>>>> e30fab3fda8763bc0b40e4efb600757fe232e037
