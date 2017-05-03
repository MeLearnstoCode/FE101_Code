var clickCount = 0;

// When a user clicks a square
$('.square').click(function() {
	// If it is X's turn (if click count is even)
	if (clickCount % 2 === 0) {
		// Mark the square with X
		$(this).html('X');
		// Check whether X won
		checkForWinner('X');
	}
	// Otherwise, it is O's turn
	else {
		// Mark the square with O
		$(this).html('O');
		// Check whether O won
		checkForWinner('O');
	}
	// Add 1 to the click count
	clickCount = clickCount + 1; // or clickCount++;
});

var winningCombos = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
];

function checkForWinner(player) {
	// For each winning combo, did the player mark all 3?
	for (var i = 0; i < winningCombos.length; i++) {
		
	}
}

/*
Takes a player and a combo, such as [1, 2, 3] -
returns true if all three squares belong to that player.
*/
function checkCombo(player, combo) {
	return squareBelongsToPlayer(player, combo[0]) &&
			squareBelongsToPlayer(player, combo[1]) &&
			squareBelongsToPlayer(player, combo[2]);
}

function squareBelongsToPlayer(player, squareNumber) {
	return $('#square' + squareNumber).html() === player;
}