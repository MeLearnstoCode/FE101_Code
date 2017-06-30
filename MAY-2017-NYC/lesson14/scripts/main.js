$(document).ready(function() {

	// Close modal when clicking 'exit'
	$('.exit, .modal-wrapper').click(function() {
		// Fade out the modal wrapper
		$('.modal-wrapper').fadeOut();

		// Remove .no-scroll from the body
		$('body').removeClass('no-scroll');
	});

	// Open modal when clicking 'open'
	$('.open').click(function() {
		// Fade in the modal wrapper
		$('.modal-wrapper').fadeIn();

		// Add .no-scroll to body
		$('body').addClass('no-scroll');
	});

	// When the modal gets clicked, don't tell the modal-wrapper
	$('.modal').click(function(event) {
		event.stopPropagation();
	});


});
