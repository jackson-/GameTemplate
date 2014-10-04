//this creates superhero class for all THEM's
function THEM(firstName, lastName, superName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.superName = superName;
	this.powers = {};
}
//instantiate new hero
var Aiyo = new THEM("Mason", "Pryce", "Aiyo");
//add abilities to powers associative array
Aiyo.powers.fakeCreate = "inorganic creation";
Aiyo.powers.lifeCreate = function (){
	console.log(Aiyo.powers)
};

var Demiurge = new THEM("Lysanthe", "Menzine", "Demiurge");

$(document).ready(function(){

Aiyo.powers.lifeCreate();


});