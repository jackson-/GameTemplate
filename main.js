function THEM(firstName, lastName, superName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.superName = superName;
	this.powers = [];
}

var Aiyo = new THEM("Mason", "Pryce", "Aiyo");

Aiyo.powers.push("inorganic material creation, organic creation, palm vortex")

console.log(Aiyo.powers)