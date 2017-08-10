// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log('Blast off!');

const x = 6;
if (x % 3 === 0) {
  console.log(x + ' is a multiple of ' + 3);
}

// function isMultipleOf3(num) {
//   if (num % 3 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isMultipleOf3(num) {
  return num % 3 === 0;
}

console.log(isMultipleOf3(5)); // false
console.log(isMultipleOf3(6)); // true
console.log(isMultipleOf3(0)); // true
console.log(isMultipleOf3(900)); // true