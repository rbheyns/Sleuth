/*
The case of the Python Syndicate
Stage 1

Officer: 6576922
CaseNum: 301-0-67532269-6576922

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var anna_karpinski_image;
var countess_hamilton_image;
var pawel_karpinski_image;
var rocky_kray_image;
var bones_karpinski_image;
var cecil_karpinski_image;



//declare your new variables below
var bones_karpinski_position_x = 408;
var bones_karpinski_position_y = 309;
var anna_karpinski_position_x = 115;
var anna_karpinski_position_y = 40;
var countess_hamilton_position_x = 408;
var countess_hamilton_position_y = 40;
var pawel_karpinski_position_x = 701;
var pawel_karpinski_position_y = 40;
var rocky_kray_position_x = 115;
var rocky_kray_position_y = 309;
var cecil_karpinski_position_x = 701;
var cecil_karpinski_position_y = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_image, bones_karpinski_position_x, bones_karpinski_position_y);
	image(anna_karpinski_image, anna_karpinski_position_x, anna_karpinski_position_y);
	image(countess_hamilton_image, countess_hamilton_position_x, countess_hamilton_position_y);
	image(pawel_karpinski_image, pawel_karpinski_position_x, pawel_karpinski_position_y);
	image(rocky_kray_image, rocky_kray_position_x, rocky_kray_position_y);
	image(cecil_karpinski_image, cecil_karpinski_position_x, cecil_karpinski_position_y);

}