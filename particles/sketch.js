particles = []

function setup() {
	createCanvas(800,800);
}

function draw() {
	background(200);

	for(var i=0; i<particles.length; i++) {
		particles[i].move();
		particles[i].show();
	}
}

// will get called everytime i click and drag the mouse
function mouseDragged() {
	particles.push(new Particle(mouseX, mouseY));
}

// Particle class
function Particle(x,y){
	this.x = x;
	this.y = y;
	// using color instead of separate r, g, and b values
	this.col = color(random(255), random(255), random(255));
	this.speedX = random(-3,3);
	this.speedY = random(-3,3);

	this.show = function() {
		fill(this.col);
		ellipse(this.x, this.y, 10, 10);
	}

	this.move = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
}