$('nav').onePageNav();

$('#nav-btn').click(function() {
	$('nav').slideToggle();
});

var nav = $('nav');

// When user resizes the window
$(window).resize(function() {
	// Get the width of the page
   	var width = $(window).width();
   	// If width > breakpoint and the nav is hidden
   	if (width > 768 && nav.is(':hidden')) {
   		// Remove the style attribute
      nav.css('display', '');
   	}
});