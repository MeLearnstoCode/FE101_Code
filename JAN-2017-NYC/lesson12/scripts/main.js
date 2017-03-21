$('.fortune-button').click(function() {
	// Get the data from the inputs
	var numChildren = $('.num-children').val();
	var partnerName = $('.partner-name').val();
	var geoLocation = $('.geo-location').val();
	var jobTitle = $('.job-title').val();
	
	// Make string
	var fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' with ' + partnerName + ' and ' + numChildren + '.';

	// Write answer into div
	$('.fortune-out').html(fortune);
});

$('#age-button').click(function() {
	// Get the birth year
	var birthYear = $('#birth-year').val();

	// Calculate the age
	var currentYear = 2017;
	var age = currentYear - birthYear;

	// Write to the div
	$('#age').html('You are either ' + age + ' or ' + (age - 1));
});

$('#snack-button').click(function() {
	// Get the data from the inputs
	var currentAge = parseFloat($('#current-age').val());
	var snacksPerDay = parseFloat($('#snacks-per-day').val());

	console.log(typeof currentAge);

	// Calculate
	var totalSnacks = calculateSnacks(currentAge, snacksPerDay);

	// Write it to the html
	$('#snacks-out').html(totalSnacks);	
});

function calculateSnacks(currentAge, snacksPerDay) {
	return (100 - currentAge) * snacksPerDay * 365;
}
