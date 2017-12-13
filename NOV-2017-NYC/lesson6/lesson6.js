// Prints hello world.
// console.log('Hello world');

/*
this
is
all a comment
*/

/**
 *  Prints hi to the console.
 *  @param {string} name The user's name.
 */
function sayHi(name) {
  console.log('Hi ' + name);
}
sayHi('Nicole');
sayHi('Patrice');
sayHi('Brian');

/**
 * Adds two numbers together.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 */
function addNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}

const biggerSum = addNumbers(2, 5) + addNumbers(3, 2);


addNumbers(2, 4);
addNumbers(8, 1);

const currentYear = 2017;
const nextYear = addNumbers(currentYear, 1);




console.log(currentYear);

// console.log(result);

console.log('Hello');


/**
 * Subtracts two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 */
function subtractNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}

subtractNumbers(10, 5);

const hugeSum = addNumbers(addNumbers(5, 2), addNumbers(3, 7));


function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
  return `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numChildren} kids.`;
}
console.log(tellFortune(6, 'Joel', 'Fiji', 'astronaut'));
console.log('Test');



// const x = parseInt(prompt('Pick a number.'));

// if (x > 0) {
//   console.log('x is a positive number!');
// }

// const isRaining = false;
// if (isRaining) {
//   console.log('Bring an umbrella');
// }

const chanceOfRain = 100;
// let isRaining;
// if (chanceOfRain === 100) {
//   isRaining = true;
// } else {
//   isRaining = false;
// }

const isNotRaining = chanceOfRain !== 100;

const x = 9;
if (x !== 5) {
  console.log('x is not 5');
}

if (x >= 10) {
  console.log('x is greater than or equal to 10');
} else {
  console.log('x is less than 10');
}

const age = 28;
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You have no voice in government!');
}

const isRaining = false;
const isSnowing = false;

if (isRaining || isSnowing) {
  console.log('Stay inside');
}

if (!isSnowing) {
  console.log('it is not snowing');
}



// (false && whatever) === false

// (true || whatever) === true







