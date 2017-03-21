// document.getElementById("puppy").onload = function() {
// 	$("#puppy-spinner").hide();
// }

// $(window).load(function() {
// 	$("#overlay").fadeOut();
// });

window.setTimeout(function() {
	$("#overlay").fadeOut();
}, 3000);

var currentImage = 0;
// Save slider images in a variable.
var sliderImages = $("#slider img");

window.setInterval(function() {
	// Hide the current image
	sliderImages.eq(currentImage).fadeOut();

	// Update the currentImage number
	// if (currentImage < sliderImages.length - 1) {
	// 	currentImage = currentImage + 1;
	// } else { // Reset to 0 if we reached the last image
	// 	currentImage = 0;
	// }

	currentImage = (currentImage + 1) % sliderImages.length;

	// Show the new image
	sliderImages.eq(currentImage).fadeIn();

}, 1000);