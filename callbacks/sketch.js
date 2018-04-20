var image1;
var image2;
var currImage;
var slider;

function preload() {
	image1 = loadImage("images/spaceship.jpg");
	image2 = loadImage("images/explosion.jpg");
}

function setup() {
	slider = createSlider(0,360);

	createCanvas(800,800);

	currImage = image1;

	var button = select('#button');
	// callback
	button.mousePressed(changePhoto);
	colorMode(HSB);
}

function draw() {
	// color mode default RGB
	tint(slider.value(),100,100);
	image(currImage, 0, 0,720,422);
}

function changePhoto() {
	if(currImage == image1) {
		currImage = image2;
	} else {
		currImage = image1;
	}
}