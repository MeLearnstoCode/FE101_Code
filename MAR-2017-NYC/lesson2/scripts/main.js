// Set up the nav scrolling.
$('nav').onePageNav();

// Menu toggle button.
$('.menu-icon').click(function() {
	$('nav li').slideToggle();
});

var $menu = $('nav li');

// Show nav again when page is resized.
$(window).resize(function() {
	var width = $(window).width();

	if (width > 768 && $menu.is(':hidden')) {
		$menu.removeAttr('style');
	}
});