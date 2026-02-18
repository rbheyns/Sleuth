/*
The case of the Python Syndicate
Stage 2


Officer: 6576922
CaseNum: 301-1-32112608-6576922

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Cecil Karpinski

- The variables for Cecil Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Cecil Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Cecil Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Cecil Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var annaKarpinskiImg;
var cecilKarpinskiImg;
var countessHamiltonImg;
var robbieKrayImg;
var pawelKarpinskiImg;
var adaLovelaceImg;


var cecilKarpinskiCoordinateX = 408;
var cecilKarpinskiCoordinateY = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	adaLovelaceImg = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);
	//cecil pos x = 408, y = 40
	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImg, cecilKarpinskiCoordinateX, cecilKarpinskiCoordinateY);
	image(annaKarpinskiImg, cecilKarpinskiCoordinateX-293, cecilKarpinskiCoordinateY);
	image(countessHamiltonImg, cecilKarpinskiCoordinateX+293, cecilKarpinskiCoordinateY);
	image(robbieKrayImg, cecilKarpinskiCoordinateX-293, cecilKarpinskiCoordinateY+269);
	image(pawelKarpinskiImg, cecilKarpinskiCoordinateX, cecilKarpinskiCoordinateY+269);
	image(adaLovelaceImg, cecilKarpinskiCoordinateX+293, cecilKarpinskiCoordinateY+269);

}