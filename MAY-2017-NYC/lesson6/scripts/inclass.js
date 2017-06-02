

////

function timesThree(num) {
  const result = num * 3;
  console.log(result);
  return result;
}

timesThree(5);
timesThree(1);
timesThree(3);

// const sum = timesThree(5) + timesThree(1);
// console.log(sum);

// function addNumbers(num1, num2) {
//   const result = num1 + num2;
//   return result; // Anything after this line won't be executed
// }

const hugeSum = addNumbers(addNumbers(5, 2), addNumbers(3, 7));

function biggerSum(num1, num2, num3, num4) {
  const result = addNumbers(addNumbers(num1, num2),  addNumbers(num3, num4));
  return result;
}


console.log(biggerSum(1, 2, 3, 4));

let total = 0;
function buttonPressed() {
  total = total + 1;
}

/////

function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
  const result = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partnerName + ' with ' + numChildren + ' kids.';
  console.log(result);
  return result;
}

const fortune1 = tellFortune(4, 'Joel', 'Florida', 'astronaut');
const fortune2 = tellFortune(9, 'David Tennant', 'Spain', 'dancer');
const fortune3 = tellFortune(20, 'Justin Timberlake', 'Nevada', 'opera singer');

// document.write(fortune1);

function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
  return 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partnerName + ' with ' + numChildren + ' kids.';
}

function timesThree(num) {
  return num * 3;
}

const answer = timesThree(8);
// $('#answer').html(answer);
console.log(answer);

/**
 * Given a dog's age in human years, returns its age in dog years.
 * @param {number} age The age in human years.
 * @return {number} The age in dog years.
 */
function calculateDogAge(age) {
  const dogYears = age * 7;
  console.log('Your doggy is ' + dogYears + ' years old in dog years.');
  return dogYears;
}

calculateDogAge(5);

/**
 * Calculates a lifetime supply of your favorite snack.
 * @param {number} age An age in years.
 * @param {number} amtPerDay The number of snacks consumed each day.
 * @return {number} The total number of snacks consumed before age 100.
 */
function calculateSupply(age, amtPerDay) {
  const maxAge = 100;
  const totalNeeded = amtPerDay * 365 * (maxAge - age);
  console.log('You will need ' + totalNeeded + ' snacks to last you to the ripe old age of ' + maxAge + '.');
  return totalNeeded;
}

calculateSupply(5, 11);


