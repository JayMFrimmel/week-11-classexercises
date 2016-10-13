// create an object and set it to 'dogs' //
var dogs = {
	//creates th property "raining" and sets it to true//
	raining: true,
	//creates the property "noise" and sets it to "woof!"//
	noise: "woof!",
	//creates the method "makeNoise" and makes it so that, when called, it prints dogs.noise
	makeNoise: function() {
		if (this.raining == true) {
		console.log(this.noise);
		}
	}
}

//creates an object with a similar layout to 'dogs' and sets it to 'cats'
var cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function() {
		if (this.raining == true) {
			console.log(this.noise);
		}
	}
}

//calls the 'makeNoise' methods for both objects//
dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

//creates a function called 'massHysteria' which takes in both objects and prints A MESSAGE TO SCREEN IF ".raining" IS TRUE FOR BOTH OF THEM//
var massHysteria = function(dogs, cats) {
	if (dogs.raining == true && cats.raining == true) {
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
	}
}

massHysteria(dogs, cats);