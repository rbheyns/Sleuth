/*

Officer: 6576922
CaseNum: 401-1-61669012-6576922

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. 
The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. 
To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. 
You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If ricin goes above 0.51, try decreasing calciumChloride by 0.03
	- If warfarin dips below 0.46 and snake_venom dips below 0.65, increment calciumChloride by 0.02
	- If warfarin goes above 0.67 or ricin goes above 0.47, try decreasing CalciumGluconate by 0.04
	- When snake_venom dips below 0.34, try increasing CalciumGluconate by 0.04
	- If arsenic dips below 0.25, decrement protamine by 0.04
	- When snake_venom goes above 0.29, increase protamine by 0.04
	- When warfarin dips below 0.28 or snake_venom goes above 0.73, decrease methylene by 0.05
	- When arsenic goes above 0.35 and ricin goes above 0.51, increment methylene by 0.03


Your conditional statements should consider the following poisons:

	- ricin
	- arsenic
	- warfarin
	- snake_venom


Your conditional statements should modify the following antidotes:

	- calciumChloride
	- CalciumGluconate
	- protamine
	- methylene


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var ricin;
var arsenic;
var warfarin;
var snake_venom;


//Declare the antidote variables
var calciumChloride;
var CalciumGluconate;
var protamine;
var methylene;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	arsenic = 0.5;
	warfarin = 0.5;
	snake_venom = 0.5;
	calciumChloride = 0.5;
	CalciumGluconate = 0.5;
	protamine = 0.5;
	methylene = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	if(ricin >= 0.51)
		{
			calciumChloride = calciumChloride - 0.03;
		}
	
	if(warfarin <= 0.46 && snake_venom <= 0.65)
		{
			calciumChloride += 0.02;
		}
	
	if(warfarin >= 0.67 || ricin >= 0.47)
		{
			CalciumGluconate = CalciumGluconate - 0.04;
		}
	
	if(snake_venom <= 0.34)
		{
			CalciumGluconate = CalciumGluconate + 0.04;
		}
	
	if(arsenic <= 0.25)
		{
			protamine -= 0.04;
		}

	if(snake_venom >= 0.29)
		{
			protamine = protamine + 0.04;
		}
	
	if(warfarin <= 0.28 || snake_venom >= 0.73)
		{
			methylene = methylene - 0.05;
		}
	
	if(arsenic >= 0.35 && ricin >= 0.51)
		{
			methylene += 0.03;
		}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	arsenic = nextValue(graphs[1],arsenic);
	warfarin = nextValue(graphs[2],warfarin);
	snake_venom = nextValue(graphs[3],snake_venom);


	calciumChloride = constrain(calciumChloride, 0, 1);
	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	protamine = constrain(protamine, 0, 1);
	methylene = constrain(methylene, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('warfarin: ' + nf(warfarin,1,2), 20,60);
	fill(colors[3]);
	text('snake_venom: ' + nf(snake_venom,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(calciumChloride,50,'calciumChloride');
	drawBar(CalciumGluconate,200,'CalciumGluconate');
	drawBar(protamine,350,'protamine');
	drawBar(methylene,500,'methylene');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
