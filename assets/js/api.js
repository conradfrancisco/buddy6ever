$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:gfriend&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[3].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `<section id="two" class="wrapper spotlight style1">
			<div class="inner">
						<a href="https://en.wikipedia.org/wiki/GFriend" class="image"><img src="${res.albums.items[3].images[1].url}" alt="viray fccboi" /></a>
						<div class="content">
						<h2 align="left" class="major">${res.albums.items[3].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div></section>`;
		document.querySelector('#con1').innerHTML = html;

	});
});
$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:gfriend&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[0].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `<section id="two" class="wrapper alt spotlight style2">
			<div class="inner">
						<a href="https://en.wikipedia.org/wiki/GFriend" class="image"><img src="${res.albums.items[0].images[1].url}" alt="viray fccboi" /></a>
						<div class="content">
						<h2 align="left" class="major">${res.albums.items[0].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div></section>`;
		document.querySelector('#con2').innerHTML = html;

	});
});
$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:gfriend&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[1].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `<section id="two" class="wrapper spotlight style1">
			<div class="inner">
						<a href="https://en.wikipedia.org/wiki/GFriend" class="image"><img src="${res.albums.items[1].images[1].url}" alt="viray fccboi" /></a>
						<div class="content">
						<h2 align="left" class="major">${res.albums.items[1].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div></section>`;
		document.querySelector('#con3').innerHTML = html;

	});
});
$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:gfriend&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[2].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `<section id="two" class="wrapper alt spotlight style2">
			<div class="inner">
						<a href="https://en.wikipedia.org/wiki/GFriend" class="image"><img src="${res.albums.items[2].images[1].url}" alt="viray fccboi" /></a>
						<div class="content">
						<h2 align="left" class="major">${res.albums.items[2].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div></section>`;
		document.querySelector('#con4').innerHTML = html;

	});
});
