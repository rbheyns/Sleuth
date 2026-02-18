/*

Officer: 6576922
CaseNum: 202-3-53454510-6576922

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all //text commands except
those which produce Chocolate filled //text with a Maroon outline in Melissa font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out //text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(530,345);
	//textSize(21);
}

function draw()
{
	background(255);

	fill(72,209,204);
	stroke(0,191,255);
	textFont(RonsFont);
	//text("this", 11.3623046875,90);
	fill(238,232,170);
	stroke(255,69,0);
	textFont(Ballpointprint);
	//text("these", 349.38671875,112);
	fill(0,128,0);
	stroke(139,0,0);
	textFont(RonsFont);
	//text("sile", 10.3623046875,163);
	fill(255,0,255);
	stroke(46,139,87);
	//text("go", 289.6591796875,63);
	push();
	fill(0,191,255);
	stroke(139,0,139);
	textFont(Ballpointprint);
	//text("for", 362.564453125,63);
	pop();
	stroke(0,250,154);
	textFont(Melissa);
	//text("?", 130.7958984375,63);
	fill(50,205,50);
	stroke(128,0,128);
	textFont(Diggity);
	//text("My", 11.5703125,21);
	fill(176,224,230);
	stroke(128,0,0);
	textFont(RonsFont);
	//text("can", 265.0634765625,138);
	fill(138,43,226);
	stroke(139,0,139);
	textFont(Melissa);
	//text("relationship", 147.416015625,90);
	fill(205,133,63);
	stroke(199,21,133);
	textFont(Diggity);
	//text("you", 299.0458984375,90);
	push();
	fill(64,224,208);
	stroke(128,0,0);
	textFont(Ballpointprint);
	//text("send", 77.29296875,112);
	pop();
	stroke(153,50,204);
	textFont(Ballpointprint);
	//text("ash.", 130.29296875,112);
	push();
	fill(186,85,211);
	stroke(178,34,34);
	textFont(RonsFont);
	//text("so", 147.9384765625,163);
	pop();
	fill(50,205,50);
	textFont(RonsFont);
	//text("more", 194.578125,138);
	fill(123,104,238);
	stroke(139,69,19);
	textFont(Diggity);
	//text("delays.", 467.2529296875,112);
	fill(100,149,237);
	stroke(153,50,204);
	textFont(RonsFont);
	//text("es.", 293.0546875,163);
	fill(0,0,128);
	stroke(127,255,0);
	textFont(Ballpointprint);
	//text("?", 332.296875,138);
	push();
	fill(0,128,0);
	stroke(154,205,50);
	textFont(Diggity);
	//text("and", 450.0029296875,63);
	pop();
	stroke(154,205,50);
	//text("so,", 14.5703125,112);
	fill(135,206,250);
	stroke(0,139,139);
	textFont(Melissa);
	//text("ed", 203.5546875,163);
	fill(0,206,209);
	stroke(139,0,139);
	textFont(RonsFont);
	//text("x", 66.775390625,247);
	fill(25,25,112);
	stroke(139,0,0);
	textFont(Ballpointprint);
	//text("we", 194.6728515625,63);
	fill(238,232,170);
	stroke(128,0,0);
	textFont(Melissa);
	//text("secrets,", 401.3837890625,138);
	fill(244,164,96);
	stroke(32,178,170);
	textFont(RonsFont);
	//text("You", 75.2490234375,163);
	fill(75,0,130);
	stroke(0,206,209);
	textFont(Melissa);
	//text("Perhaps", 142.3662109375,63);
	fill(138,43,226);
	stroke(124,252,0);
	textFont(Ballpointprint);
	//text("much", 150.607421875,138);
	fill(255,99,71);
	stroke(128,0,128);
	//text("all", 48.8095703125,90);
	fill(34,139,34);
	stroke(255,255,0);
	textFont(Diggity);
	//text("a", 396.5400390625,63);
	fill(135,206,235);
	stroke(148,0,211);
	textFont(Ballpointprint);
	//text("are", 112.4501953125,163);
	fill(34,139,34);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("da", 36.7900390625,21);
	fill(218,112,214);
	stroke(0,100,0);
	textFont(Melissa);
	//text("you", 30.5107421875,63);
	fill(64,224,208);
	stroke(153,50,204);
	textFont(Ballpointprint);
	//text("rs,", 77.244140625,205);
	fill(255,140,0);
	stroke(255,140,0);
	//text("The", 355.689453125,138);
	fill(127,255,212);
	stroke(0,0,255);
	//text("money", 403.9775390625,90);
	fill(34,139,34);
	stroke(128,128,0);
	//text("If", 475.2041015625,90);
	push();
	fill(0,191,255);
	stroke(0,250,154);
	textFont(RonsFont);
	//text("?", 249.9912109375,90);
	pop();
	stroke(255,0,255);
	textFont(Diggity);
	//text("Are", 264.7978515625,90);
	fill(72,209,204);
	stroke(255,0,0);
	//text("how", 114.9306640625,138);
	push();
	fill(30,144,255);
	stroke(128,0,0);
	textFont(RonsFont);
	//text("longer", 232.4716796875,112);
	pop();
	fill(173,255,47);
	stroke(50,205,50);
	textFont(Ballpointprint);
	//text("Daisy", 11.5703125,247);
	fill(0,255,127);
	stroke(128,0,128);
	textFont(Diggity);
	//text("Is", 99.6455078125,90);
	fill(0,100,0);
	stroke(255,69,0);
	//text("continual", 403.4384765625,112);
	fill(0,255,127);
	stroke(0,0,139);
	textFont(Melissa);
	//text("out.", 74.44921875,90);
	push();
	fill(165,42,42);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("rling", 56.990234375,21);
	pop();
	fill(244,164,96);
	stroke(124,252,0);
	textFont(Diggity);
	//text("sort", 482.3408203125,63);
	fill(100,149,237);
	stroke(255,140,0);
	textFont(RonsFont);
	//text("not", 50.142578125,138);
	fill(107,142,35);
	stroke(0,0,255);
	//text("away", 313.71484375,63);
	fill(199,21,133);
	stroke(128,128,0);
	textFont(Diggity);
	//text("can", 178.65234375,112);
	fill(50,205,50);
	stroke(0,0,205);
	textFont(RonsFont);
	//text("I'm", 11.3623046875,138);
	push();
	fill(34,139,34);
	stroke(153,50,204);
	//text("ignore", 290.3447265625,112);
	pop();
	fill(64,224,208);
	stroke(0,128,128);
	textFont(Ballpointprint);
	//text("c", 123.8046875,112);
	fill(0,255,255);
	stroke(154,205,50);
	textFont(Diggity);
	//text("?", 459.224609375,90);
	push();
	fill(154,205,50);
	stroke(255,69,0);
	//text("I", 168.1748046875,112);
	pop();
	fill(240,230,140);
	stroke(255,255,0);
	textFont(RonsFont);
	//text("short", 329.640625,90);
	fill(100,149,237);
	stroke(124,252,0);
	//text("I", 246.791015625,138);
	fill(219,112,147);
	stroke(184,134,11);
	textFont(Ballpointprint);
	//text("you", 55.658203125,205);
	fill(255,127,80);
	stroke(0,250,154);
	textFont(RonsFont);
	//text("sh", 226.8642578125,63);
	fill(0,139,139);
	stroke(255,215,0);
	textFont(Melissa);
	//text("sure", 85.78515625,138);
	push();
	fill(222,184,135);
	stroke(32,178,170);
	//text("Are", 4.9765625,63);
	pop();
	fill(106,90,205);
	stroke(0,0,255);
	textFont(Diggity);
	//text("our", 116.7587890625,90);
	fill(154,205,50);
	stroke(50,205,50);
	//text("no", 209.7724609375,112);
	fill(0,128,0);
	stroke(46,139,87);
	textFont(Melissa);
	//text("Forever", 7.3623046875,205);
	fill(255,99,71);
	stroke(184,134,11);
	//text("Bob,", 103.0712890625,21);
	fill(139,0,139);
	stroke(127,255,0);
	textFont(Diggity);
	//text("of", 380.41796875,90);
	fill(255,215,0);
	stroke(124,252,0);
	textFont(RonsFont);
	//text("nce.", 36.2841796875,163);
	fill(160,82,45);
	stroke(0,255,127);
	//text("sometim", 221.2978515625,163);
	push();
	fill(153,50,204);
	textFont(Diggity);
	//text("me", 103.1826171875,63);
	pop();
	fill(139,69,19);
	stroke(46,139,87);
	//text("ould", 242.59375,63);
	fill(210,105,30);
	stroke(128,0,0);
	textFont(Melissa);
	text("break", 413.5908203125,63);
	text("take", 301.1982421875,138);
	text("the", 455.70703125,138);
	text("can", 52.892578125,112);
	text("safe", 218.283203125,90);
	text("I", 41.7841796875,112);
	text("guard", 172.85546875,163);
	fill(255,105,180);
	stroke(153,50,204);
	//text("avoiding", 53.96484375,63);



}
