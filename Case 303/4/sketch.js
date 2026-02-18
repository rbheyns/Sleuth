/*

Officer: 6576922
CaseNum: 303-3-35747725-6576922

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 5 to 20.
	- Assign the output to HiddenVaultCombination_A

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseX to values ranging from 2 to 10.
	- Assign the output to HiddenVaultCombination_B

	When any key is released:
	- Make HiddenVaultCombination_C equal to the value of 'key'

	When the mouse button is released:
	- Use the 'map' function to scale mouseY to values ranging from 22 to 74.
	- Assign the output to HiddenVaultCombination_D

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 17 to 73.
	- Assign the output to HiddenVaultCombination_E

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseY to values ranging from 12 to 76.
	- Assign the output to HiddenVaultCombination_F



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var HiddenVaultCombination_A;
var HiddenVaultCombination_B;
var HiddenVaultCombination_C;
var HiddenVaultCombination_D;
var HiddenVaultCombination_E;
var HiddenVaultCombination_F;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	HiddenVaultCombination_A = 0;
	HiddenVaultCombination_B = "";
	HiddenVaultCombination_C = "";
	HiddenVaultCombination_D = 0;
	HiddenVaultCombination_E = 0;
	HiddenVaultCombination_F = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseReleased()
{
	HiddenVaultCombination_A = map(mouseX, 0, width, 5, 20, true);
	HiddenVaultCombination_D = map(mouseY, 0, width, 22, 74, true);
	HiddenVaultCombination_E = map(mouseX, 0, width, 17, 73, true);
}

function mouseMoved()
{
	HiddenVaultCombination_B = map(mouseX, 0, width, 2, 10, true);
	HiddenVaultCombination_F = map(mouseY, 0, width, 12, 76, true);
}

function keyReleased()
{
	HiddenVaultCombination_C = key;
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(256,180);
	drawDial(170,HiddenVaultCombination_A,20);
	pop();

	//Draw the spinners
	push();
	translate(206,280);
	drawSpinner(3, HiddenVaultCombination_B);
	pop();

	push();
	translate(306,280);
	drawSpinner(3, HiddenVaultCombination_C);
	pop();

	//Draw the levers
	push();
	translate(125,356);
	drawLever(HiddenVaultCombination_D);
	pop();

	push();
	translate(250,356);
	drawLever(HiddenVaultCombination_E);
	pop();

	push();
	translate(375,356);
	drawLever(HiddenVaultCombination_F);
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

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
