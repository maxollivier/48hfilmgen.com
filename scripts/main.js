function generator(){
		var genreIndex = Math.floor(Math.random() * (genre.length));
		var genrePrint = genre[genreIndex];
		document.getElementById("genre").innerHTML = genrePrint
		var lineIndex = Math.floor(Math.random() * (line.length));
		var linePrint = genre[lineIndex];
		document.getElementById("phrase").innerHTML = linePrint
}
