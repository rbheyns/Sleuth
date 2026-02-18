/*

Officer: 6576922
CaseNum: 502-3-17914475-6576922

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var A_paper = [
{
	redactedWord_0: {bit_0: "consider", bit_1: "sail", bit_2: "Governor Zuckerberg", bit_3: "smile"}, 
	redactedWord_1: {bit_0: "protect", bit_1: "stuff", bit_2: "protect", bit_3: "start"}, 
	redactedWord_2: {bit_0: "protect", bit_1: "smile", bit_2: "hurry", bit_3: "radiate"}
},
{
	redactedWord_0: {bit_0: "stuff", bit_1: "plug", bit_2: "play", bit_3: "consider"}, 
	redactedWord_1: {bit_0: "meddle", bit_1: "start", bit_2: "succeed", bit_3: "protect"}, 
	redactedWord_2: {bit_0: "succeed", bit_1: "hurry", bit_2: "tug", bit_3: "hurry"}
},
{
	redactedWord_0: {bit_0: "radiate", bit_1: "stuff", bit_2: "sail", bit_3: "start"}, 
	redactedWord_1: {bit_0: "COBOL", bit_1: "sneeze", bit_2: "play", bit_3: "consider"}, 
	redactedWord_2: {bit_0: "plug", bit_1: "radiate", bit_2: "rejoice", bit_3: "consider"}
},
{
	redactedWord_0: {bit_0: "hurry", bit_1: "charge", bit_2: "stuff", bit_3: "bake"}, 
	redactedWord_1: {bit_0: "meddle", bit_1: "ALGOL", bit_2: "radiate", bit_3: "tug"}, 
	redactedWord_2: {bit_0: "stuff", bit_1: "mend", bit_2: "plug", bit_3: "consider"}
},
{
	redactedWord_0: {bit_0: "bake", bit_1: "radiate", bit_2: "sail", bit_3: "radiate"}, 
	redactedWord_1: {bit_0: "charge", bit_1: "sail", bit_2: "start", bit_3: "succeed"}, 
	redactedWord_2: {bit_0: "bake", bit_1: "radiate", bit_2: "radiate", bit_3: "donation"}
}];

var B_paper = [
{
	redactedWord_0: {bit_0: "hurry", bit_1: "plug", bit_2: "protect", bit_3: "plug"}, 
	redactedWord_1: {bit_0: "tug", bit_1: "radiate", bit_2: "bake", bit_3: "bake"}, 
	redactedWord_2: {bit_0: "start", bit_1: "plug", bit_2: "protect", bit_3: "smile"}
},
{
	redactedWord_0: {bit_0: "plug", bit_1: "succeed", bit_2: "syndicate", bit_3: "play"}, 
	redactedWord_1: {bit_0: "smile", bit_1: "plug", bit_2: "rejoice", bit_3: "plug"}, 
	redactedWord_2: {bit_0: "tug", bit_1: "succeed", bit_2: "tug", bit_3: "plug"}
},
{
	redactedWord_0: {bit_0: "hurry", bit_1: "smile", bit_2: "bake", bit_3: "clip"}, 
	redactedWord_1: {bit_0: "you", bit_1: "consider", bit_2: "tug", bit_3: "smile"}, 
	redactedWord_2: {bit_0: "smile", bit_1: "fence", bit_2: "smile", bit_3: "hurry"}
},
{
	redactedWord_0: {bit_0: "$200,000", bit_1: "sail", bit_2: "sail", bit_3: "ALGOL fish wholesalers"}, 
	redactedWord_1: {bit_0: "mend", bit_1: "radiate", bit_2: "succeed", bit_3: "stuff"}, 
	redactedWord_2: {bit_0: "plug", bit_1: "Edsger", bit_2: "meddle", bit_3: "radiate"}
},
{
	redactedWord_0: {bit_0: "protect", bit_1: "smile", bit_2: "stuff", bit_3: "consider"}, 
	redactedWord_1: {bit_0: "play", bit_1: "sail", bit_2: "bake", bit_3: "bake"}, 
	redactedWord_2: {bit_0: "charge", bit_1: "development", bit_2: "consider", bit_3: "rejoice"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest "+B_paper[3].redactedWord_2.bit_1+", I have just received your very generous "+A_paper[4].redactedWord_2.bit_3+" of "+B_paper[3].redactedWord_0.bit_0+". Thank you. This will be invaluable to our campaign. "+A_paper[3].redactedWord_1.bit_1+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+B_paper[2].redactedWord_1.bit_0+" or "+B_paper[3].redactedWord_0.bit_3+" to the "+B_paper[1].redactedWord_0.bit_2+". Your new "+B_paper[4].redactedWord_2.bit_1+" at the "+A_paper[2].redactedWord_1.bit_0+" can now proceed without impediment. Yours sincerely, "+A_paper[0].redactedWord_0.bit_2+"";

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
