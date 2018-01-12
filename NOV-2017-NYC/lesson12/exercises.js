const mole = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
};

function describeRecipe(recipe) {
  console.log(recipe.title);
  console.log('Serves: ' + recipe.servings);
  console.log('Ingredients:');
  
  for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
  }
}

const macAndCheese = {
  title: 'Macaroni and Cheese',
  servings: 4,
  ingredients: ['pasta', 'cheese'],
};

// describeRecipe(mole);
// describeRecipe(macAndCheese);

const books = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: true,
  }, 
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    alreadyRead: false,
  }, 
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: true,
  },
  {
    title: 'The Thief',
    author: 'J.R. Ward',
    alreadyRead: false,
  }
];

for (let i = 0; i < books.length; i++) {
  // const currentBook = books[i];
  
  if (books[i].alreadyRead) {
    console.log('I have read ' + books[i].title + ' by ' + books[i].author);
  } else {
    console.log('I still need to read ' + books[i].title + ' by ' + books[i].author);
  }
}
















