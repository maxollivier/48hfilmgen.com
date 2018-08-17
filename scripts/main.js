function generator(){
		var genx = Math.floor(Math.random() * (genre.length));
		var linx = Math.floor(Math.random() * (line.length));
		var geny = genre[genx];
		var liny = genre[linx];
		document.getElementById("genre").innerHTML = genx
		document.getElementById("line").innerHTML = linx
}
