function generator(){
		var genx = Math.floor(Math.random() * (genre.length));
		var phrx = Math.floor(Math.random() * (phrase.length));
		var geny = genre[genx];
		var phry = phrase[phrx];
		document.getElementById("genre").innerHTML = geny
		document.getElementById("line").innerHTML = phry
}
