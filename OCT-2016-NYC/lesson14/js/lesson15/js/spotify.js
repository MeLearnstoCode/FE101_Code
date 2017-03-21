$.getJSON("https://api.spotify.com/v1/search",
	{
		q: "Beyonce",
		type: "artist"
	}, // The parameters we send to Spotify
	function(data) {
		// What we do with the data once we get it back.
		console.log(data);
	});