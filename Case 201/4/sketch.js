/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6576922
CaseNum: 201-3-71918521-6576922

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(545,100);
    vertex(525,110);
    vertex(515,145);
    vertex(530,185);
    vertex(510,205);
    vertex(565,320);
    vertex(570,375);
    vertex(525,385);
    vertex(515,470);
    vertex(545,470);
    vertex(545,410);
    vertex(590,435);
    vertex(640,475);
    vertex(730,445);
    vertex(740,390);
    vertex(855,355);
    vertex(850,325);
    vertex(810,320);
    vertex(695,370);
    vertex(630,115);
    vertex(600,75);
    vertex(545,100);
    endShape();

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
