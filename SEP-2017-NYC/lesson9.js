// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// function calculateTaxes(income) {
//   if (income <= 10000) {
//     return 0.05 * income;
//   } else if (income <= 20000) {
//     return 0.1 * income;
//   } else {
//     return 0.15 * income;
//   }
// }

function drawTree(numRows) {
  for (let i = 0; i < numRows; i++) {
    const numStars = i * 2 + 1;
    const numSpaces = numRows - i - 1;
    console.log(' '.repeat(numSpaces) + '*'.repeat(numStars));
  }
}

// function drawTree(numRows) {
//   for (let i = 0; i < numRows; i++) {
//     const numStars = i * 2 + 1;
    
//     let stars = '';
//     for (let j = 0; j < numStars; j++) {
//       stars += '*';
//     }
    
//     console.log(stars);
//   }
// }

drawTree(10);

/////

https://codepen.io/nicolethenerd/pen/vebKjR

https://codepen.io/nicolethenerd/pen/aLXmEG?editors=1010