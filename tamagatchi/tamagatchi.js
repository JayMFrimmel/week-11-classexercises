// constructor function which can be used to create "Digital Pal" objects//
var DigitalPal = function() {
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;

	//method which feeds the DigitalPal when they are hungry and sets them to sleepy//
	this.feed = function() {
		if (this.hungry === true) {
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks, I'm full.");
		}
	};

	//Method which puts the DigitalPal to sleep when they are sleepy, increases their age by one, and sets them to 'bored' //
	this.sleep = function() {
		if (this.sleepy === true) {
			console.log("Zzzzzzzz~~");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		} else {
			console.log("No way! I'm not tired!")
		}
	};

	//method which allows the user to play with their Digital Pal when they are bored and sets them to hungry//
this.play = function(){
	if (this.bored === true) {
		console.log("Yay! Let's play!");
		this.bored = false;
		this.hungry = true;
	} else {
		console.log("Not right now. Maybe later?");
	}
};

 
