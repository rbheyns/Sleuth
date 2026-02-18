/*

Officer: 6576922
CaseNum: 502-2-18067413-6576922

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var archiveA = {
	component0: [ "fence", "hurry", "radiate"], 
	component1: [ "meddle", "tug", "sail"], 
	component2: [ "sail", "protect", "charge"], 
	component3: [ "meddle", "Hopper", "play"], 
	component4: [ "rejoice", "meddle", "sneeze"], 
	component5: [ "succeed", "radiate", "a donation"], 
	component6: [ "Edsger", "rejoice", "succeed"], 
	component7: [ "$200,000", "syndicate", "plug"], 
	component8: [ "charge", "play", "Governor Zuckerberg"], 
	component9: [ "meddle", "start", "bake"]
};

var archiveB = {
	component0: [ "consider", "campaign", "hit"], 
	component1: [ "fence", "meddle", "bake"], 
	component2: [ "rejoice", "mend", "radiate"], 
	component3: [ "fence", "protect", "consider"], 
	component4: [ "start", "bake", "charge"], 
	component5: [ "sneeze", "play", "charge"], 
	component6: [ "ALGOL", "rejoice", "tug"], 
	component7: [ "protect", "meddle", "protect"], 
	component8: [ "clip", "meddle", "tug"], 
	component9: [ "smile", "tug", "sneeze"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the corre2ct values from the data structures above
  redactedText = "Dear "+archiveA.component8[2]+", I am sure that something could be worked out in terms of "+archiveA.component5[2]+" for your "+archiveB.component0[1]+". How does "+archiveA.component7[0]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+archiveA.component3[1]+" needs to be out of the picture. She’s caused enough trouble. Get the "+archiveA.component7[1]+" to organise the "+archiveB.component0[2]+" but I’d prefer it you don’t mention me or "+archiveB.component6[0]+". I owe them enough favours already. Your old friend, "+archiveA.component6[0]+"";

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
