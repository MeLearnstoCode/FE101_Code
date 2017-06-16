// Pseudocode!!

// for i from 1 to 100:
//   if i is divisible by 3 and 5
//     console log "fizzbuzz"
//   else if i is divisible by 3
//     console log "fizz"
//   else if i is divisible by 5
//     console log "buzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Today's code: https://codepen.io/nicolethenerd/pen/RgoxBr