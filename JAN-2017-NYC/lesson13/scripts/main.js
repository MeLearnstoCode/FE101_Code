// When the user clicks the button
$('.weather-button').click(function() {
	// Get the city from the textbox
	var city = $('.city-in').val();

	// Get the data for that city
	getWeatherData(city);
});


function getWeatherData(cityName) {
	$.getJSON('http://api.openweathermap.org/data/2.5/weather', {
		units: "imperial",
		appid: "84bee75ccc48d73cd18de3a8c2d85c8e",
		q: cityName,
	}, function (data) {
		// Stuff to do with the data you receive
		console.log(data);

		// Print out the temperature
		console.log(data.main.temp);
		$('.temp').html(data.main.temp);

		// Print the name of the city
		console.log(data.name);
		$('.city').html(data.name);

		// Print the humidity
		console.log(data.main.humidity);
		$('.humidity').html(data.main.humidity);

		// Print the weather (either the "main" or "description")
		console.log(data.weather[0].main);
		$('.weather').html(data.weather[0].main);

		$('.icon').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
	});
}

