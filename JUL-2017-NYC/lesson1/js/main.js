var nav = $('nav ul');

$('nav').onePageNav();

// When #menu-icon is clicked
$('#menu-icon').click(function() {
	nav.slideToggle();
});

// When I resize the window
$(window).resize(function() {
   	// Get the width
    var width = $(window).width();

    // If width is bigger than breakpoint
    // and nav is hidden
	if(width > 768 && nav.is(':hidden')) {
		// Remove the 'style' attribute from the nav
	    nav.removeAttr('style');
	}
});