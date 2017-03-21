$(document).ready(function () {
	// Put all your JavaScript here

	// When you click the menu icon, 
	// hide or show the nav
	$(".menu-icon").click(function () {
		$("nav").slideToggle();

	});

	// Fix the bug where the nav goes away
	$(window).resize(function () {
		
		var width = $(window).width();

		// When page is bigger than 768px
		if(width > 768) {
			// Remove style attribute
			$("nav").removeAttr("style");
		}

	});


});