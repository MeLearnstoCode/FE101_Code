// Loops

var x = 0; // initialization/setup
while (x < 5) { // condition/test
	console.log(x); // the stuff that happens / aka the body of the loop
	x = x + 1; // update
}

for (var i = 0; i < 5; i++) {
	console.log(i);
}

// Don't really do this!
var isRaining = false;
while (isRaining) {
	// ping weather server and update isRaining
}

// Loop Exercises

for (var i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i + ' is even.');
	} else {
		console.log(i + ' is odd.');
	}
}

for (var multiplier = 0; multiplier <= 10; multiplier++) {
  for (var i = 0; i <= 10; i++) {
  	var result = i * multiplier;
  	console.log(i + ' * ' + multiplier + ' = ' + result);
  }
}

function assignGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

for (var i = 60; i <= 100; i++) {
  var grade = assignGrade(i);
  if (grade === "A" || grade === "F") {
    console.log("For " + i + ", you got an " + grade + "."); 
  } else {
    console.log("For " + i + ", you got a " + grade + "."); 
  }
}

/**
 * Returns true if the password is valid.
 */
function passwordValidate(password) {
  // Password length
  if (password.length < 8) {
    return false;
  }
  
  // Lowercase chars
  if (!hasLowerCase(password)) {
    return false;
  }
  
  // Uppercase
  if (!hasUpperCase(password)) {
    return false;
  }
  
  // We met all the criteria
  return true;
}

function hasLowerCase(str) {
    return (/[a-z]/.test(str));
}

function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

// jQuery codepen: http://codepen.io/nicolethenerd/pen/YZdqbo

