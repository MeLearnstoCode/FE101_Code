// for (let current = 100; current < 200; current++) {
//   console.log('Testing ' + current);
//   if (current % 7 === 0) {
//     console.log('Found it! ' + current);
//     break;
//   }
// }

// let current = 100;
// while (current < 200) {
//   console.log('Testing ' + current);
//   if (current % 7 === 0) {
//     console.log('Found it! ' + current);
//     break;
//   }
//   current++; // update the counter variable
// }

// do {
    
// } while ();

// const colors = ['red', 'yellow', 'green'];
// for (let i in colors) {
//   console.log(colors[i]);
// }

// const aboutMe = {
//   firstName: 'Nicole',
//   lastName: 'Stein',
//   age: 0,
//   favoriteColors: ['pink', 'purple', 'green']
// };

// const meArray = ['Nicole', 'Stein', 0];
    
// for (const prop in aboutMe) {
//   console.log(prop);
//   // console.log(`aboutMe.${prop} = ${aboutMe[prop]}`);
// }

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even.');
  } else {
    console.log(i + ' is odd.');
  }
}

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    console.log(`${j} * ${i} = ${j * i}`);
  }
}

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (let i = 60; i <= 100; i++) {
  console.log(`For a score of ${i}, you got ${assignGrade(i)}`);
}

