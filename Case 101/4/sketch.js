/*

Officer: 6576922
CaseNum: 101-3-93644221-6576922

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Olive Drab filled rectangle with a Medium Spring Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Olive filled
rectangle with a Gold outline around him.

Identify the man reading the newspaper by drawing a Blue Violet filled rectangle
with a Crimson outline around him.

Identify the woman with the dog by drawing a Medium Slate Blue filled rectangle with a
Cornflower Blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	//anna
	fill(107,142,35);
	stroke(0,250,154);
	rect(20,83,250,540);
	//monocle man
	fill(128,128,0);
	stroke(255,215,0);
	rect(485,235,125,170);
	//newspaper man
	fill(138,43,226);
	stroke(220,20,60);
	rect(933,166,123,234);
	//woman with dog
	fill(123,104,238);
	stroke(100,149,237);
	rect(643,111,212,454);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
