// 1. How can we freeze the page when the modal is open so you can't scroll?

// 2. Can you click on the grey area to close the modal?

$('#show-modal').click(function() {
	$('#modal-wrapper').fadeIn();
	$('body').addClass('no-scroll');
});

$('#hide-modal, #modal-wrapper').click(function() {
	$('#modal-wrapper').fadeOut();
	$('body').removeClass('no-scroll');
});

$('#modal').click(function(event) {
	event.stopPropagation();
});