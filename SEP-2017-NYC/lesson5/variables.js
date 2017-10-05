console.log('Hello world!');

const a = 5;

let b = 4;
b = 3;

const isRaining = true;
let response = '';
if (isRaining) {
  response = 'Bring an umbrella';
  // var answer = 'Bring an umbrella';
}
console.log(response);
// console.log(answer);

function test() {
  var x = 5;
}
// console.log(x);

function yearsInTheFuture(numYears) {
  const currentYear = 2017;
  return currentYear + numYears;
}

// console.log(currentYear);

const foo = 4;

let numStudents;
console.log(numStudents);
numStudents = 6;
console.log(numStudents);
numStudents = 10;
console.log(numStudents);
numStudents = 12;

const sum = 2 + 2;
// const newNumStudents = numStudents + 2;
numStudents = numStudents + 4;

const myName = 'Nicole';
const greeting = 'Hello ' + myName;
console.log(greeting);

// Exercises

const numChildren = 7;
const partnerName = 'Joel';
const geoLocation = 'Fiji';
const jobTitle = 'astronaut';

console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partnerName + ' with ' + numChildren + ' kids.');

const birthYear = 2000;
const futureYear = 2050;
const age = futureYear - birthYear;
const otherAge = age - 1;
console.log('You will be either ' + otherAge + ' or ' + age + ' in the year ' + futureYear + '.');

const currentAge = 50;
const maxAge = 100;
const amtPerDay = 3;
const yearsLeft = maxAge - currentAge;
const daysLeft = yearsLeft * 365;
const totalSnacks = daysLeft * amtPerDay;
console.log('You will need ' + totalSnacks + ' snacks to last you to the ripe old age of ' + maxAge + '.');
