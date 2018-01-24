// Player X starts
let currentPlayer = 'X';

// When the user clicks a square
$('.square').click(function() {	
	// If there is already something in that square, do nothing.
	console.log($(this).text());

	if ($(this).text()) {
		alert('Try another square.');
		return;
	}

	// An X or O is placed in that square
	$(this).text(currentPlayer);

	// It becomes the other player's turn
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
});

// When 'New Game' is clicked
$('.new-game').click(function() {
	// Reset the board
	$('.square').text('');
});


// Update the current player in the HTML


