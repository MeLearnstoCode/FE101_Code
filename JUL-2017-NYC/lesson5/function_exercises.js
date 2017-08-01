// Fortune Teller

const numChildren = 3;
const partnerName = 'Joel';
const geoLocation = 'Fiji';
const jobTitle = 'astronaut';

const fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numChildren + ' kids.';
console.log(fortune);

const currentAge = 28;
const maxAge = 100;
const amtPerDay = 3;
const totalSnacks = (maxAge - currentAge) * 365 * amtPerDay;
console.log('You will need ' + totalSnacks.toLocaleString() + ' to last you until the ripe old age of ' + maxAge + '.');
const totalCoffee = 32098;

const radius = 5;
const circ = 2 * Math.PI * radius;
// const area = Math.PI * radius * radius;
const area = Math.PI * Math.pow(radius, 2);



function addNumbers(num1, num2) {
  return num1 + num2;
}

const total = addNumbers(totalSnacks, totalCoffee);

const superTotal = addNumbers(addNumbers(3, 4), 5);





/** 
 * this
 * is a 
 * multi
 * line comment
 */