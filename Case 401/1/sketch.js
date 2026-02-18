/*

Officer: 6576922
CaseNum: 401-0-68913537-6576922

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. 
Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, 
and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. 
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- When warfarin dips below 0.65, decrement antivenom by 0.03
	- When insecticide goes above 0.72, increase antivenom by 0.03
	- When warfarin dips below 0.69, try decreasing methylene by 0.02
	- If insecticide goes above 0.62, increase methylene by 0.01
	- When botulinium goes above 0.32, reduce calcium_gluconate by 0.02
	- If warfarin goes above 0.55, increase calcium_gluconate by 0.01


Your conditional statements should consider the following poisons:

	- insecticide
	- botulinium
	- warfarin


Your conditional statements should modify the following antidotes:

	- antivenom
	- methylene
	- calcium_gluconate


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var insecticide;
var botulinium;
var warfarin;


//Declare the antidote variables
var antivenom;
var methylene;
var calcium_gluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	botulinium = 0.5;
	warfarin = 0.5;
	antivenom = 0.5;
	methylene = 0.5;
	calcium_gluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	if(warfarin <= 0.65)
		{
			antivenom -= 0.03;
		}
	
	if(insecticide >= 0.72)
		{
			antivenom = antivenom + 0.03;
		}
	
	if(warfarin <= 0.69)
		{
			methylene = methylene - 0.02;
		}
	
	if(insecticide >= 0.62)
		{
			methylene = methylene + 0.01;
		}

	if(botulinium >= 0.32)
		{
			calcium_gluconate = calcium_gluconate - 0.02;
		}
	
	if(warfarin >= 0.55)
		{
			calcium_gluconate = calcium_gluconate + 0.01;
		}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0],insecticide);
	botulinium = nextValue(graphs[1],botulinium);
	warfarin = nextValue(graphs[2],warfarin);


	antivenom = constrain(antivenom, 0, 1);
	methylene = constrain(methylene, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);


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
	text('insecticide: ' + nf(insecticide,1,2), 20,20);
	fill(colors[1]);
	text('botulinium: ' + nf(botulinium,1,2), 20,40);
	fill(colors[2]);
	text('warfarin: ' + nf(warfarin,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(methylene,200,'methylene');
	drawBar(calcium_gluconate,350,'calcium_gluconate');


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
