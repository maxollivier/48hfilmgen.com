function generator(){
		var x = Math.floor(Math.random() * (genre.length));
		var y = genre[x];
		document.getElementById("genre").innerHTML = y
}
