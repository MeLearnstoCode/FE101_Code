var slideImages = $('#slides img');

// Start at slide 0
var slideNumber = 0;

// Show the starting image
slideImages.eq(slideNumber).show();

function showNextSlide() {

	// Hide/fadeOut the current image
	slideImages.eq(slideNumber).fadeOut();

	// Update slideNumber
	slideNumber++;
	if (slideNumber > slideImages.length - 1) {
		slideNumber = 0;
	}

	// Show/fadeIn the new image
	slideImages.eq(slideNumber).fadeIn();

}

// When the user clicks #slides
$('#slides').click(showNextSlide);
// Show next slide every second
setInterval(showNextSlide, 1000);