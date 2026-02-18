/*

Officer: 6576922
CaseNum: 303-2-50160026-6576922

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make Secure_Storage_CombinationA equal to the value of mouseX
	- Use the 'constrain' function to prevent Secure_Storage_CombinationA from falling below 1 and going above 10

	When any key is released:
	- Increment Secure_Storage_CombinationB by 1
	- Use the 'min' function to prevent Secure_Storage_CombinationB from going above 10

	Whilst the mouse is moving:
	- Make Secure_Storage_CombinationC equal to the value of mouseY
	- Use the 'max' function to prevent Secure_Storage_CombinationC from falling below 4

	Whilst the mouse is moving:
	- Increment Secure_Storage_CombinationD by 2
	- Use the 'min' function to prevent Secure_Storage_CombinationD from going above 15

	When the mouse button is released:
	- Make Secure_Storage_CombinationE equal to the value of mouseX
	- Use the 'min' function to prevent Secure_Storage_CombinationE from going above 77



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Secure_Storage_CombinationA;
var Secure_Storage_CombinationB;
var Secure_Storage_CombinationC;
var Secure_Storage_CombinationD;
var Secure_Storage_CombinationE;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Secure_Storage_CombinationA = 0;
	Secure_Storage_CombinationB = 0;
	Secure_Storage_CombinationC = 0;
	Secure_Storage_CombinationD = 0;
	Secure_Storage_CombinationE = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseDragged()
{
	Secure_Storage_CombinationA = constrain(mouseX, 1, 10);
}

function keyReleased()
{
	Secure_Storage_CombinationB += 1;
	Secure_Storage_CombinationB = min(10, Secure_Storage_CombinationB ); 
}

function mouseMoved()
{
	Secure_Storage_CombinationC = max(4, mouseY);
	Secure_Storage_CombinationD += 2;
	Secure_Storage_CombinationD = min(15,Secure_Storage_CombinationD);
}

function mouseReleased()
{
	Secure_Storage_CombinationE = min(77,mouseX);
}
///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Secure_Storage_CombinationA, 14);
	pop();

	push();
	translate(120,380);
	drawDial(140,Secure_Storage_CombinationB, 15);
	pop();

	push();
	translate(280,170);
	drawDial(140,Secure_Storage_CombinationC, 19);
	pop();

	push();
	translate(280,380);
	drawDial(140,Secure_Storage_CombinationD, 21);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Secure_Storage_CombinationE);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
