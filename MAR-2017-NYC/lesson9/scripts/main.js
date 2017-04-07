// 0. When user clicks 'Go'
$('.go-btn').click(function() {
	// 1. Get the info from the text box
	var input = $('.user-input').val();

	// 3. Output the text to the page
	$('.placeholder').html(input);
});

var index = 0;
// When user clicks 'Change Image'
$('.change-image').click(function() {
	// What number?
	index++;
	if (index > 10) {
		index = 0;
	}

	// Update the image src
	$('.meme img').attr('src', 'http://lorempixel.com/600/400/cats/' + index);
});



// When user clicks word-btn
$('.word-btn').click(function() {
	// Get the word from the input
	var input = $('.word-input').val();

	// Turn it into pig latin
	var pigLatin = input.substring(1) + input[0] + 'ay';

	// Output the new word
	$('.word-output').html(pigLatin);
});


// Hint: word[0] or .charAt(0)
       // substring

















