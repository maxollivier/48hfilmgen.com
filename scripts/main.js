function generator(){
		var genreIndex = Math.floor(Math.random() * (genre.length));
		var genrePrint = genre[genreIndex];
		document.getElementById("genre").innerHTML = genrePrint
		var phraseIndex = Math.floor(Math.random() * (phrase.length));
		var phrasePrint = genre[lineIndex];
		document.getElementById("phrase").innerHTML = phrasePrint
}
