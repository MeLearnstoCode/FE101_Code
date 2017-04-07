function isPositive(num) {
	if (num > 0) {
		return true;
	} else {
		return false;
	}
}

function getCapital(state) {
	state = state.toLowerCase();

	if (state === 'ny') {
		return 'Albany';
	} else if (state === 'ma') {
		return 'Boston';
	} else if (state === 'fl') {
		return 'Talahassee';
	} else {
		return 'I don\'t know';
	}
}

getCapital('ny');

getCapital('MA');
getCapital('Ny');

function calculateTaxes(income) {
	if (income < 10000) {
		return .05 * income;
	} else if (income < 20000) {
		return .1 * income;
	} else {
		return .15 * income;
	}
}

calculateTaxes(3000);

for (var i = 0; i < 100; i++) {
	if (i % 3 === 0) {
		console.log(i);
	}
}

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	}  else {
		console.log(i);
	}
}

function drawTree(numRows) {
	for (var i = 0; i < numRows; i++) {
		var row = '';
		var numStars = i * 2 + 1;

		// Create the row string.
		for (var j = 0; j < numStars; j++) {
			row = row + '*';
		}
		console.log(row);
	}
}

function drawTree(numRows) {
	for (var i = 0; i < numRows; i++) {
		var numStars = i * 2 + 1;
		console.log('*'.repeat(numStars));
	}
}

function drawTree(numRows) {
	for (var i = 0; i < numRows; i++) {
		var numStars = i * 2 + 1;
		var numSpaces = numRows - 1 - i;
		console.log(' '.repeat(numSpaces) + '*'.repeat(numStars));
	}
}

