var bubbles = []

function setup() {
	createCanvas(400,400);
	for(var i=0; i<10; i++) {
		bubbles.push(new Bubble());
	}

}

function draw() {
	background(200);
	// length = how many bubbles in our list
	for(var i=0; i<bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}

// gets called everytime i press the mouse
function mousePressed() {
	for(var i=0; i<bubbles.length; i++) {
		bubbles[i].isClicked();
	}
}

// Bubble class
function Bubble() {
	this.x = random(400);
	this.y = random(400);
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);

	this.move = function() {
		this.x += random(-2,2);
		this.y += random(-2,2);
	}

	this.show = function () {
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, 50, 50);
	}

	// return true if mouse inside bubble
	// return false if not
	this.isClicked = function() {
		// dist(x1,y1,x2,y2)
		// calculating the distance between the mouse and the 
		// center of the circle 
		var d = dist(this.x, this.y, mouseX, mouseY);
		// if mouse inside bubble
		if ( d < 25) {
			// mouse inside circle, so change the color!
			this.r = random(255);
			this.b = random(255);
			this.g = random(255);
		} else {
			// mouse not inside circle
		}
	}
}



