/*

Officer: 6576922
CaseNum: 701-3-19126603-6576922

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from nelson phinney.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A getSuspectMatch function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - function getSuspectMatch(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They brobably weigh between 62 and 100 kg. They had red hair. 
Their expression seemed depressed. It was so scary! The person I saw was male. They seemed to be between the age of 25 and 72 years old. 
I distinctly remember that they were wearing a dotted necktie, I remember thinking that was quite unusual. I'm not quite sure. 
I remember they had a anchor tattoo. They wore very thin glasses. They were fairly tall, I think between a height of 162 and 197 cm. It's hard to say. 
That's all I know officer. 

*/

var usualSuspects = [
	{ 
		"name": "LESLEY WARMAN",
		"item": "net weave shirt",
		"glasses": "red",
		"gender": "female",
		"hair": "no",
		"weight": 74,
		"age": 42,
		"height": 181
	},
	{ 
		"name": "MALINDA SILVEIRA",
		"item": "red necktie",
		"glasses": "very thick",
		"gender": "male",
		"hair": "ginger",
		"weight": 74,
		"age": 46,
		"height": 167
	},
	{ 
		"name": "JENIFFER GOODBURY",
		"item": "pair of leather trousers",
		"glasses": "cheap plastic",
		"gender": "male",
		"hair": "thick black",
		"weight": 70,
		"age": 40,
		"height": 179
	},
	{ 
		"name": "RANDEE MOHWAWK",
		"item": "dotted necktie",
		"glasses": "very thin",
		"gender": "male",
		"hair": "red",
		"weight": 90,
		"age": 38,
		"height": 174
	},
	{ 
		"name": "JAUNITA DAVISWOOD",
		"item": "fur vest",
		"glasses": "white",
		"gender": "female",
		"hair": "long white",
		"weight": 69,
		"age": 32,
		"height": 181
	},
	{ 
		"name": "NICOLE DURANTS",
		"item": "pink scarf",
		"glasses": "black",
		"gender": "male",
		"hair": "dark brown",
		"weight": 72,
		"age": 51,
		"height": 177
	},
	{ 
		"name": "JESUS JOYER",
		"item": "purple hat",
		"glasses": "light tan",
		"gender": "female",
		"hair": "short black",
		"weight": 75,
		"age": 43,
		"height": 163
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

// Declare both your functions here
function testSuspect(suspectObj){
	let matches = 0;
	if(suspectObj.item == "dotted necktie") matches++;
	if(suspectObj.glasses == "very thin") matches++;
	if(suspectObj.gender == "male") matches++;
	if(suspectObj.hair == "red") matches++;
	if(suspectObj.weight >= 62 && suspectObj.weight <= 100) matches++;
	if(suspectObj.age >= 25 && suspectObj.age <= 72) matches++;
	if(suspectObj.height >= 162 && suspectObj.height <= 197) matches++;
	return matches;
}

function getSuspectMatch(){
	let bestScore = 0;
	let bestSuspect = {};
	for (var i = 0; i < usualSuspects.length; i++)
		{
			let score = testSuspect(usualSuspects[i]);
			if(score > bestScore){
				bestScore = score;
				bestSuspect = usualSuspects[i];
			}
		}
	return bestSuspect;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(getSuspectMatch().name + " is guilty!", 60, 80);
}
