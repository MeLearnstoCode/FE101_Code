// When user clicks the Go button
$('#go-btn').click(function() {

	// Get the value from the input
	const textVal = $('#text-input').val();

	// Put that value in the #text div
	$('#text').text(textVal);
});