// // When the user clicks the button
// $('.weather-button').click(function() {
// 	// Get the city from the textbox
// 	var city = $('.city-in').val();

// 	// Get the data for that city
// 	getWeatherData(city);
// });

// $.ajax({
// 	type: 'GET',
// 	dataType: 'json'
// })

// $.get()

// $.post()

// https://api.unsplash.com/search/photos?client_id=e10954aa1b7dafdcebe917ca0f745e9947665c106c7b6c3068863bc0322799ac&query=forest

function getUnsplashData() {
	$.getJSON('https://api.unsplash.com/search/photos', {
		client_id: 'e10954aa1b7dafdcebe917ca0f745e9947665c106c7b6c3068863bc0322799ac',
		query: 'forest',
	}, function (data) {
		// Stuff to do with the data you receive
		console.log(data);
	});
}

getUnsplashData();