alert("Hi!!!");

// prompt();

////////


function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
	return "You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnerName + " with " + numChildren + " kids.";
}

var fortune = tellFortune(5, "Joel", "space", "programmer");
alert(fortune);

function calculateAge(birthYear, futureYear) {
	var age = futureYear - birthYear;
	var age2 = age - 1;

	alert("You will be either " + age2 + " or " + age + " in the year " + futureYear + ".");
}

calculateAge(2000, 2050);

function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var totalSnacks = (maxAge - age) * 365 * amountPerDay;
  
  alert("You will have " + totalSnacks + " snacks by the time you turn " + maxAge + ".");
}

calculateSupply(10, 3);

function calcCircumference(radius) {
  var circ = 2 * Math.PI * radius;
  console.log("The circumference of a circle with radius " + radius + " is " + circ);
  return circ;
}

function calcCircumference(radius) {
  return 2 * Math.PI * radius;
}

// calcCircumference(5);

var fenceLength = calcCircumference(3) + calcCircumference(5);
console.log("The length of the fence is " + fenceLength);

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area is " + area);
  return area;
}

var yardArea = calcArea(3) + calcArea(5);
console.log("The area of my yard is " + yardArea);

function celsiusToFahrenheit(tempC) {
  var tempF = tempC * 9 / 5 + 32;
  console.log(tempC + "°C in fahrenheit is " + tempF + "°F");
  return tempF;
}

celsiusToFahrenheit(0);
celsiusToFahrenheit(40);