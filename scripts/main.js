function genreGenerator(){
	var genreIndex = Math.floor(Math.random() * (genre.length));
	var genrePrint = genre[genreIndex];
	document.getElementById("genre").innerHTML = genrePrint;
	console.log genreIndex
	console.log genrePrint
}

function phraseGenerator(){
	var phraseIndex = Math.floor(Math.random() * (phrase.length));
	var phrasePrint = genre[phraseIndex];
	document.getElementById("phrase").innerHTML = phrasePrint;
	console.log phraseIndex
	console.log phrasePrint
}

function generator(){
	genreGenerator();
	phraseGenerator();
}
