
function Laptop(yr, hd){
	this.year = yr;
	this.hd = hd;
}

Laptop.prototype.checkSpecs = function(){
	return ["Year: " + this.year, "HD: " + this.hd].join(", ");
}

/* Originally submitted
function Macbook(yr, hd, col){
	this.color = col;
	Laptop.apply(this);
	this.year = yr;
	this.hd = hd;
}
*/

// submitted afer the completion, to correct .apply method 
function Macbook(yr, hd, col){
	this.color = col;
	// passing arguments-(yr, hd, col) to the Laptop constructor function
	Laptop.apply(this, arguments);
}

// please see my questions/comments below
function extendWithObjectCreate(mac, lap){
	mac.prototype.__proto__ = lap.prototype;

	// I am not sure what is the purpose of the spec requirement to use Object.create() here?
	// The test will also pass if I just have- Object.create(lap) instead of assigning to mac
	// I do not understand "does not run the parent\'s constructor function during extension" spec requirement
	mac = Object.create(lap);					

}


function extendWithNewKeyword(mac, lap){
	mac.prototype.__proto__ = lap.prototype;

	// I am noot sure what is the purpose of creating a new object here?
	// The spec passed when i use lap.call() as argument but i am not sure what is going on here
	// I do not understand "runs the parent\'s constructor function during extension" spec requirement
	mac = new Laptop(lap.call(this));
	//return mac;
}

/*
Never set the ._proto_ (dunder proto) directly, always extend/manipulate the prototype object itself.

The biggest difference between 'new' and object.create is whether the constructor function runs, hence the specs
*/
