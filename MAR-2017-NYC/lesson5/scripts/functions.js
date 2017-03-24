function sayMyName(firstName, lastName) {
    console.log('Hi ' + firstName + ' ' + lastName);
}

sayMyName('Nicole', 'Stein');

// sayMyName('Kathleen');
// sayMyName('Angel');
// sayMyName('Shqiperim');

// function addNumbers(num1, num2) {
//     var answer = num1 + num2;
//     console.log(answer);
//     return answer;
// }

function addNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addNumbers(5, 2);
console.log(sum);

addNumbers(3, 5);
addNumbers(9, 10);

var numStudents = 3;
var numTeachers = 1;

addNumbers(numStudents, numTeachers);
