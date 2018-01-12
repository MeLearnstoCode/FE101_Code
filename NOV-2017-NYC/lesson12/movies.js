const harryPotter = {
  title: 'Harry Potter',
  duration: 180,
  stars: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'],
};

for (let key in harryPotter) {
  console.log(key + ': ' + harryPotter[key]);
}

// function describeMovie(movie) {
//   console.log(movie.title + ' lasts for ' + movie.duration + ' minutes and stars ' + movie.stars.join(', ') + '.');
// }

// function describeMovie(movie) {
//   let starsString = '';
//   // for (let i = 0; i < movie.stars.length; i++) {
//   //   if (i === movie.stars.length - 1) {
//   //     starsString = starsString + movie.stars[i];
//   //   } else {
//   //     starsString = starsString + movie.stars[i] + ', ';
//   //   }
//   // }
  
//   for (let i = 0; i < movie.stars.length - 1; i++) {
//     starsString = starsString + movie.stars[i] + ', ';
//   }
//   starsString = starsString + movie.stars[movie.stars.length - 1];
  
//   console.log(movie.title + ' lasts for ' + movie.duration + ' minutes and stars ' + starsString + '.');
// }

// describeMovie(harryPotter);


// const lizzieTheCat = {
//   age: 18,
//   furColor: 'grey',
//   meow: function() {
//     console.log('meowww');
//   },
//   eat: function(food) {
//     console.log('Yum, I love ' + food);
//   },
//   sleep: function(numMinutes) {
//     for (var i = 0; i < numMinutes; i++) {
//       console.log('z');
//     }
//   }
// };


// const gradingModule = {
//   gradingCutoffs: {
//     A: 90,
//     B: 80,
//   },
//   assignGrade: function(score) {
//     if (score > this.gradingCutoffs.A) {
//       return 'A';
//     } else if (score > this.gradingCutoffs.B) {
//       return 'B';
//     }
//   },
// };

// gradingModule.assignGrade(87);