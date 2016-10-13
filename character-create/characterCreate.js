//constructor function which can take in a series of values and create objects with the properties contained inside//
function Character(name, profession, gender, age, strength, hitpoints) {
	this.name == name;
	this.profession = profession;
	this. gender = gender;
	this.age = age;
	this.strength = strength;
	this. hitpoints = hitpoints;

	//method which determines whether or not a character's hitpoints are less than zero and returns true or false depending on the outcome//
	this.printStats = function() {
		console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender " + this.gender + "\nAge " + this.age + "\nStrength " + this.strength + "\nHitpoints " + this.hitpoints);
		console.log("\n----------------\n");
	};

	//method which determines whether or not a character's 'hitpoints' are less than zero and returns true or false depending on the outcome//
	this.isAlive = function() {
		if (this.hitpoints > 0) {
			console.log(this.name + " is still alive!");
			console.log("\n----------------\n");
			return true;
		} else {
			console.log(this.name + " has died!");
			return false;
		}
	}
};

//method which takes in a second object and decreases their "hitpoints" by this character's strength//
this.attack = function(character2) {
	character2.hitpoints -= this.strength;
};

//methos which increases this character's stats when called
this.levelUp = function() {
	this.age += 1;
	this.strength += 5;
	this.hitpoints += 25;
};
}

//creates two unique characters using the "Character" constructor//
var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();