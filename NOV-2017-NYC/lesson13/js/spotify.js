const accessToken = new URL(location.href).searchParams.get('access_token');

$.ajax('https://api.spotify.com/v1/search', {
	data: {
		q: 'Rick Astley',
		type: 'artist',
	},
	headers: {
		'Authorization': 'Bearer ' + accessToken,
	},
	complete: function(data) {
		console.log(data);
	}
});