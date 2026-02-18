/*

Officer: 6576922
CaseNum: 401-3-10011577-6576922

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. 
Just a brief whiff of one can induce a series of deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If polonium goes above 0.4, deadlyNightshade dips below 0.5, and also insecticide goes above 0.74, reduce Calcium_Gluconate by 0.01
	- If hemlock goes above 0.7 or sarin dips below 0.27, whilst at the same time, methanol goes above 0.58 or novichok goes above 0.64, increment Calcium_Gluconate by 0.04
	- If sarin goes above 0.75, hemlock goes above 0.38, polonium dips below 0.37, and also insecticide dips below 0.25, try decreasing chalk by 0.04
	- When methanol dips below 0.68 or deadlyNightshade goes above 0.72, whilst at the same time, mercury dips below 0.37 and novichok goes above 0.25, raise chalk by 0.03
	- When insecticide dips below 0.27, polonium dips below 0.67, and also sarin dips below 0.66, decrease ethanol by 0.01
	- If hemlock dips below 0.5 or deadlyNightshade dips below 0.73, or on the other hand, novichok dips below 0.35 and mercury goes above 0.66, try increasing ethanol by 0.03
	- When sarin goes above 0.26, insecticide goes above 0.52, polonium dips below 0.51, and also hemlock goes above 0.39, decrease paracetamol by 0.01
	- If deadlyNightshade goes above 0.33 and mercury dips below 0.73, or on the other hand, novichok dips below 0.71 or methanol goes above 0.75, increase paracetamol by 0.02
	- If mercury goes above 0.52 or hemlock goes above 0.31, whilst at the same time, sarin dips below 0.54, decrease methylene by 0.05
	- When insecticide goes above 0.37 and deadlyNightshade dips below 0.71, or on the other hand, polonium dips below 0.41 or methanol dips below 0.55, try increasing methylene by 0.03


Your conditional statements should consider the following poisons:

	- novichok
	- deadlyNightshade
	- insecticide
	- polonium
	- hemlock
	- mercury
	- methanol
	- sarin


Your conditional statements should modify the following antidotes:

	- Calcium_Gluconate
	- chalk
	- ethanol
	- paracetamol
	- methylene


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
var novichok;
var deadlyNightshade;
var insecticide;
var polonium;
var hemlock;
var mercury;
var methanol;
var sarin;


//Declare the antidote variables
var Calcium_Gluconate;
var chalk;
var ethanol;
var paracetamol;
var methylene;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	novichok = 0.5;
	deadlyNightshade = 0.5;
	insecticide = 0.5;
	polonium = 0.5;
	hemlock = 0.5;
	mercury = 0.5;
	methanol = 0.5;
	sarin = 0.5;
	Calcium_Gluconate = 0.5;
	chalk = 0.5;
	ethanol = 0.5;
	paracetamol = 0.5;
	methylene = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
	if(polonium > 0.4 && deadlyNightshade < 0.5 && insecticide > 0.74)
		{
			Calcium_Gluconate -= 0.01;
		}
	
	if((hemlock > 0.7 || sarin < 0.27) && (methanol > 0.58 || novichok > 0.64))
		{
			Calcium_Gluconate += 0.04;
		}
	
	if(sarin > 0.75 && hemlock > 0.38 && polonium < 0.37 && insecticide < 0.25)
		{
			chalk -= 0.04;
		}
	
	if((methanol < 0.68 || deadlyNightshade > 0.72) && (mercury < 0.37 && novichok > 0.25))
		{
			chalk += 0.03;
		}
	
	if(insecticide < 0.27 && polonium < 0.67 && sarin < 0.66)
		{
			ethanol -= 0.01;
		}
	
	if((hemlock < 0.5 || deadlyNightshade < 0.73) || (novichok < 0.35 && mercury > 0.66))
		{
			ethanol += 0.03;
		}
	
	if(sarin > 0.26 && insecticide > 0.52 && polonium < 0.51 && hemlock > 0.39)
		{
			paracetamol -= 0.01;
		}
	
	if((deadlyNightshade > 0.33 && mercury < 0.73) || (novichok < 0.71 || methanol > 0.75))
		{
			paracetamol += 0.02;
		}
	
	if((mercury > 0.52 || hemlock > 0.31) && sarin < 0.54)
		{
			methylene -= 0.05;
		}
	
	if((insecticide > 0.37 && deadlyNightshade < 0.71) || (polonium < 0.41 || methanol < 0.55))
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

	novichok = nextValue(graphs[0],novichok);
	deadlyNightshade = nextValue(graphs[1],deadlyNightshade);
	insecticide = nextValue(graphs[2],insecticide);
	polonium = nextValue(graphs[3],polonium);
	hemlock = nextValue(graphs[4],hemlock);
	mercury = nextValue(graphs[5],mercury);
	methanol = nextValue(graphs[6],methanol);
	sarin = nextValue(graphs[7],sarin);


	Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);
	chalk = constrain(chalk, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('novichok: ' + nf(novichok,1,2), 20,20);
	fill(colors[1]);
	text('deadlyNightshade: ' + nf(deadlyNightshade,1,2), 20,40);
	fill(colors[2]);
	text('insecticide: ' + nf(insecticide,1,2), 20,60);
	fill(colors[3]);
	text('polonium: ' + nf(polonium,1,2), 20,80);
	fill(colors[4]);
	text('hemlock: ' + nf(hemlock,1,2), 20,100);
	fill(colors[5]);
	text('mercury: ' + nf(mercury,1,2), 20,120);
	fill(colors[6]);
	text('methanol: ' + nf(methanol,1,2), 20,140);
	fill(colors[7]);
	text('sarin: ' + nf(sarin,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(Calcium_Gluconate,50,'Calcium_Gluconate');
	drawBar(chalk,200,'chalk');
	drawBar(ethanol,350,'ethanol');
	drawBar(paracetamol,500,'paracetamol');
	drawBar(methylene,650,'methylene');


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
