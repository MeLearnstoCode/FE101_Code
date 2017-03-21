$("nav").onePageNav();

// When I click the menu icon
$(".menu-icon").click(function() {
	// Toggle the nav ul
	$("nav ul").slideToggle();

});

var menu = $('nav ul');

$(window).resize(function(){
   var w = $(window).width();
   if(w > 768 && menu.is(':hidden')) {
       menu.removeAttr('style');
   }
});