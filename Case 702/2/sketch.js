/*

Officer: 6576922
CaseNum: 702-1-35427995-6576922

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of InvestigatorVehicle and the cars in
carObject_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveCar()
{
	/*
	This function should do the following: 
	 - increment InvestigatorVehicle's DistDriven property by its SpeedAmt property 
	 - add a random amount between -0.1 and 0.1 to InvestigatorVehicle's VibrateAmount property
	 - use the constrain function to constrain InvestigatorVehicle's VibrateAmount property to values between 0.06 and 1.2
	 - call the turnCar_motor function passing InvestigatorVehicle as an argument
	*/
	InvestigatorVehicle.DistDriven += InvestigatorVehicle.SpeedAmt;
	InvestigatorVehicle.VibrateAmount += random(-0.1, 0.1);
	InvestigatorVehicle.VibrateAmount = constrain(InvestigatorVehicle.VibrateAmount, 0.06, 1.2);
	turnCar_motor(InvestigatorVehicle);
}


function swapLanes(target_car)
{
	/*
	This function should do the following: 
	 - move target_car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_pos_a and lane_pos_b to effect the change.
	 - finally you should return target_car at the end of the function.
	 hint: You will need to modify the PositionX property of target_car.
	*/
	if(target_car.PositionX == lane_pos_a)
		{
			target_car.PositionX = lane_pos_b;
		}
	else
		{
			target_car.PositionX = lane_pos_a;
		}
	return target_car;
}


function checkVehicleIsInfront( target_vehicle )
{
	/*
	This function should do the following: 
	 - determine if target_vehicle is in the same lane and less than 200px behind any of the cars in carObject_list.
	 - do this by traversing carObject_list and comparing each car's DistDriven property to that of target_vehicle.
	 - if you find a car that matches these requirements then return the LicencePlate property for the car. Otherwise return false.
	*/
	for(var i = 0; i < carObject_list.length; i++)
		{
			var car = carObject_list[i];
			
			if(car.PositionX == target_vehicle.PositionX)
				{
					if(car.DistDriven > target_vehicle.DistDriven && car.DistDriven - target_vehicle.DistDriven < 200)
						{
							return car.LicencePlate;
						}
				}
		}
	return false;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var InvestigatorVehicle;

var roadWidth;
var roadLeftEdge;
var lane_pos_a;
var lane_pos_b;
var carImages = {};

var carObject_list = [
{ PositionX: 300, PositionY: 0, DistDriven: -200, CarClassification: 'redCar', LicencePlate: 'H4G6BC', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 300, PositionY: 0, DistDriven: 200, CarClassification: 'greenCar', LicencePlate: 'ZAMRIT', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 600, CarClassification: 'greenCar', LicencePlate: 'HZLX9D', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 300, PositionY: 0, DistDriven: 1000, CarClassification: 'blueCar', LicencePlate: '3YK3Q2', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 1400, CarClassification: 'whiteCar', LicencePlate: 'S235DT', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 300, PositionY: 0, DistDriven: 1800, CarClassification: 'blueCar', LicencePlate: 'QEY6LS', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 2200, CarClassification: 'redCar', LicencePlate: 'T484ZV', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 2600, CarClassification: 'whiteCar', LicencePlate: 'FECDD6', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 3000, CarClassification: 'redCar', LicencePlate: '9BZQV8', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 3400, CarClassification: 'whiteCar', LicencePlate: 'XMBB2D', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 3800, CarClassification: 'whiteCar', LicencePlate: '4O7YDS', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 4200, CarClassification: 'whiteCar', LicencePlate: 'VBF9VA', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 300, PositionY: 0, DistDriven: 4600, CarClassification: 'blueCar', LicencePlate: '4Z5IV2', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 5000, CarClassification: 'whiteCar', LicencePlate: 'P7B0ZQ', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 300, PositionY: 0, DistDriven: 5400, CarClassification: 'blueCar', LicencePlate: 'XO2436', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 300, PositionY: 0, DistDriven: 5800, CarClassification: 'blueCar', LicencePlate: 'EAH3EG', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 6200, CarClassification: 'whiteCar', LicencePlate: '38DBXB', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 500, PositionY: 0, DistDriven: 6600, CarClassification: 'blueCar', LicencePlate: 'O1T4FU', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 300, PositionY: 0, DistDriven: 7000, CarClassification: 'redCar', LicencePlate: 'P7XT3Z', SpeedAmt: 2, exhaust: [  ]} , { PositionX: 300, PositionY: 0, DistDriven: 7400, CarClassification: 'greenCar', LicencePlate: 'HN4Q9N', SpeedAmt: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_pos_a = 300;
	lane_pos_b = 500;

	InvestigatorVehicle = 
	{
		PositionX: roadLeftEdge + roadWidth/4,
		PositionY: 550,
		DistDriven: 0,
		SpeedAmt: 3,
		VibrateAmount: 0,
		CarClassification: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	};


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	driveCar();
	var b2b = checkVehicleIsInfront( InvestigatorVehicle );
	if(b2b)swapLanes(InvestigatorVehicle);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObject_list.length; i++)
	{
		carObject_list[i].DistDriven += carObject_list[i].SpeedAmt;
		carObject_list[i].PositionY = InvestigatorVehicle.PositionY - carObject_list[i].DistDriven + InvestigatorVehicle.DistDriven;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (InvestigatorVehicle.DistDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (InvestigatorVehicle.DistDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(InvestigatorVehicle);
	image
	(
		carImages["detective"],
		InvestigatorVehicle.PositionX - carImages["detective"].width/2 + random(-InvestigatorVehicle.VibrateAmount, InvestigatorVehicle.VibrateAmount),
		InvestigatorVehicle.PositionY + random(-InvestigatorVehicle.VibrateAmount, InvestigatorVehicle.VibrateAmount)
	);

	//draw all other cars

	for(var i = 0; i < carObject_list.length; i ++)
	{
		if(carObject_list[i].PositionY < height && carObject_list[i].PositionY > -height/2)
		{
			image(
			carImages[carObject_list[i].CarClassification],
			carObject_list[i].PositionX - carImages[carObject_list[i].CarClassification].width/2,
			carObject_list[i].PositionY
			);
			turnCar_motor(carObject_list[i]);

			drawExhaust(carObject_list[i]);
		}
	}

}

function turnCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.PositionX, y: car.PositionY + carImages[car.CarClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.SpeedAmt/3);
		if(car.CarClassification != "detective")car.exhaust[i].y += (InvestigatorVehicle.SpeedAmt - car.SpeedAmt);
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
