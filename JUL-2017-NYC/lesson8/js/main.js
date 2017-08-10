// When I click on a button
$('.gallery-btn').click(function() {
	// Show the div with the corresponding id from that button's data-div
	// const id = '#' + $(this).attr('data-div');
	const id = '#' + $(this).data('div');

	// Hide all the gallery images
	$('.gallery-img').fadeOut();
	// Show just the div we want
	$(id).fadeIn();
});
