var recipe = {
	title: 'Mole',
	servings: 2,
	ingredients: ['cinnamon', 'cumin', 'cocoa'],	
};

console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
console.log('Ingredients:');

for (var i = 0; i < recipe.ingredients.length; i++) {
	console.log(recipe.ingredients[i]);
}

var books = [
	{
		title: 'The Hobbit',
		author: 'JRR Tolkien',
		alreadyRead: true,
	},
	{
		title: 'Lord of the Rings',
		author: 'JRR Tolkien',
		alreadyRead: false,
	},
	{
		title: 'Harry Potter',
		author: 'JK Rowling',
		alreadyRead: true,
	},
];

for (var i = 0; i < books.length; i++) {
	var currentBook = books[i];
	if (currentBook.alreadyRead) {
		console.log('You have read ' + currentBook.title + ' by ' + currentBook.author);
	} else {
		console.log('You have not read ' + currentBook.title + ' by ' + currentBook.author);
	}
}