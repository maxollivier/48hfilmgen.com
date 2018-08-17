function genreGenerator(){
	var genreIndex = Math.floor(Math.random() * (genre.length));
	var genrePrint = genre[genreIndex];
	document.getElementById("genre").innerHTML = genrePrint;
}

function phraseGenerator(){
	var phraseIndex = Math.floor(Math.random() * (phrase.length));
	var phrasePrint = genre[phraseIndex];
	document.getElementById("phrase").innerHTML = phrasePrint;
}

function generator(){
	genreGenerator();
	phraseGenerator();
}
