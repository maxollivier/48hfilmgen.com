//function myFunction() {
//    var x = Math.floor((Math.random() * (genre.length) + 1);
//    document.getElementById("demo").innerHTML = x;
//}

var letters = ["A", "B", "C", "D"];
var numbers = ["1", "2", "3", "4"];

function generator(){
		var y = Math.floor(Math.random() * (genre.length));
		var x = genre[y];
		document.getElementById("demo").innerHTML = x

}