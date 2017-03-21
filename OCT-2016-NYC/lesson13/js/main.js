$("#weather-btn").click(function() {
	// Get the value from the #city textbox.
	var city = $("#city").val();
	getWeather(city);

});

function getWeather(city) {

	$.getJSON("http://api.openweathermap.org/data/2.5/weather",
		{
			q: city,
			appid: "84bee75ccc48d73cd18de3a8c2d85c8e",
			units: "imperial",
		},
		function (data) {
			// Do this stuff once we have data
			console.log(data);

			// City Name
			// $("#cityName").html(data.name);

			// Temperature
			console.log(data.main.temp);
			$("#temp").html(data.main.temp);

			// Humidity
			console.log(data.main.humidity + "%");
			$("#humidity").html(data.main.humidity);

			// Weather "main"
			console.log(data.weather[0].main);
			$("#weatherMain").html(data.weather[0].main);

			// Weather description
			console.log(data.weather[0].description);

			// Weather icon
			console.log("http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");			

			$("#icon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

			$("#weather").show();
		});

}

///////

// function weatherCallback(data) {
// 	// Do this stuff once we have data
// 	console.log(data);
// }

// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=84bee75ccc48d73cd18de3a8c2d85c8e",
// 	{},
// 	weatherCallback);