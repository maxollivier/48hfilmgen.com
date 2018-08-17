function generator(){
		var genx = Math.floor(Math.random() * (genre.length));
		var phrx = Math.floor(Math.random() * (phrase.length));
		var geny = genre[genx];
		var phry = phrase[linx];
		document.getElementById("genre").innerHTML = genx
		document.getElementById("line").innerHTML = phrx
}
