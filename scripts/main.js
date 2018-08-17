function genreGenerator(){
	var genreIndex = Math.floor(Math.random() * (genre.length));
	var genrePrint = genre[genreIndex];
	document.getElementById("genre").innerHTML = genrePrint;
	console.log(genreIndex);
	console.log(genrePrint);
}

function phraseGenerator(){
	var phraseIndex = Math.floor(Math.random() * (phrase.length));
	var phrasePrint = phrase[phraseIndex];
	document.getElementById("phrase").innerHTML = phrasePrint;
	console.log(phraseIndex);
	console.log(phrasePrint);
}

function propGenerator(){
	var propIndex = Math.floor(Math.random() * (prop.length));
	var propPrint = prop[propIndex];
	document.getElementById("prop").innerHTML = propPrint;
	console.log(propIndex);
	console.log(propPrint);
}

function generator(){
	genreGenerator();
	phraseGenerator();
	propGenerator();
}
