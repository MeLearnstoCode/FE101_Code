// When I click the close button
$(".close").click(function() {
	$(".modal-wrapper").fadeOut();
	// $("body").css("overflow", "auto");
	$("body").removeClass("no-scroll");
});

// When I click the open button
$(".show-modal-btn").click(function() {
	$(".modal-wrapper").fadeIn();
	// $("body").css("overflow", "hidden");
	$("body").addClass("no-scroll");
});