var red = 0;
var green = 0;
var blue = 0;

// When I click the red button
$("#red").click(function() {
	// Add 5 to the red variable.
	red = red + 5;

	// Change the background
	$("body").css("background", "rgb(" + red + "," + green + "," + blue + ")");
});

// When I click the blue button
$("#blue").click(function() {
	// Add 5 to the blue variable.
	blue = blue + 5;

	// Change the background
	$("body").css("background", "rgb(" + red + "," + green + "," + blue + ")");
});

// When I click the green button
$("#green").click(function() {
	// Add 5 to the green variable.
	green = green + 5;

	// Change the background
	$("body").css("background", "rgb(" + red + "," + green + "," + blue + ")");
});











//////

// function myClickFunction() {
// 	alert("test");
// }

// $("#test").click(myClickFunction);

// $("#test").click(function(event) {
// 	console.log(event);

// 	if(event.shiftKey) {
// 		alert("you pressed shift");
// 	} else {
// 		alert("you didn't press shift!");
// 	}
// });
