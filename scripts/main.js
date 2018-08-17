function generator(){
		var genx = Math.floor(Math.random() * (genre.length));
		var geny = genre[genx];
		document.getElementById("genre").innerHTML = geny
}
