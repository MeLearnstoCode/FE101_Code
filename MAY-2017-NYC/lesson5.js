function sayMyName(name) {
  console.log('Hi ' + name);
}

sayMyName('Nicole');
sayMyName('Ed');
sayMyName('Karee');
sayMyName('John');
sayMyName('Noma');

function subtractNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}

const answer = subtractNumbers(20, 10);

console.log(answer);

let total = 0;
function buttonPressed() {
  total = total + 1;
}
buttonPressed();
buttonPressed();
buttonPressed();
console.log(total);

function addNumbers(num1, num2) {
    const result = num1 + num2;
    console.log(result);
}


const number = 10;
addNumbers(number, 2);


const userName = prompt('What is your name?');
sayMyName(userName);

////

console.log('Hello world');

const x = 5;

let numStudents = 7;
console.log(numStudents);

numStudents = 4;
console.log(numStudents);

const isTuesday = true;
if (isTuesday) {
  const classIsInSession = true;
}

const greeting = 'Hello Kitty';
const restaurant = 'Pamela\'s Place';
const myAge = 28;
const pi = 3.14;
console.log(pi);

const greeting2 = 'Hi';
const myName = 'Nicole';

let notDefinedYet;

const thing = 'foo';
console.log(thing);

function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello('Nicole');

const a = 2 + 2;
const y = a * 3;

let b;
b = '2';

const z = 2 + ' cats';


const numChildren = 3;
const partnerName = 'Joel';
const geoLocation = 'Spain';
const jobTitle = 'farmer';

console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partnerName + ' with ' + numChildren + ' kids.');


console.log('Test ' + numChildren * numChildren);

const birthYear = 2000;
const futureYear = 2050;

console.log('You are either ' + (futureYear - birthYear) + ' or ' + (futureYear - birthYear - 1));

const age = futureYear - birthYear;
const age2 = age - 1;
console.log('You are either ' + age2 + ' or ' + age + '.');

const currentAge = 50;
const maxAge = 100;
const snacksPerDay = 3;
console.log('You will need ' + ((maxAge - currentAge) * 365 * snacksPerDay) + ' snacks.');

const yearsLeft = maxAge - currentAge;
const snacksPerYear = snacksPerDay * 365;
const totalSnacks = yearsLeft * snacksPerYear;


// const totalSnacks = (maxAge - currentAge) * yearsLeft * snacksPerYear;

const radius = 5;
const circumference = Math.PI * 2 * radius;
const area = Math.PI * radius * radius;

console.log('The circumference is ' + circumference.toFixed(2) + '.');
console.log('The area is ' + area.toFixed(2) + '.');

const cTemp = 35;
const fTemp = cTemp * 9 / 5 + 32;
console.log(cTemp + '°C is ' + fTemp + '°F.');

const fTemp2 = 100;
const cTemp2 = (fTemp2 - 32) * 5 / 9;
console.log(fTemp2 + '°F is ' + cTemp2 + '°C.');

console.log('The sum of the numbers is ' + (5 - 3));

// This is a comment

/*
This
is
a comment
on multiple
lines
*/

/*
 * This is also
 * a multi line comment
 */
 
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const letters = ['a', 'b', 'c'];

function sayMyName() {
  console.log('Hi Claire!');
}