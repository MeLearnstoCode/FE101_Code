var aboutMe = {
  name: "Nicole",
  age: 100,
  isAwesome: true,
  likesCats: false,
  job: {
    title: "programmer",
    employer: "Google",
  },
  favoriteColors: ["red", "green", "blue"],
};

var myCss = {
  "background-color": "red",
  "color": "blue",
};
console.log(myCss['background-color']);

console.log(aboutMe);

var nouns = {
  "goose": "geese",
  "sheep": "sheep",
  "octopus": "octopi",
};

// var singularNoun = prompt('Pick a noun');
// console.log(nouns[singularNoun]);

//////////

var colors = ["red", "yellow", "green"];

var favorites = ["pink", 42, true, {
  name: "Nicole",
  job: "programmer",
}];

var students = [
  {
    "firstName": "Rachel",
    "lastName": "Y",
    "grades": ["A", "A", "A"],
  },
  {
    "firstName": "Diane",
    "lastName": "D",
    "grades": ["A", "A", "A"],
  }
];

var myCats = [
  {
    name: "Lizzie", 
    age: 18
  },
  {
    name: "Daemon",
    age: 1
  },
  {
    name: "Fluffy",
    age: 3
  },
];

for (var i = 0; i < myCats.length; i++) {
  console.log("My cat " + myCats[i].name + " is " + myCats[i].age + " years old.");
}


