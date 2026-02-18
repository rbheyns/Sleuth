/*
Officer: 6576922
CaseNum: 601-3-32369929-6576922

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, BlueViolet stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Blue stroke triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 86 pixels of any of the crimes within no more than 0 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- ellipse()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var suspectLog_PointX = [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68];
var suspectLog_PointY = [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461];
var suspectLog_recordedDay = [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24];


//Recent crime records.

var attackData_location_x = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var attackData_location_y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var attackData_day = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var attackData_murdered_ = ['DARBY MYRLE', 'TAMICA MAUBERT', 'JACQUELINE DURANTS', 'LAVERNE JACQUELIN', 'JAUNITA JOYER', 'JESSIA PORTOS', 'BRAD SILVEIRA', 'JENIFFER DEAUVILLE', 'BRIDGET BROADVIEW', 'NELSON TINTLE', 'JESUS FORSLIN', 'DEEDEE PHINNEY', 'MALINDA GOODBURY', 'DRUSILLA WARMAN', 'ERMELINDA OORIN'];


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
	for(var i = 0; i < suspectLog_PointX.length; i++)
		{
			strokeWeight(1);
			stroke(138,43,226);
			ellipse(suspectLog_PointX[i], suspectLog_PointY[i], 10, 10);
		}
	
	for(var j = 0; j < attackData_location_x.length; j++)
		{
			stroke(0,0,255);
			triangle(attackData_location_x[j]-5,attackData_location_y[j]+5,attackData_location_x[j]+5,attackData_location_y[j]+5,attackData_location_x[j],attackData_location_y[j]-5);
		}
	
	for(var a = 0; a < suspectLog_PointX.length; a++)
		{
			for(var b = 0; b < attackData_location_x.length; b++)
				{
					if(dist(suspectLog_PointX[a], suspectLog_PointY[a],	attackData_location_x[b], attackData_location_y[b]) < 86 && abs(suspectLog_recordedDay[a] - attackData_day[b]) < 1)
						{
							possibleMatches.push({ crime:{x: attackData_location_x[b], y: attackData_location_y[b], victimName: attackData_murdered_[b]}, suspect:{x: suspectLog_PointX[a], y:suspectLog_PointY[a]} });
						}
				}
		}


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
