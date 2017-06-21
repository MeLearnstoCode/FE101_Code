// https://codepen.io/nicolethenerd/pen/JJNOYo?editors=1010

// When user clicks 'Go', put text in meme
$('#meme-btn').click(function() {
	// Get the text from the input
	const memeText = $('#meme-text').val();

	// Write it to the #img-text div
	$('#img-text').text(memeText);
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

/**
 * Takes a numeric score and turns it into a letter 
 * grade when user clicks 'Grade Me.'
 */
$('#grade-button').click(function() {
	// Get the score from the input
	const gradeInput = $('#grade-input').val();

	// Figure out the letter grade
	const letterGrade = assignGrade(gradeInput);

	// Put the letter grade in the #grade div
	$('#grade').text(letterGrade);
});
