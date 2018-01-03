// Set index to 0
let current = 0;

// Save the images in the slider
const $images = $('.slider img');

// Setup the slider by showing the first image
$images.eq(current).show();

// When user clicks a cat image
$('.slider').click(function() {

	// Hide the current image
	$images.eq(current).fadeOut(1000);

	// Update the index
	// current = current + 1; // current++;

	// if (current >= $images.length) {
	// 	current = 0;		
	// }

	current = (current + 1) % $images.length;

	// Show the next image
	$images.eq(current).fadeIn(1000);
});














//////////////

// Set index to 0

// When user clicks a cat image

	// Hide all the images

	// Update the index

	// Show the next image (by adding the active class)