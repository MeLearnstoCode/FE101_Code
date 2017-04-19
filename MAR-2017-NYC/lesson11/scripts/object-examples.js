var aboutMe = {
  name: 'Nicole',
  age: 27,
  gender: 'female',
  isAwesome: true,
  job: {
    title: 'programmer',
    company: 'Google',
  },
  favoriteColors: ['pink', 'blue', 'green'],
};

var myCssProperties = {
  'background-color': 'blue',
};

var myCats = [
  {
    name: "Lizzie",
    age: 18,
  },
  {
    name: "Daemon",
    age: 1,
  },
  {
    name: "Fluffy",
    age: 3,
  },
];

for (var i = 0; i < myCats.length; i++) {
  var currentCat = myCats[i];
  console.log('My cat ' + currentCat.name + ' is ' + currentCat.age + ' years old.');
}

var students = [
  {
    name: 'Kayleigh',
    grades: [981, 123, 45, 1000],
  },
  {
    name: 'Kathleen',
    grades: [123, 983, 172, 22],
  },
];

// var students = {
//   kayleigh: [981, 123, 45, 1000],
//   kathleen: [123, 983, 172, 22],
// }

