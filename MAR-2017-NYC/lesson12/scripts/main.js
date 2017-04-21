// $.ajax

// $.get

function getWeather(city) {
	$.getJSON('http://api.openweathermap.org/data/2.5/weather', 
	{
		appid: '84bee75ccc48d73cd18de3a8c2d85c8e',
		q: city,
		units: 'imperial',
	}, 
	function(response) {
		console.log(response);

		// City name
		$('.city').html(response.name);

		// Temperature
		$('.temp').html(response.main.temp);

		// Humidity
		$('.humidity').html(response.main.humidity);

		// Weather Description
		$('.description').html(response.weather[0].description);

		// Bonus: Weather icon
		var iconSrc = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';

		// $('.icon').replaceWith('<img class="icon" src="' + iconSrc + '">');

		$('.icon').attr('src', iconSrc);
	});
}

// setInterval(getWeather, 300000);

$('.weather-form').submit(function(event) {
	event.preventDefault();

	var city = $('.q').val();

	getWeather(city);
});

////////////////////////////////////

// Spotify API

function getTracks(q) {
	$.getJSON('https://api.spotify.com/v1/search', 
		{
			q: q,
			type: 'track',
			limit: 50,
		}, function(response) {
			console.log(response);

			// Clear the spotify div
			$('.spotify').html('');

			for (var i = 0; i < response.tracks.items.length; i++) {
				var url = response.tracks.items[i].external_urls.spotify;
				var name = response.tracks.items[i].name;

				$('.spotify').append('<a href="' + url + '" target="blank">' + name + '</a><br>');
			}
		});
}

$('.spotify-form').submit(function(event) {
	event.preventDefault();

	var q = $('.spotify-q').val();

	getTracks(q);
});


