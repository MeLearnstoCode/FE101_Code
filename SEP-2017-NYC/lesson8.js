const randomNum = Math.ceil(Math.random() * 100);
let numTurns = 0;
console.log(randomNum);

function guessRandomNum() {
  numTurns++;
  const userNum = parseInt(prompt('Guess a number 1-100'));
  if (!userNum) {
    return;
  }
  
  if (userNum === randomNum) {
    alert('You win! You guessed in ' + numTurns + ' turns.');
  } else if (userNum > randomNum) {
    alert('Too high, try again!');
    guessRandomNum();
  } else {
    alert('Too low, try again!');
    guessRandomNum();
  }
}

guessRandomNum();


////

let x = 0; // initialize/setup
while (x < 5) {
  console.log(x);
  x++; // x = x + 1;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 5
// 4
// 3
// 2
// 1
// Blast off!

for (let i = 5; i > 0; i--) {
	console.log(i);
}
console.log('Blast off!');

/////

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even.');
  } else {
    console.log(i + ' is odd.');
  }
}

for (let i = 0; i <= 10; i++) {
  const result = i * 9;
  console.log(`${i} * 9 = ${result}`);
  // console.log(i + ' * 9 = ' + result);
}

for (let leftNum = 0; leftNum <= 10; leftNum++) {
  for (let rightNum = 0; rightNum <= 10; rightNum++) {
    const result = leftNum * rightNum;
    console.log(`${leftNum} * ${rightNum} = ${result}`);
  }
}

