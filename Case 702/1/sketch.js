/*

Officer: 6576922
CaseNum: 702-0-57272517-6576922

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthPI_car to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveVehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthPI_car's miles_amount property by its gas_val property 
	 - add a random amount between -0.08 and 0.08 to sleuthPI_car's rumble_val property
	 - use the constrain function to constrain sleuthPI_car's rumble_val property to values between 0.05 and 1.02
	 - call the driveCarEngine function passing sleuthPI_car as an argument
	*/
	sleuthPI_car.miles_amount += sleuthPI_car.gas_val;
	sleuthPI_car.rumble_val += random(-0.08, 0.08);
	sleuthPI_car.rumble_val = constrain(sleuthPI_car.rumble_val, 0.05, 1.02);
	driveCarEngine(sleuthPI_car);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_car;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuthPI_car = 
	{
		x_position: roadLeftEdge + roadWidth/4,
		y_position: 300,
		miles_amount: 0,
		gas_val: 3,
		rumble_val: 0,
		car_model: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	};


}



function draw()
{
	background(0);


	moveVehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPI_car.miles_amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPI_car.miles_amount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthPI_car);
	image
	(
		carImages["detective"],
		sleuthPI_car.x_position - carImages["detective"].width/2 + random(-sleuthPI_car.rumble_val, sleuthPI_car.rumble_val),
		sleuthPI_car.y_position + random(-sleuthPI_car.rumble_val, sleuthPI_car.rumble_val)
	);

}

function driveCarEngine(car)
{

	car.exhaust.push({size: 2, x: car.x_position, y: car.y_position + carImages[car.car_model].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_val/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
