function THEM(firstName, lastName, superName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.superName = superName;
	this.powers = {};
}

var Aiyo = new THEM("Mason", "Pryce", "Aiyo");

Aiyo.powers.fakeCreate = "inorganic creation";
Aiyo.powers.lifeCreate = function (){
	console.log(Aiyo.powers)
};



var Demiurge = new THEM("Lysanthe", "Menzine", "Demiurge");
$(document).ready(function(){

Aiyo.powers.lifeCreate();


});



