var birthYear = 2000;
var futureYear = 2050;

var age1 = futureYear - birthYear;
var age2 = age1 - 1;

console.log('I will be either ' + age1 + ' or ' + age2 + ' in ' + futureYear + '.');

var currentAge = 17;
var maxAge = 120;
var amtPerDay = 3;

var years = maxAge - currentAge;
var total = amtPerDay * 365 * years;

console.log('You will need ' + total + ' to last you until the ripe old age of ' + maxAge);

var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

console.log('The circumference is ' + circumference);
console.log('The area is ' + area);

var celsius = 23;
var fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);

var fahrenheit2 = 74;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
console.log(celsius2);