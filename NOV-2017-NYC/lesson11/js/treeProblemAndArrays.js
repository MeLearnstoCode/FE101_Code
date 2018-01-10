/**
 * Prints out a tree with the specified number of rows.
 * 
 * For example:
 * drawTree(3);
 * 
 * would print the following:
 * *
 * ***
 * *****
 * 
 * @param {number} numRows The number of rows.
 */
function drawTree(numRows) {
  for (let i = 1; i <= numRows; i++) {
    const numStars = i * 2 - 1;
    console.log('*'.repeat(numStars));
  }
}

function drawChristmasTree(numRows) {
  for (let i = 1; i <= numRows; i++) {
    const numStars = i * 2 - 1;
    const numSpaces = numRows - i;
    console.log(' '.repeat(numSpaces) + '*'.repeat(numStars));
  }
}

drawChristmasTree(5);

// function drawTree(numRows) {
//   for (let i = 1; i <= numRows; i++) {
//     const numStars = i * 2 - 1;
//     console.log(repeatString('*', numStars));
//   }
// }

function repeatString(str, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result = result + str;
  }
  return result;
}

drawTree(4);


// const prices = [123, 12, 181, 38];
// for (let i = 0; i < prices.length; i++) {
//   console.log(prices[i]);
// }

// const colors = ['red', 'orange', 'yellow'];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// let total = 0;
// for (let i = 0; i < prices.length; i++) {
//   total = total + prices[i];
// }
// console.log('The total is ' + total);

// User guesses a letter
let hiddenWord = 'CODE';
let userLetter = 'O';
let userLetterIsInWord = false;

// For each letter in the hidden word
for (let i = 0; i < hiddenWord.length; i++) {
  const currentLetter = hiddenWord[i];
  
  // Is this the letter the user guessed?
  if (userLetter === currentLetter) {
    userLetterIsInWord = true;
  }
}

if (userLetterIsInWord) {
  console.log('Correct!');
} else {
  console.log('Try again!');
}

const colors = ['red', 'orange', 'yellow'];
colors.push('green');

for (let i = 0; i < colors.length; i++) {
  const currentColor = colors[i];
  console.log(currentColor);
}

const rainbowColorsLetters = 'ROYGBIV';
for (let i = 0; i < rainbowColorsLetters.length; i++) {
  console.log(rainbowColorsLetters[i]);
}
