// When form is submitted
$('#weather-form').submit(function(event) {
	// Don't refresh the page
	event.preventDefault();

	// Get city from text box
	const city = $('#city-in').val();

	$.getJSON('http://api.openweathermap.org/data/2.5/weather',
	 {
	 	appid: '84bee75ccc48d73cd18de3a8c2d85c8e',
	 	q: city,
	 	units: 'imperial',
	 }, 
	 function(data) {
	 	console.log(data);

	 	// City name
	 	console.log('City name: ' + data.name);
	 	$('#city-name').text(data.name);

	 	// Temperature
	 	console.log('Temperature: ' + data.main.temp);
	 	$('#temp').text(data.main.temp);

	 	// Humidity
	 	console.log('Humidity: ' + data.main.humidity);
	 	$('#humidity').text(data.main.humidity);

	 	// Weather name
	 	console.log('Weather: ' + data.weather[0].main);
	 	$('#weather-name').text(data.weather[0].main);
	 	// console.log(data.weather[0].id);
		// console.log(data.weather[0].main);
		// console.log(data.weather[0].description);
		// console.log(data.weather[0].icon);

		// Icon
		const iconUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

		console.log('Icon: ' + iconUrl);
		$('#icon').attr('src', iconUrl);

	});

});