/*

Officer: 6576922
CaseNum: 401-2-82485282-6576922

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. 
This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When insecticide goes above 0.33, whilst at the same time, chlorine dips below 0.59 or sarin dips below 0.57, try decreasing sodium_bicarbonate by 0.04
	- If strychnine goes above 0.49 or ricin goes above 0.6, try increasing sodium_bicarbonate by 0.02
	- When either insecticide dips below 0.66, chlorine goes above 0.74, or perhaps ricin dips below 0.38, reduce antibodies by 0.03
	- When deadly_nightshade goes above 0.53 or strychnine goes above 0.71, raise antibodies by 0.04
	- If ricin dips below 0.53 and deadly_nightshade dips below 0.37, decrease HydrochloricAcid by 0.05
	- When chlorine dips below 0.35, insecticide goes above 0.42, and also sarin dips below 0.48, raise HydrochloricAcid by 0.02
	- When sarin goes above 0.67 or strychnine dips below 0.28, try decreasing calcium_gluconate by 0.04
	- If either ricin goes above 0.64, insecticide goes above 0.7, or perhaps deadly_nightshade dips below 0.68, raise calcium_gluconate by 0.02


Your conditional statements should consider the following poisons:

	- ricin
	- sarin
	- chlorine
	- strychnine
	- insecticide
	- deadly_nightshade


Your conditional statements should modify the following antidotes:

	- sodium_bicarbonate
	- antibodies
	- HydrochloricAcid
	- calcium_gluconate


- There are many ways to complete this task but you should only use the following commands:

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
var sarin;
var chlorine;
var strychnine;
var insecticide;
var deadly_nightshade;


//Declare the antidote variables
var sodium_bicarbonate;
var antibodies;
var HydrochloricAcid;
var calcium_gluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	sarin = 0.5;
	chlorine = 0.5;
	strychnine = 0.5;
	insecticide = 0.5;
	deadly_nightshade = 0.5;
	sodium_bicarbonate = 0.5;
	antibodies = 0.5;
	HydrochloricAcid = 0.5;
	calcium_gluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
	if(insecticide > 0.33 && (chlorine < 0.59 || sarin < 0.57))
		{
			sodium_bicarbonate -= 0.04;
		}
	if(strychnine > 0.49 || ricin > 0.6)
		{
			sodium_bicarbonate += 0.02;
		}
	if(insecticide < 0.66 || chlorine > 0.74 || ricin < 0.38)
		{
			antibodies -= 0.03;
		}
	if(deadly_nightshade > 0.53 || strychnine > 0.71)
		{
			antibodies += 0.04;
		}
	if(ricin < 0.53 && deadly_nightshade < 0.37)
		{
			HydrochloricAcid -= 0.05;
		}
	if(chlorine < 0.35 && insecticide > 0.42 && sarin < 0.48)
		{
			HydrochloricAcid += 0.02;
		}
	if(sarin > 0.67 || strychnine < 0.28)
		{
			calcium_gluconate -= 0.04;
		}
	if(ricin > 0.64 || insecticide > 0.7 || deadly_nightshade < 0.68)
		{
			calcium_gluconate += 0.02;
		}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	sarin = nextValue(graphs[1],sarin);
	chlorine = nextValue(graphs[2],chlorine);
	strychnine = nextValue(graphs[3],strychnine);
	insecticide = nextValue(graphs[4],insecticide);
	deadly_nightshade = nextValue(graphs[5],deadly_nightshade);


	sodium_bicarbonate = constrain(sodium_bicarbonate, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	HydrochloricAcid = constrain(HydrochloricAcid, 0, 1);
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
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('chlorine: ' + nf(chlorine,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);
	fill(colors[4]);
	text('insecticide: ' + nf(insecticide,1,2), 20,100);
	fill(colors[5]);
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(sodium_bicarbonate,50,'sodium_bicarbonate');
	drawBar(antibodies,200,'antibodies');
	drawBar(HydrochloricAcid,350,'HydrochloricAcid');
	drawBar(calcium_gluconate,500,'calcium_gluconate');


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
