$.getJSON('https://opentdb.com/api.php',
 {
 	amount: 10,
 	category: 18,
 	type: 'multiple',
 }, 
 function(data) {
 	displayQuestion(data.results[0]);
});


function displayQuestion(questionInfo) {
	// Display the question
	$('.question').html(questionInfo.question);

	// Pick a random number 0-3
	const correctAnswerNumber = Math.floor(Math.random() * 4);

	const correctLi = $('.choices li').eq(correctAnswerNumber);
	correctLi.find('input').val('correct');
	correctLi.find('label').html(questionInfo.correct_answer);

	const incorrectLis = $('.choices li').not(correctLi);
	incorrectLis.find('input').val('incorrect');

	for (let i = 0; i < 3; i++) {
		incorrectLis.eq(i).find('label').html(questionInfo.incorrect_answers[i]);
	}
}



// When user hits submit
$('.submit-btn').click(function() {
	// Look at which choice was selected - was it correct?
	if ($('.choices input:checked').val() === 'correct') {
		alert('Correct!');

		$('.submit-btn').hide();
		$('.next').show();
	} else {
		alert('Try again.');
	}
});

// Refresh the page to load the next question.
$('.next').click(function() {
	location.reload();
});
