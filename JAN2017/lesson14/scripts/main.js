$(".modal-wrapper, .exit").click(function(event) {
	// Don't act like a link.
	event.preventDefault();

	// Hide the modal
	$('.modal-wrapper').fadeOut();

	// $('body').css('overflow', 'auto');
	$('body').removeClass('no-scroll');
});

$('.open').click(function() {
	$('.modal-wrapper').fadeIn();

	// $('body').css('overflow', 'hidden');
	$('body').addClass('no-scroll');
});

$('.modal').click(function(event) {
	event.stopPropagation();
});