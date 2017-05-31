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
