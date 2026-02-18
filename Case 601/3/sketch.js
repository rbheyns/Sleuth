/*
Officer: 6576922
CaseNum: 601-2-55739294-6576922

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, OliveDrab stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Orchid stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 44 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var murderer_record = [ 
  { LocX : 639, LocY : 288},
  { LocX : 681, LocY : 286},
  { LocX : 712, LocY : 293},
  { LocX : 756, LocY : 310},
  { LocX : 715, LocY : 368},
  { LocX : 701, LocY : 425},
  { LocX : 753, LocY : 436},
  { LocX : 815, LocY : 468},
  { LocX : 795, LocY : 506},
  { LocX : 788, LocY : 497},
  { LocX : 781, LocY : 486},
  { LocX : 768, LocY : 489},
  { LocX : 750, LocY : 500},
  { LocX : 732, LocY : 506},
  { LocX : 714, LocY : 514},
  { LocX : 695, LocY : 531},
  { LocX : 693, LocY : 552},
  { LocX : 654, LocY : 523},
  { LocX : 624, LocY : 500},
  { LocX : 594, LocY : 484},
  { LocX : 555, LocY : 474} 
];


//Recent crime records.

var crimescene_log = [ 
  { posX : 409, posY : 446, murdered : 'HANG NIEMELA'},
  { posX : 443, posY : 419, murdered : 'LARRAINE PEGORD'},
  { posX : 465, posY : 548, murdered : 'MALINDA GOODBURY'},
  { posX : 709, posY : 552, murdered : 'GAYLA WILLMAR'},
  { posX : 695, posY : 421, murdered : 'TAMICA MAUBERT'},
  { posX : 652, posY : 268, murdered : 'LIANNE COURTWOOD'},
  { posX : 641, posY : 306, murdered : 'LESLEY MONKSFORD'},
  { posX : 119, posY : 344, murdered : 'JENIFFER DEAUVILLE'},
  { posX : 114, posY : 359, murdered : 'LOUISE ZETLAND'},
  { posX : 90, posY : 490, murdered : 'BRAD SILVEIRA'},
  { posX : 76, posY : 516, murdered : 'ERMELINDA OORIN'},
  { posX : 615, posY : 741, murdered : 'JESUS FORSLIN'},
  { posX : 349, posY : 796, murdered : 'NICOLE ASHELY'},
  { posX : 456, posY : 770, murdered : 'PIERRE DORCEY'} 
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
	for(var i = 0; i < murderer_record.length; i++)
		{
			strokeWeight(1);
			stroke(107,142,35);
			triangle(murderer_record[i].LocX-5,murderer_record[i].LocY+5,murderer_record[i].LocX+5,murderer_record[i].LocY+5,murderer_record[i].LocX, murderer_record[i].LocY-5);
		}
	for(var j = 0; j < crimescene_log.length; j++)
		{
			stroke(218,112,214);
			rect(crimescene_log[j].posX-5, crimescene_log[j].posY-5, 10, 10);
		}
	for (var a = 0; a < murderer_record.length; a++)
	{
		for (var b = 0; b < crimescene_log.length; b++)
		{
			if (dist(
				murderer_record[a].LocX,
				murderer_record[a].LocY,
				crimescene_log[b].posX,
				crimescene_log[b].posY
			) < 44)
			{
				possibleMatches.push({
					suspect_x: murderer_record[a].LocX,
					suspect_y: murderer_record[a].LocY,
					crime_x: crimescene_log[b].posX,
					crime_y: crimescene_log[b].posY,
					victimName: crimescene_log[b].murdered
				});
			}
		}
	}
	
	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
