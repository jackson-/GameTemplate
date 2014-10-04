//this creates superhero class for all THEM's
function THEM(firstName, lastName, superName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.superName = superName;
	this.powers = {};
}
//instantiate new hero:Aiyo
var Aiyo = new THEM("Mason", "Pryce", "Aiyo");
//add abilities to powers associative array
Aiyo.powers.fakeCreate = "inorganic creation";
Aiyo.powers.lifeCreate = function (){
	console.log(Aiyo.powers)
};
//instantiate new hero:Demiurge
var Demiurge = new THEM("Lysanthe", "Menzine", "Demiurge");
//add Demiurge abilities
Demiurge.powers.flight = function(direction, distance){
	this.direction = direction;
	this.position = direction + distance;
};
Demiurge.powers.battle = function(targetEnemy, attack){
	if (attack == "punch"){
	this.targetEnemy.life -= 30
	} else if (attack == "kick"){
	this.targetEnemy.life -= 20
	} else if (attack == "slam"){
	this.targetEnemy.life -= 50
	}
};
Demiurge.powers.shoot = function(targetEnemy, specialBullet){
	if(typeof(specialBullet)==='undefined') specialBullet = none;
	this.targetEnemy = targetEnemy;
	if(hit == true){
	targetEnemy.life -= 30;
	} 
};
//instantiate new hero:Spado
var Spado = new THEM("Joseph", "Spades", "Spado");
//add Spado abilities
Spado.powers.shadowBurst = "shoot out a burst of shadows";
Spado.powers.shadowForm = function(direction, shape){
	this.direction = direction;
	this.shadowShape = shape;
};
$(document).ready(function(){

console.log(Demiurge.powers.shoot);

});