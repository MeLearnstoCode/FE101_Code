

const radius = 5;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius * radius;
// const area = Math.PI * Math.pow(radius, 2);
// console.log('The circumference is ' + circumference.toFixed(2) + '.');
// console.log('The area is ' + area.toFixed(2) + '.');


// console.log(`The circumference is ${circumference.toFixed(2)}.`);


const numChildren = 7;
const partnerName = 'Joel';
const geoLocation = 'Fiji';
const jobTitle = 'astronaut';

console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partnerName + ' with ' + numChildren + ' kids.');

console.log(`You will be ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numChildren} kids.`);




const tempF = 72;
const tempC = (tempF - 32) * 5 / 9;
console.log(`${tempF}°F is equal to ${tempC.toFixed(2)}°C.`);

const tempC2 = 30;
const tempF2 = tempC2 * 9 / 5 + 32;

console.log(`${tempC2}°C is equal to ${tempF2.toFixed(2)}°F.`);

/**
 * This function does stuff.
 */
function sayMyName(myName) {
  console.log(`Hi ${myName}`);
}
 
// sayMyName('Nicole');
// sayMyName('Mark');
// sayMyName('Fabio');
// sayMyName('Justine');
// sayMyName('Marcela');
// sayMyName('Danielle');

// myName doesn't exist! ReferenceError!
// console.log(myName);

function addNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addNumbers(3, 3);

addNumbers(5, 7);
addNumbers(-15, 7);
addNumbers(3.4342, 0);

addNumbers(5, circumference);
addNumbers(3, 2 * 2);
addNumbers(1, addNumbers(5, 7));

const biggerSum = addNumbers(2, 5) + addNumbers(3, 2);
const hugeSum = addNumbers(addNumbers(5, 2), addNumbers(3, 7));


function addNumbers(num1, num2) {
  return num1 + num2;
}

const hugeSum = addNumbers(addNumbers(5, 2), addNumbers(3, 7));

function multiplyBySecretNumber(num) {
  const secretNumber = 10;
  return num * secretNumber;
}

console.log(multiplyBySecretNumber(3));
console.log('hi');

function tellFortune(jobTitle, geoLocation, partnerName, numChildren) {
  console.log(`You will be ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numChildren} kids.`);
}

tellFortune('astronaut', 'Fiji', 'Joel', 7);

///

function calculateDogAge(age) {
  const dogYears = age * 7;
  console.log(`Your doggie is ${dogYears} years old in dog years.`);
  return dogYears;
}

const dogAge = prompt('How old is your dog?');
alert(calculateDogAge(dogAge));

const myDogsTotalAges = calculateDogAge(5) + calculateDogAge(6);
console.log(myDogsTotalAges);

function calculateSupply(age, amtPerDay) {
  const maxAge = 100;
  // const yearsLeft = maxAge - age;
  // const daysLeft = yearsLeft * 365;
  // const totalSnacks = daysLeft * amtPerDay;
  const totalSnacks = (maxAge - age) * 365 * amtPerDay;
  
  console.log(`You will need ${totalSnacks} snacks to last you until the ripe old age of ${maxAge}.`);
  
  return totalSnacks;
}

const snacks = calculateSupply(20, 4) + calculateSupply(25, 2) + calculateSupply(30, 1);
console.log(snacks);

// function calcCircumference(radius) {
//   return 2 * Math.PI * radius;
// }

function calcCircumference(radius) {
  const circ = 2 * Math.PI * radius;
  console.log(`The circumference of a circle with radius ${radius} is ${circ}.`);
  return circ;
}
calcCircumference(5);

function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}.`);
  return area;
}
calcArea(5);

// alert('Hi!');
// const userName = prompt('What is your name?');

////

// Optional Parameters
function sayMyName(opt_name) {
	opt_name = opt_name || 'Nicole';
	console.log(opt_name);
}

sayMyName();
sayMyName('Danielle');

