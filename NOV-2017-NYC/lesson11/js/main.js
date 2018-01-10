// // When user clicks button
// $('#pokemon-btn').click(function() {
// 	// Get the Pokemon from the text box
// 	const pokemon = $('#pokemon-txt').val();

// 	// How many letters?
// 	const numLetters = pokemon.length;

// 	// Write outputs to the placeholder spans
// 	$('#pokemon-out').html(pokemon);
// 	$('#pokemon-letters-out').html(numLetters);

// 	// Show the output text
// 	$('#pokemon-placeholder').fadeIn();
// });

// When user submits the form
$('#pokemon-form').submit(function(event) {
	// Stop the page from refreshing
	event.preventDefault();

	// Get the Pokemon from the text box
	const pokemon = $('#pokemon-txt').val();

	// How many letters?
	const numLetters = pokemon.length;

	// Write outputs to the placeholder spans
	$('#pokemon-out').html(pokemon);
	$('#pokemon-letters-out').html(numLetters);

	// Show the output text
	$('#pokemon-placeholder').fadeIn();
});


// When user submits the fortune form
$('#fortune-form').submit(function(event) {
	// Prevent refreshing the page
	event.preventDefault();

	// Get the info from the text boxes
	const numChildren = $('#numChildren').val();
	const partnerName = $('#partnerName').val();
	const geoLocation = $('#geoLocation').val();
	const jobTitle = $('#jobTitle').val();

	// Create the fortune string
	const fortune = `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numChildren} kids.`;

	// Write the fortune to the #fortune paragraph
	$('#fortune').text(fortune);

});


$('#age-btn').click(function() {
	// Get the birth year from the text box
	const birthYear = $('#birth-year').val();

	// Calculate the user's age
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;

	// Write the age to the page
	$('#age').text('You are either ' + age + ' or ' + (age - 1));
});

























