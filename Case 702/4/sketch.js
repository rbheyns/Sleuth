/*

Officer: 6576922
CaseNum: 702-3-81960745-6576922

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a white car with a Number_Plate of 7EG833.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPI_Car and the cars in
CarArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle()
{
	/*
	This function should do the following: 
	 - increment SleuthPI_Car's Dist_Amount property by its Accel_Val property 
	 - add a random amount between -0.01 and 0.01 to SleuthPI_Car's EngineVibrate_Val property
	 - use the constrain function to constrain SleuthPI_Car's EngineVibrate_Val property to values between 0.09 and 1.25
	 - call the Run_Car_motor function passing SleuthPI_Car as an argument
	*/
	SleuthPI_Car.Dist_Amount += SleuthPI_Car.Accel_Val;

    SleuthPI_Car.EngineVibrate_Val += random(-0.01, 0.01);

    SleuthPI_Car.EngineVibrate_Val = constrain(SleuthPI_Car.EngineVibrate_Val, 0.09, 1.25);

    Run_Car_motor(SleuthPI_Car);
}


function Change_Lanes(vehicle)
{
	/*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosA and LanePosB to effect the change.
	 - finally you should return vehicle at the end of the function.
	 hint: You will need to modify the Coord_X property of vehicle.
	*/
	if(vehicle.Coord_X == LanePosA)
    {
        vehicle.Coord_X = LanePosB;
    }
    else
    {
        vehicle.Coord_X = LanePosA;
    }

    return vehicle;
}


function SearchCar_Infront( vehicle )
{
	/*
	This function should do the following: 
	 - determine if vehicle is in the same lane and less than 200px behind any of the cars in CarArray.
	 - do this by traversing CarArray and comparing each car's Dist_Amount property to that of vehicle.
	 - use the Number_Plate property of each car to ignore cars that match vehicle.
	 - if you find a car that matches these requirements then return the index representing the car's position in CarArray. Otherwise return false.
	*/
	for(var i = 0; i < CarArray.length; i++)
    {
        if(CarArray[i].Number_Plate != vehicle.Number_Plate)
        {
            if(CarArray[i].Coord_X == vehicle.Coord_X)
            {
                var distDiff = CarArray[i].Dist_Amount - vehicle.Dist_Amount;

                if(distDiff > 0 && distDiff < 200)
                {
                    return i;
                }
            }
        }
    }
    return false;
}


function CheckVehicle_IsParallel()
{
	/*
	This function should do the following: 
	 - traverse CarArray and determine if any of the cars are parallel with SleuthPI_Car.
	 - if a car is found to be parallel to SleuthPI_Car then return that car object.
	 - cars are considered parallel if the absolute difference between their Dist_Amount properties is less than 25 px and they have non-matching Coord_X properties	*/
	for(var i = 0; i < CarArray.length; i++)
    {
        var distDiff = abs(CarArray[i].Dist_Amount - SleuthPI_Car.Dist_Amount);

        if(distDiff < 25 && CarArray[i].Coord_X != SleuthPI_Car.Coord_X)
        {
            return CarArray[i];
        }
    }
}


function Check_Suspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to SleuthPI_Car to see if they match the Number_Plate property in the suspect description.
	 - it does this by calling CheckVehicle_IsParallel.
	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
	var carFound = CheckVehicle_IsParallel();

    if(carFound)
    {
        if(carFound.Number_Plate == "7EG833")
        {
            suspect = carFound;
        }
    }
}


function Chasing_Suspect()
{
	/*
	This function should do the following: 
	 - scale the Accel_Val property of SleuthPI_Car by a factor of 1.001.
	 - use the min function to make sure that SleuthPI_Car's Accel_Val property does not exceed 6.
	 - it should call SearchCar_Infront to detect any cars in front of SleuthPI_Car.
	 - if a positive result is returned it should check to see if the Number_Plate property of that car matches that of suspect.
	 - for a match, PullOver_Suspect should be called, otherwise call Change_Lanes.
	*/
	SleuthPI_Car.Accel_Val *= 1.001;
    SleuthPI_Car.Accel_Val = min(SleuthPI_Car.Accel_Val, 6);

    var carAheadIndex = SearchCar_Infront(SleuthPI_Car);

    if(carAheadIndex !== false)
    {
        if(CarArray[carAheadIndex].Number_Plate == suspect.Number_Plate)
        {
            PullOver_Suspect(carAheadIndex);
        }
        else
        {
            Change_Lanes(SleuthPI_Car);
        }
    }
}


