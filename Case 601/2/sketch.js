/*
Officer: 6576922
CaseNum: 601-1-43506200-6576922

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, SpringGreen stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, SandyBrown fill rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- ellipse()

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var killerSightings = {
	PtX: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	PtY: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var crimeRecorded = [ 
  { PosX : 403, PosY : 401},
  { PosX : 402, PosY : 360},
  { PosX : 427, PosY : 403},
  { PosX : 646, PosY : 284},
  { PosX : 639, PosY : 264},
  { PosX : 830, PosY : 434},
  { PosX : 809, PosY : 443},
  { PosX : 844, PosY : 496},
  { PosX : 802, PosY : 350},
  { PosX : 683, PosY : 413},
  { PosX : 552, PosY : 464},
  { PosX : 629, PosY : 498},
  { PosX : 712, PosY : 562},
  { PosX : 783, PosY : 603},
  { PosX : 415, PosY : 225},
  { PosX : 561, PosY : 282},
  { PosX : 562, PosY : 392},
  { PosX : 751, PosY : 283},
  { PosX : 680, PosY : 359},
  { PosX : 626, PosY : 436},
  { PosX : 701, PosY : 455},
  { PosX : 838, PosY : 565},
  { PosX : 322, PosY : 508},
  { PosX : 468, PosY : 556},
  { PosX : 625, PosY : 737} 
];


function preload()
{
	countyMap = loadImage("map.png");
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here
for(var i = 0; i < killerSightings.PtX.length; i++)
{
	strokeWeight(1);
	stroke(0,255,127);
	ellipse(killerSightings.PtX[i], killerSightings.PtY[i], 10, 10);
}
for(var j = 0; j < crimeRecorded.length; j++)
{
	noStroke();
	fill(244,164,96);
	rect(crimeRecorded[j].PosX-5, crimeRecorded[j].PosY-5, 10, 10);
}

}

//We are not using the draw function this time
