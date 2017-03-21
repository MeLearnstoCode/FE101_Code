// Hangman

// Create buttons A-Z
for (var i = 0; i < 26; i++) {
	var letter = String.fromCharCode(i + 65);
	$("#letter-buttons").append("<button>" + letter + "</button>");
}

// Create a word list
// Bonus: Get a much longer list from an API
var wordList = ["apple", "banana", "pear", "grape", "clementine"];

// Pick a random word
var word = wordList[Math.floor(Math.random() * wordList.length)];

// Set remaining guesses
var remainingGuesses = 10;

// Add a <span>_</span> for each letter in word
for(var i = 0; i < word.length; i++) {
	$("#blanks").append("<span>_</span>");
}

// User clicks a letter button
$("#letter-buttons button").click(function() {
	// Disable the button
	$(this).prop("disabled", "true");

	// Did the letter match any of the letters in word?
	var letter = $(this).html();

	var correctGuess = false;

	// Look at each letter in the word one at a time
	for(var i = 0; i < word.length; i++) {

		// If the letter from the word is equal to the letter that was guessed
		if (word[i].toLowerCase() === letter.toLowerCase()) {

			// Fill in the blank
			$("#blanks span").eq(i).html(letter);

			correctGuess = true;
		}

	}

	// When we're done with the loop, if we didn't fill in any blanks
	if (!correctGuess) {

		// Subtract 1 from remainingGuesses
		remainingGuesses--;

		// Let the user know how many guesses they have left
		alert('Remaining Guesses:' + remainingGuesses);

	}
});