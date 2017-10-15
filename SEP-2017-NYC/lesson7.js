function calculateTip(total) {
  const tipPercent = 0.15;
  const tip = total * tipPercent;
  console.log('Total: ' + total + ' Tip: ' + tip);
  return tip;
}

// const billTotal = prompt('How much was your total bill?');
// calculateTip(billTotal);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function squareNumber(num) {
  const result = num * num;
  console.log(`${num} squared equals ${result}.`);
  return result;
}

// function squareNumber(num) {
//   return num * num;
// }

squareNumber(5);

// const inches = prompt('How many inches is one side of the paper?');
// squareNumber(inches);

function halfNumber(num) {
  return num / 2;
}

function percentOf(num1, num2) {
  return num1 / num2 * 100;
}

function areaOfCircle(radius) {
  const result = Math.PI * radius * radius;
  const roundedString = result.toFixed(2);
  console.log(roundedString);
  return parseFloat(roundedString);
}

// console.log(areaOfCircle(5).toFixed(2));

function epicFunction(num) {
  const result1 = halfNumber(num);
  const result2 = squareNumber(result1);
  const result3 = areaOfCircle(result2);
  const result4 = percentOf(result2, result3);
  return result4;
}

epicFunction(10);

////

const x = 15;

if (x > 0) {
  console.log('x is a positive number!');
}

if (x !== 5) {
  console.log('x is not 5');
} else {
  console.log('x is 5');
}

// const isRaining = false;
// if (isRaining) {
//   console.log('umbrella');
// } else {
//   console.log('it is not raining');
// }

// if (!isRaining) {
//   console.log('sunshine! yay!');
// } else {
//   console.log('it is raining :-(');
// }

if (x <= 5) {
  console.log('x is less than or equal to 5');
} else {
  console.log('x greater than 5');
}

const age = 20;
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You have no voice in government!');
}

const mimeType = 'image/jpg';
let filename = '';
if (mimeType === 'image/png') {
  filename = 'photo.png';
} else {
  filename = 'photo.jpg';
}
console.log(filename);

const filename2 = mimeType === 'image/png' ? 'photo.png' : 'photo.jpg';
console.log(filename2);

// const something = condition ? answerIfTrue : answerIfFalse;

const isRaining = true;
const isSnowing = true;

if (isRaining && isSnowing) {
  console.log('The weather is really awful.');
}

if (isRaining || isSnowing) {
  console.log('The weather isn\'t great');
}

// const y = 3;
// if (x > 5 && y === 3) {
  
// }

// const userIsRegistered = true;
// if (age > 13 && userIsRegistered) {
//   // loadWebsite();
// } else {
//   // load
// }

let username;
// blah blah more code here
// username = 'Nicole';
if (username) {
  console.log('Hi ' + username);
}

let aboutMe;
// = {
//   name: 'Nicole'
// };

if (aboutMe && aboutMe.name) {
  console.log(aboutMe.name);
}


if (isRaining || isSnowing) {
  
}