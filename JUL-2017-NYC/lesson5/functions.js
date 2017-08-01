function sayMyName(name) {
  console.log('Hi ' + name);  
}

sayMyName('Evan');
sayMyName('Chris');
sayMyName('Victoria');
sayMyName('Eleanor');

// function test() {
//   if (true) {
//     const a = 'foo';
//   }
//   console.log(a);
// }
// test();

// function addNumbers(num1, num2) {
//   const total = num1 + num2;
//   // Console logging - optional, just for debugging
//   // console.log(total);
//   return total;
// }

// Return indicates the "output" of your function
// so you can reuse it outside
function addNumbers(num1, num2) {
  return num1 + num2;
}

// addNumbers(6, 8);
// addNumbers(2, 10);
// addNumbers(-36, 8342098);
// addNumbers(0, 8.324);

const futureYear = addNumbers(2017, 5);

const biggerSum = addNumbers(2, 5) + addNumbers(3, 2);











