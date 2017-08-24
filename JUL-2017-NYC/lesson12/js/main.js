$(document).ready(function() {

	// Pick a secret word
	const wordBank = ["pumpernickel", "apple", "banana", "pear"];
	const randomNumber = Math.floor(Math.random() * wordBank.length);
	const secretWord = wordBank[randomNumber].toUpperCase();

	// Clear the blanks
	// $("#blanks").html("");

	// // For each letter in our secret word
	// for (let i = 0; i < secretWord.length; i++) {
	// 	// Add a blank to the page
	// 	$("#blanks").append("<span>_</span>");
	// }

	// Add blanks to the page
	$("#blanks").html("<span>_</span>".repeat(secretWord.length));

	// When the user clicks on a letter button
	$(".letter").click(function() {
		// Get the letter from the button
		const letterClicked = $(this).text();

		// Disable the button
		$(this).attr("disabled", "true");

		// Iterate through the letters in the secret word
		$("#blanks span").each(function(index, element) {
			// If the letter from the secretWord for that index matches letterClicked
			if (secretWord[index] === letterClicked) {
				// Fill in the blank
				$(element).html(letterClicked);
			}
		});
	});

});
