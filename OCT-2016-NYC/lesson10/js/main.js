$('#pokemon-form').submit(function() {
	// Get the value from the textbox
	var pokemonName = $('#pokemon-txt').val();

	// Get the # of letters
	var numLetters = pokemonName.length;

	// Write to the output spans
	$('#pokemon-out').html(pokemonName);
	$('#pokemon-letters-out').html(numLetters);

	// Show the result
	$('#pokemon-result').show();

});

function createFortune(numChildren, partnerName, geoLocation, jobTitle) {
	return "You will be a " + jobTitle + " in " + geoLocation + " married to " + partnerName + " with " + numChildren + " kids.";
}

$('#fortune-btn').click(function() {
	// Get values from the textboxes
	var numChildren = $('#numChildren-in').val();
	var partnerName = $('#partnerName-in').val();
	var geoLocation = $('#geoLocation-in').val();
	var jobTitle = $('#jobTitle-in').val();

	// Create the fortune
	var fortune = createFortune(numChildren, partnerName, geoLocation, jobTitle);

	// Write the fortune to the page
	$('#fortune-out').html(fortune);
});

$('#age-btn').click(function() {
	// Get the year from the textbox
	var birthYear = $('#birthYear-in').val();
	alert(birthYear);

	// Calculate age
	var age = 2016 - birthYear;
	var otherAge = age - 1;

	// Write it to page
	$('#age-out').html('You are either ' + age + ' or ' + otherAge);
});

function calculateAge(birthYear) {
	var age = 2016 - birthYear;
	var otherAge = age - 1;

	return 'You are either ' + age + ' or ' + otherAge;
}

$('#age-btn').click(function() {
	// Get the year from the textbox
	var birthYear = $('#birthYear-in').val();

	// Calculate age
	var ageSentence = calculateAge(birthYear);

	// Write it to page
	$('#age-out').html(ageSentence);
});