function PullOver_Suspect(target_car)
{
	/*
	This function should do the following: 
	 - set the apprehended property of the car at the index of target_car to true.
	 - set the IsApprehending_Suspect property of SleuthPI_Car to true.
	 - set the Accel_Val properties of both vehicles to zero.
	*/
	CarArray[target_car].apprehended = true;

    SleuthPI_Car.IsApprehending_Suspect = true;

    CarArray[target_car].Accel_Val = 0;
    SleuthPI_Car.Accel_Val = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPI_Car;

var roadWidth;
var roadLeftEdge;
var LanePosA;
var LanePosB;
var carImages = {};
var suspect;

var CarArray = [
{ Coord_X: 300, Coord_Y: 0, Dist_Amount: -200, Car_Category: 'whiteCar', Number_Plate: '46SISH', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 200, Car_Category: 'whiteCar', Number_Plate: 'M3TEUN', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 600, Car_Category: 'blueCar', Number_Plate: 'IZMYQU', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 1000, Car_Category: 'redCar', Number_Plate: '3JEAVF', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 1400, Car_Category: 'blueCar', Number_Plate: 'O6059I', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 1800, Car_Category: 'greenCar', Number_Plate: 'X6WRK9', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 2200, Car_Category: 'whiteCar', Number_Plate: '7EG833', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 2600, Car_Category: 'whiteCar', Number_Plate: 'HGU62E', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 3000, Car_Category: 'redCar', Number_Plate: 'VUA0OW', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 3400, Car_Category: 'blueCar', Number_Plate: 'C1F450', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 3800, Car_Category: 'whiteCar', Number_Plate: 'HXJQTJ', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 4200, Car_Category: 'blueCar', Number_Plate: 'R51MOQ', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 4600, Car_Category: 'blueCar', Number_Plate: 'B6CNM4', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 5000, Car_Category: 'redCar', Number_Plate: '4596I1', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 5400, Car_Category: 'blueCar', Number_Plate: 'QDFS9Q', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 5800, Car_Category: 'whiteCar', Number_Plate: '8HHV4D', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 6200, Car_Category: 'blueCar', Number_Plate: '80RUWF', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 6600, Car_Category: 'redCar', Number_Plate: 'G9G614', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 500, Coord_Y: 0, Dist_Amount: 7000, Car_Category: 'redCar', Number_Plate: 'OQ23EO', Accel_Val: 2, exhaust: [  ]} , { Coord_X: 300, Coord_Y: 0, Dist_Amount: 7400, Car_Category: 'greenCar', Number_Plate: 'H6JT64', Accel_Val: 2, exhaust: [  ]} 
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
	LanePosA = 300;
	LanePosB = 500;

	SleuthPI_Car = 
	{
		Coord_X: roadLeftEdge + roadWidth/4,
		Coord_Y: 550,
		Dist_Amount: 0,
		Accel_Val: 3,
		EngineVibrate_Val: 0,
		Car_Category: 'detective',
		Number_Plate: '5L3UTH',
		IsApprehending_Suspect: false,
		Tailing_Suspect: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(suspect)
	{
		if(suspect.apprehended)
		{
			fill(255);

			text("suspect apprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!SleuthPI_Car.Tailing_Suspect&& !SleuthPI_Car.IsApprehending_Suspect)
	{
		Drive_Vehicle();
		var b2b = SearchCar_Infront( SleuthPI_Car );
		if(b2b)Change_Lanes(SleuthPI_Car);
		Check_Suspect();
		if(suspect)SleuthPI_Car.Tailing_Suspect = true;
	}
	else if(!SleuthPI_Car.IsApprehending_Suspect)
	{
		Chasing_Suspect();
		Drive_Vehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(suspect)
	{
		if(!suspect.apprehended)
		{
			suspect.Accel_Val = 5;
			var b2b = SearchCar_Infront( suspect );
			if(b2b)
			{
				if(b2b.Number_Plate != suspect.Number_Plate)
				{
					Change_Lanes(suspect);
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarArray.length; i++)
	{
		CarArray[i].Dist_Amount += CarArray[i].Accel_Val;
		CarArray[i].Coord_Y = SleuthPI_Car.Coord_Y - CarArray[i].Dist_Amount + SleuthPI_Car.Dist_Amount;

		if(suspect)
		{
			if(suspect.apprehended)
			{
				if(CarArray[i].Coord_X==SleuthPI_Car.Coord_X)
				{
					if(CarArray[i].Dist_Amount<SleuthPI_Car.Dist_Amount)
					{
						if(CarArray[i].Dist_Amount-SleuthPI_Car.Dist_Amount < 200)
						{
							Change_Lanes(CarArray[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthPI_Car.Dist_Amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthPI_Car.Dist_Amount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(SleuthPI_Car);
	image
	(
		carImages["detective"],
		SleuthPI_Car.Coord_X - carImages["detective"].width/2 + random(-SleuthPI_Car.EngineVibrate_Val, SleuthPI_Car.EngineVibrate_Val),
		SleuthPI_Car.Coord_Y + random(-SleuthPI_Car.EngineVibrate_Val, SleuthPI_Car.EngineVibrate_Val)
	);

	//draw all other cars

	for(var i = 0; i < CarArray.length; i ++)
	{
		if(CarArray[i].Coord_Y < height && CarArray[i].Coord_Y > -height/2)
		{
			image(
			carImages[CarArray[i].Car_Category],
			CarArray[i].Coord_X - carImages[CarArray[i].Car_Category].width/2,
			CarArray[i].Coord_Y
			);
			Run_Car_motor(CarArray[i]);

			drawExhaust(CarArray[i]);
		}
	}

}

function Run_Car_motor(car)
{

	car.exhaust.push({size: 2, x: car.Coord_X, y: car.Coord_Y + carImages[car.Car_Category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Accel_Val/3);
		if(car.Car_Category != "detective")car.exhaust[i].y += (SleuthPI_Car.Accel_Val - car.Accel_Val);
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
