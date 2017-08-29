const recipe = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cumin', 'cinnamon', 'cocoa'],
};

console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
console.log('Ingredients: ');
// for (let i = 0; i < recipe.ingredients.length; i++) {
//   console.log(recipe.ingredients[i]);
// }
console.log(recipe.ingredients.join('\n'));
// console.log(recipe.ingredients.join(', '));

const books = [
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    read: false,
  }, 
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    read: true,
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    read: true,
  },
];

for (let i = 0; i < books.length; i++) {
  const currentBook = books[i];
  const bookInfo = currentBook.title + ' by ' + currentBook.author;
  if (currentBook.read) {
    console.log('You have read ' + bookInfo);
  } else {
    console.log('You still need to read ' + bookInfo);
  }
}

// Less readable?
// for (let i = 0; i < books.length; i++) {
//   const currentBook = books[i];
//   let sentenceStart = '';
//   const bookInfo = currentBook.title + ' by ' + currentBook.author;
//   if (currentBook.read) {
//     sentenceStart = 'You have read ';
//   } else {
//     sentenceStart = 'You still need to read ';
//   }
//   console.log(sentenceStart + bookInfo);
// }

//////////

// Objects

const aboutMe = {
  name: 'Nicole',
  age: 28,
  isAwesome: true,
  job: {
    title: 'Instructor',
    employer: 'NYCDA',
  },
  favoriteColors: ['pink', 'blue', 'green'],
  sayHi: function() {
    console.log('Hi! My name is Nicole!');
  },
};


const myCats = [
  {
    name: "Fluffy",
    age: 18,
    furColor: 'white',
    eyeColor: 'green',
  },
  {
    name: "Snowball",
    age: 1,
    furColor: 'white',
    eyeColor: 'green',
  }
];

// for (let i = 0; i < myCats.length; i++) {
//   const currentCat = myCats[i];
//   console.log('My cat ' + currentCat.name + ' is ' + currentCat.age + ' years old.');
// }

const lizzie = {
    name: 'Lizzie',
    age: 18,
    furColor: 'orange',
    eyeColor: 'yellow',
};

/**
 * Prints out a description of a cat
 * @param {Object} cat A cat object that contains name, age, furColor, eyeColor.
 */
// function describeCat(cat) {
//   console.log('My cat ' + cat.name + ' is ' + cat.age + ' years old and has ' + cat.furColor + ' fur and ' + cat.eyeColor + ' eyes.');
// }

describeCat(lizzie);
describeCat({
    name: 'Damon',
    age: 1,
    furColor: 'white',
    eyeColor: 'green',
});
describeCat(myCats[0]);
describeCat(myCats[1]);



/**
 * Prints out a description of a cat
 * @param {Object} cat A cat object that contains name, age, furColor, eyeColor.
 */
function describeCat(cat) {
  const name = cat.name || 'Missing Name';
  const age = cat.age || 0;
  const furColor = cat.furColor || 'missing fur color';
  const eyeColor = cat.eyeColor || 'missing eye color';
  
  console.log('My cat ' + name + ' is ' + age + ' years old and has ' + furColor + ' fur and ' + eyeColor + ' eyes.');
}

describeCat({});

// Module Pattern
//////
// File 1

const APP = APP || {};

APP.addressBook = {
  
};

////
// File 2

const APP = APP || {};

APP.navBar = {
  
};