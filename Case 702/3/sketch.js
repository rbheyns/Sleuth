/*

Officer: 6576922
CaseNum: 702-2-55867082-6576922

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a white car with a Licence_Plate of URCBL5. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Detective_CarObject and the cars in
cars_data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveCar()
{
	/*
	This function should do the following: 
	 - increment Detective_CarObject's Miles_Amount property by its Speed_Amt property 
	 - add a random amount between -0.1 and 0.1 to Detective_CarObject's EngineRumble_Amount property
	 - use the constrain function to constrain Detective_CarObject's EngineRumble_Amount property to values between 0.03 and 1.12
	 - call the TurnoverCar_motor function passing Detective_CarObject as an argument
	*/
	Detective_CarObject.Miles_Amount += Detective_CarObject.Speed_Amt;
	Detective_CarObject.EngineRumble_Amount += random(-0.1, 0.1);
	Detective_CarObject.EngineRumble_Amount = constrain(Detective_CarObject.EngineRumble_Amount, 0.03, 1.12);
	TurnoverCar_motor(Detective_CarObject);
}


function MoveLanes(targetCar)
{
	/*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_position_a and lane_position_b to effect the change.
	 hint: You will need to modify the X_Coord property of targetCar.
	*/
	if(targetCar.X_Coord == lane_position_a)
		{
			targetCar.X_Coord = lane_position_b;
		}
	else
		{
			targetCar.X_Coord = lane_position_a;
		}
}


function CheckCarInfront( target_vehicle )
{
	/*
	This function should do the following: 
	 - determine if target_vehicle is in the same lane and less than 200px behind any of the cars in cars_data.
	 - do this by traversing cars_data and comparing each car's Miles_Amount property to that of target_vehicle.
	 - use the Licence_Plate property of each car to ignore cars that match target_vehicle.
	 - if you find a car that matches these requirements then return the Licence_Plate property for the car. Otherwise return false.
	*/
	for(var i = 0; i < cars_data.length; i++)
	{
		var car = cars_data[i];

		// ignore itself
		if(car.Licence_Plate != target_vehicle.Licence_Plate)
		{
			// same lane
			if(car.X_Coord == target_vehicle.X_Coord)
			{
				// ahead and within 200
				if(car.Miles_Amount > target_vehicle.Miles_Amount &&
				   car.Miles_Amount - target_vehicle.Miles_Amount < 200)
				{
					return car.Licence_Plate;
				}
			}
		}
	}
	return false;
}


function CheckCarIsBySide( carObj )
{
	/*
	This function should do the following: 
	 - determine if carObj is parallel with Detective_CarObject.
	 - if carObj is found to be parallel to Detective_CarObject then return true.
	 - cars are considered parallel if the absolute difference between their Miles_Amount properties is less than 25 px and they have non-matching X_Coord properties	*/
		if(abs(carObj.Miles_Amount - Detective_CarObject.Miles_Amount) < 25 &&
	   carObj.X_Coord != Detective_CarObject.X_Coord)
	{
		return true;
	}
	return false;
}


function FindAssailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to Detective_CarObject to see if they match the Licence_Plate property in the assailant description.
	 - it does this by traversing cars_data and calling CheckCarIsBySide for each car
