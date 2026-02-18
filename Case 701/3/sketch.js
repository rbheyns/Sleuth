/*

Officer: 6576922
CaseNum: 701-2-88698036-6576922

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from nicole oorin. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They seemed to be between the age of 32 and 50 years old. 
I'm not quite sure. Their expression seemed sad. I'll never forget their brown eyes. I distinctly remember that they were wearing a fur vest, 
I remember thinking that was quite unusual. The person I saw was female. It's hard to say. They wore very thin glasses. 
They brobably weigh between 64 and 88 kg. They were fairly tall, I think between a height of 170 and 181 cm. That's all I know officer. 

*/

var usualSuspects = [
	{ 
		"name": "JAUNITA PORTOS",
		"glasses": "red",
		"expression": "menacing",
		"eyes": "green",
		"item": "dotted necktie",
		"height": 169,
		"weight": 77,
		"age": 49
	},
	{ 
		"name": "LINETTE PHINNEY",
		"glasses": "thin metallic",
		"expression": "nerveous",
		"eyes": "blue",
		"item": "net weave shirt",
		"height": 169,
		"weight": 84,
		"age": 39
	},
	{ 
		"name": "LARRAINE MYRLE",
		"glasses": "blue",
		"expression": "nerveous",
		"eyes": "grey",
		"item": "red necktie",
		"height": 193,
		"weight": 77,
		"age": 39
	},
	{ 
		"name": "MALINDA NIEMELA",
		"glasses": "black",
		"expression": "menacing",
		"eyes": "pale",
		"item": "pair of leather trousers",
		"height": 185,
		"weight": 74,
		"age": 42
	},
	{ 
		"name": "RANDEE THAXTER",
		"glasses": "cheap plastic",
		"expression": "angry",
		"eyes": "grey",
		"item": "pink scarf",
		"height": 171,
		"weight": 85,
		"age": 21
	},
	{ 
		"name": "JENIFFER WARMAN",
		"glasses": "very thick",
		"expression": "blank",
		"eyes": "blue",
		"item": "orange socks",
		"height": 188,
		"weight": 71,
		"age": 21
	},
	{ 
		"name": "JULIANA CROME",
		"glasses": "very thin",
		"expression": "sad",
		"eyes": "brown",
		"item": "fur vest",
		"height": 176,
		"weight": 76,
		"age": 48
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function matchProperties(suspectObj)
{
	let matches = 0;

	if(suspectObj.glasses == "very thin") matches++;

	if(suspectObj.expression == "sad") matches++;

	if(suspectObj.eyes == "brown") matches++;

	if(suspectObj.item == "fur vest") matches++;

	if(suspectObj.height > 170 && suspectObj.height < 181) matches++;

	if(suspectObj.weight > 64 && suspectObj.weight < 88) matches++;

	if(suspectObj.age > 32 && suspectObj.age < 50) matches++;

	return matches;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    let matchingProperties = matchProperties(usualSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + usualSuspects[i].name, 60, 60 + i * 20);
  }
}
