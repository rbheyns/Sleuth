/*
The case of the Python Syndicate
Stage 3


Officer: 6576922
CaseNum: 301-2-54760737-6576922

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil Karpinski has been declared and initialised
- Position each mugshot relative to Cecil Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Cecil Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Cecil Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var robbieKrayImage;
var bonesKarpinskiImage;
var pawelKarpinskiImage;
var rockyKrayImage;
var cecilKarpinskiImage;
var countessHamiltonImage;

var cecilKarpinskiObject;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObject = {
		x: 408,
		y: 309,
		image: cecilKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);
	//cecil x = 408, y = 309
	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(robbieKrayImage, cecilKarpinskiObject.x-293, cecilKarpinskiObject.y-269);
	image(bonesKarpinskiImage, cecilKarpinskiObject.x, cecilKarpinskiObject.y-269);
	image(pawelKarpinskiImage, cecilKarpinskiObject.x+293, cecilKarpinskiObject.y-269);
	image(rockyKrayImage, cecilKarpinskiObject.x-293, cecilKarpinskiObject.y);
	image(countessHamiltonImage, cecilKarpinskiObject.x+293, cecilKarpinskiObject.y);

}