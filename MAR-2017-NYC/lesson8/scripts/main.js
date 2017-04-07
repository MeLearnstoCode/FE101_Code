$(document).ready(function() {

	// $('button').on('click', function () {
	//   alert('clicked!');
	// });

	// $('button').click(function(event) {
	// 	console.log(event);

	// 	$(this).attr('disabled', 'true');

	//  	// alert('clicked!');
	// });

	$('a').click(function(event) {
		// Don't act like a link.
		event.preventDefault();

		alert('Haha! This wasn\'t really a link!');
	});

	// When I click the button
	$('#show-more').click(function() {
		// Hide or show the div
		$('#text').fadeToggle();

	});

	$('#more-buttons').click(function() {
		$('#placeholder').append('<button class="new">New</button>');
	});

	// This doesn't work!!! .new buttons don't exist yet!
	// $('.new').click(function() {
	// 	alert('test');
	// });

	// This will work because #placeholder exists at ready() time
	$('#placeholder').on('click', '.new', function() {
		alert('test');
	});

	var banner = $('#banner');
	banner.css('color', 'red').html('Welcome!').show();

	$














});