.	 - if a positive result is returned then the Licence_Plate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
		for(var i = 0; i < cars_data.length; i++)
	{
		var car = cars_data[i];

		if(CheckCarIsBySide(car))
		{
			if(car.Licence_Plate == "URCBL5")
			{
				assailant = car;
			}
		}
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Detective_CarObject;

var roadWidth;
var roadLeftEdge;
var lane_position_a;
var lane_position_b;
var carImages = {};
var assailant;

var cars_data = [
{ X_Coord: 300, Y_Coord: 0, Miles_Amount: -200, Vehicle_Category: 'greenCar', Licence_Plate: 'RRP5JZ', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 200, Vehicle_Category: 'blueCar', Licence_Plate: '3XIKX9', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 600, Vehicle_Category: 'greenCar', Licence_Plate: '8CN8M6', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 1000, Vehicle_Category: 'redCar', Licence_Plate: 'LQSJDV', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 1400, Vehicle_Category: 'redCar', Licence_Plate: '4F1WQG', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 1800, Vehicle_Category: 'greenCar', Licence_Plate: '2UBJOU', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 2200, Vehicle_Category: 'blueCar', Licence_Plate: 'E0OT8L', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 2600, Vehicle_Category: 'whiteCar', Licence_Plate: '6FLCDS', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 3000, Vehicle_Category: 'whiteCar', Licence_Plate: 'URCBL5', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 3400, Vehicle_Category: 'blueCar', Licence_Plate: '87JYA7', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 3800, Vehicle_Category: 'blueCar', Licence_Plate: 'Y7T2JD', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 4200, Vehicle_Category: 'redCar', Licence_Plate: 'I8XX35', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 4600, Vehicle_Category: 'greenCar', Licence_Plate: 'PZXSCR', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 5000, Vehicle_Category: 'whiteCar', Licence_Plate: 'AMBZCK', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 5400, Vehicle_Category: 'whiteCar', Licence_Plate: 'D9C1RM', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 5800, Vehicle_Category: 'whiteCar', Licence_Plate: 'ASJDKV', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 300, Y_Coord: 0, Miles_Amount: 6200, Vehicle_Category: 'redCar', Licence_Plate: '5ZJVRE', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 6600, Vehicle_Category: 'blueCar', Licence_Plate: 'NGC4RQ', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 7000, Vehicle_Category: 'blueCar', Licence_Plate: 'GA6IAP', Speed_Amt: 2, exhaust: [  ]} , { X_Coord: 500, Y_Coord: 0, Miles_Amount: 7400, Vehicle_Category: 'greenCar', Licence_Plate: '8UF80R', Speed_Amt: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_position_a = 300;
	lane_position_b = 500;

	Detective_CarObject = 
	{
		X_Coord: roadLeftEdge + roadWidth/4,
		Y_Coord: 550,
		Miles_Amount: 0,
		Speed_Amt: 3,
		EngineRumble_Amount: 0,
		Vehicle_Category: 'detective',
		Licence_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(assailant)
	{
		fill(255);

		text("assailant found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	MoveCar();
	var b2b = CheckCarInfront( Detective_CarObject );
	if(b2b)MoveLanes(Detective_CarObject);
	FindAssailant();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < cars_data.length; i++)
	{
		cars_data[i].Miles_Amount += cars_data[i].Speed_Amt;
		cars_data[i].Y_Coord = Detective_CarObject.Y_Coord - cars_data[i].Miles_Amount + Detective_CarObject.Miles_Amount;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (Detective_CarObject.Miles_Amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Detective_CarObject.Miles_Amount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(Detective_CarObject);
	image
	(
		carImages["detective"],
		Detective_CarObject.X_Coord - carImages["detective"].width/2 + random(-Detective_CarObject.EngineRumble_Amount, Detective_CarObject.EngineRumble_Amount),
		Detective_CarObject.Y_Coord + random(-Detective_CarObject.EngineRumble_Amount, Detective_CarObject.EngineRumble_Amount)
	);

	//draw all other cars

	for(var i = 0; i < cars_data.length; i ++)
	{
		if(cars_data[i].Y_Coord < height && cars_data[i].Y_Coord > -height/2)
		{
			image(
			carImages[cars_data[i].Vehicle_Category],
			cars_data[i].X_Coord - carImages[cars_data[i].Vehicle_Category].width/2,
			cars_data[i].Y_Coord
			);
			TurnoverCar_motor(cars_data[i]);

			drawExhaust(cars_data[i]);
		}
	}

}

function TurnoverCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.X_Coord, y: car.Y_Coord + carImages[car.Vehicle_Category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Speed_Amt/3);
		if(car.Vehicle_Category != "detective")car.exhaust[i].y += (Detective_CarObject.Speed_Amt - car.Speed_Amt);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
