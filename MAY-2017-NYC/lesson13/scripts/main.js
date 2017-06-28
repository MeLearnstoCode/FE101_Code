// When I click the weather button
$('#weather-btn').click(function() {
	// Get the city from the text box
	const cityName = $('#city-in').val();

	// Fetch the weather data
	fetchWeatherData(cityName);
});


function fetchWeatherData(city) {
	$.getJSON('http://api.openweathermap.org/data/2.5/weather', {
			appid: '84bee75ccc48d73cd18de3a8c2d85c8e',
			q: city,
			units: 'imperial',
		}, 
		function(data) {
			// console.log(data);

			// City name
			console.log(data.name);
			$('#city').text(data.name);

			// Temperature
			console.log(data.main.temp);
			$('#temp').text(data.main.temp)

			// Humidity
			console.log(data.main.humidity);
			$('#humidity').text(data.main.humidity);

			// Weather "main" (ie. 'Drizzle')
			console.log(data.weather[0].main);
			$('#weather').text(data.weather[0].main);

			// Wind speed
			console.log(data.wind.speed);
			$('#windspeed').text(data.wind.speed);

			// Icon
			const icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon  + '.png';
			$('#icon').attr('src', icon);
	});
}





// $('button').click(function() {

// });

// $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=84bee75ccc48d73cd18de3a8c2d85c8e', {}, displayData);

// function displayData() {

// }