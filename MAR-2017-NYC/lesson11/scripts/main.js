function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partner + ' ' + ' with ' + numKids + ' kids.';
    return future;
}

// $('#fortune-btn').click(function() {
// 	// Get the data from the inputs
// 	var numChildren = $('#numChildren').val();
// 	var partnerName = $('#partnerName').val();
// 	var geoLocation = $('#geoLocation').val();
// 	var jobTitle = $('#jobTitle').val();

// 	// Construct our fortune
// 	var fortune = tellFortune(jobTitle, geoLocation, partnerName, numChildren);

// 	// Output the fortune to #fortune
// 	$('#fortune').html(fortune);
// });

// When the form is submitted
$('#fortune-form').submit(function(event) {
	// Don't refresh the page
	event.preventDefault();

	// Get the data from the inputs
	var numChildren = $('#numChildren').val();
	var partnerName = $('#partnerName').val();
	var geoLocation = $('#geoLocation').val();
	var jobTitle = $('#jobTitle').val();

	// Construct our fortune
	var fortune = tellFortune(jobTitle, geoLocation, partnerName, numChildren);

	// Output the fortune to #fortune
	$('#fortune').html(fortune);
});

// $('#fortune-btn').click(function() {
// 	// Get the data from the inputs
// 	var numChildren = $('#numChildren').val();
// 	var partnerName = $('#partnerName').val();
// 	var geoLocation = $('#geoLocation').val();
// 	var jobTitle = $('#jobTitle').val();

// 	// Output the fortune to #fortune
// 	$('#fortune').html('You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partner + ' ' + ' with ' + numKids + ' kids.');
// });

$('#age-form').submit(function(event) {
	event.preventDefault();

	// Get the birth year from the input
	var birthYear = $('#birthYear').val();

	var currentYear = new Date().getFullYear();

	// Calculate the age
	var age = currentYear - birthYear;

	// Output it to the page
	$('#age').html('You are either ' + (age - 1) + ' or ' + age);
});

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

$('#grade-btn').click(function() {
	// Get the score from the input
	var score = parseFloat($('#score').val());

	// Turn it into a letter grade
	var letterGrade = assignGrade(score);

	// Put that grade in the div
	$('#grade').html(letterGrade);
});

var total = 0;

$('#cash-register').submit(function(event) {
	event.preventDefault();

	// Get info from inputs
	var item = $('#item').val();
	var cost = parseFloat($('#cost').val());

	// Add a list item
	$('#itemList').append('<li>' + item + ' $' + cost.toFixed(2) + '</li>');

	// Add cost to total
	total += cost;

	// Write new total to page
	$('#total').html(total.toFixed(2));
});



