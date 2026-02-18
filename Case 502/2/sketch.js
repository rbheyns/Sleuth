/*

Officer: 6576922
CaseNum: 502-1-30264615-6576922

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var ListingA = [
	{RedactedWord0: "radiate", RedactedWord1: "fence", RedactedWord2: "radiate"}, 
	{RedactedWord0: "capital", RedactedWord1: "radiate", RedactedWord2: "bake"}, 
	{RedactedWord0: "radiate", RedactedWord1: "rejoice", RedactedWord2: "COBOL"}, 
	{RedactedWord0: "bake", RedactedWord1: "plug", RedactedWord2: "protect"}, 
	{RedactedWord0: "mend", RedactedWord1: "tug", RedactedWord2: "fence"}, 
	{RedactedWord0: "stuff", RedactedWord1: "fence", RedactedWord2: "succeed"}, 
	{RedactedWord0: "sail", RedactedWord1: "syndicate", RedactedWord2: "fence"}, 
	{RedactedWord0: "play", RedactedWord1: "tug", RedactedWord2: "play"}, 
	{RedactedWord0: "start", RedactedWord1: "rejoice", RedactedWord2: "hurry"}, 
	{RedactedWord0: "hurry", RedactedWord1: "Edsger", RedactedWord2: "fence"}
];

var ListingB = [
	{RedactedWord0: "hurry", RedactedWord1: "radiate", RedactedWord2: "radiate"}, 
	{RedactedWord0: "clip", RedactedWord1: "clip", RedactedWord2: "rejoice"}, 
	{RedactedWord0: "charge", RedactedWord1: "a donation", RedactedWord2: "delicate"}, 
	{RedactedWord0: "start", RedactedWord1: "Hopper’s", RedactedWord2: "start"}, 
	{RedactedWord0: "she has", RedactedWord1: "mend", RedactedWord2: "clip"}, 
	{RedactedWord0: "rejoice", RedactedWord1: "plug", RedactedWord2: "sneeze"}, 
	{RedactedWord0: "play", RedactedWord1: "hurry", RedactedWord2: "romantic"}, 
	{RedactedWord0: "radiate", RedactedWord1: "sneeze", RedactedWord2: "smile"}, 
	{RedactedWord0: "mend", RedactedWord1: "hurry", RedactedWord2: "sneeze"}, 
	{RedactedWord0: "mend", RedactedWord1: "sneeze", RedactedWord2: "Governor Zuckerberg"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest "+ListingA[9].RedactedWord1+", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+ListingB[3].RedactedWord1+" intervention. I suspect that "+ListingB[4].RedactedWord0+" a "+ListingB[6].RedactedWord2+" interest at the "+ListingA[2].RedactedWord2+". I and the "+ListingA[6].RedactedWord1+" appreciate your many contributions over the years. However, this is a most "+ListingB[2].RedactedWord2+" matter which would require significant "+ListingA[1].RedactedWord0+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+ListingB[2].RedactedWord1+" to my forthcoming campaign would help. Yours sincerely, "+ListingB[9].RedactedWord2+"";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
