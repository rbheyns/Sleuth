/*

Officer: 6576922
CaseNum: 701-1-16985845-6576922

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They had red hair. 
I'll never forget their pale eyes. By the look of them they were younger than 71. It was so scary! 
I remember they had a chinese lettering tattoo. 
They definately weigh less than 102 Kg. I'm not quite sure. The person I saw was male. Can I go home now Sir? 

*/

var usualSuspects = [
	{ 
		"name": "KITTY ASHELY",
		"tattoo": "anchor",
		"gender": "female",
		"eyes": "blue",
		"age": 42,
		"weight": 70
	},
	{ 
		"name": "PIERRE MAUBERT",
		"tattoo": "ox",
		"gender": "female",
		"eyes": "grey",
		"age": 43,
		"weight": 80
	},
	{ 
		"name": "MALINDA SILVEIRA",
		"tattoo": "chinese lettering",
		"gender": "male",
		"eyes": "pale",
		"age": 63,
		"weight": 92
	},
	{ 
		"name": "LINETTE MONKSFORD",
		"tattoo": "bull",
		"gender": "male",
		"eyes": "brown",
		"age": 45,
		"weight": 73
	},
	{ 
		"name": "LAKESHA WARMAN",
		"tattoo": "jellyfish",
		"gender": "female",
		"eyes": "green",
		"age": 34,
		"weight": 71
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
function testSuspect(suspectObj)
{
	if(suspectObj.tattoo == "chinese lettering" &&
	  suspectObj.gender == "male" &&
	  suspectObj.eyes == "pale" &&
	  suspectObj.age < 71 &&
	  suspectObj.weight < 102)
		{
			return true;
		}
	return false;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    if(testSuspect(usualSuspects[i]) == true){
      fill(255,0,0);
      text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
