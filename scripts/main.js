function generator(){
	var genreIndex = Math.floor(Math.random() * (genre.length));
	var phraseIndex = Math.floor(Math.random() * (phrase.length));
	var genrePrint = genre[genreIndex];
	var phrasePrint = genre[lineIndex];
	document.getElementById("genre").innerHTML = genrePrint
	document.getElementById("phrase").innerHTML = phrasePrint
}
