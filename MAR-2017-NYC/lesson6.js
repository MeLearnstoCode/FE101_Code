// Calculator Problems

function squareNumber(number) {
	var result = number * number;
	console.log(result);
	return result;
}

squareNumber(5);

function halfNumber(number) {
	var result = number / 2;
	console.log(result);
	return result;
}

halfNumber(8);

function percentOf(num1, num2) {
	var result = num1 / num2 * 100;
	console.log(num1 + ' is ' + result + '% of ' + num2 + '.');
	return result;
}

percentOf(5, 10);
percentOf(0, 10);
percentOf(80, 10);
// percentOf(-5, 10);
percentOf(33, 33);

function areaOfCircle(radius) {
	var result = Math.PI * radius * radius;
	console.log('The area of a circle with radius ' + radius + ' is ' + result);
	return result;
}

areaOfCircle(5);

//////

// function areaOfCircle(radius) {
//   return Math.PI * radius * radius;
// }

// console.log(areaOfCircle(10));

function masterFunction(num) {
  var half = halfNumber(num);
  var square = squareNumber(half);
  var area = areaOfCircle(square);
  var percent = percentOf(square, area);
  return percent;
}

masterFunction(4);


////

var isRaining = true;
var isSnowing = false;

if (isRaining) {
  	console.log('bring an umbrella');
} else {
	console.log('don\'t bring an umbrella');
}

if (isSnowing) {
	console.log('wear boots');
}

if (isRaining && isSnowing) {
	console.log('it is raining and snowing');
}

if (isRaining || isSnowing) {
	console.log('it is raining or snowing');
}

if (!isSnowing) {
	console.log('it is not snowing');
}

var myAge = 28;
if ((myAge >= 0 && myAge < 3) || myAge > 90) {
  console.log('You\'re not quite in your peak.');
}

////

var age = 40;
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You have no voice in government!');
}

function greaterNum(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}

// function greaterNum(num1, num2) {
// 	return num1 > num ? num1 : num2; 
// }

greaterNum(5, 4);
greaterNum(2, 8);
greaterNum(-1, 4);
greaterNum(4, 4);

function helloWorld(code) {
	if (code === 'es') {
		console.log('Hola Mundo');
	} else if (code === 'de') {
		console.log('Hallo Welt');
	} else {
		console.log('Hello World');
	}
}

helloWorld('es');

// Flag Example: http://codepen.io/nicolethenerd/pen/PpyQyG