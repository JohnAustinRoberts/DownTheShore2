$("#reserve").click(function(){
	console.log("clicked");
	var name = $("#nameField").val().trim();
	var date = $("#dateField").val().trim();
	var nights = $("#nightsField").val().trim();

	var newReservation = {
		name: name,
		date: date,
		nights: nights
	};
	$.post("/api/new/reservation", newReservation)
		.done(function(data) {
			console.log(data);
			res.render("reservations");
		});
});

$("#comment").click(function() {
	console.log("comment");
	var name = $("#commentName").val().trim();
	var comment = $("#commentArea").val();

	var newComment = {
		name: name,
		comment: comment
	};
	$.post("/api/new/comment", newComment)
		.done(function(data) {
			console.log(data);
			res.render("guestbook");
		});
});

$("#nightsField").change(function() {
	console.log("newPrice");
	console.log(this.value);
	displayPrice(this.value);
});

function displayPrice(nights) {
	var price = 125 * nights;
	$("#priceDisplay").text("$" + price);
};