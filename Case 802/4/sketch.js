/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 6576922
CaseNum: 802-3-77359726-6576922

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 2 and 92.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cutPoint object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called deckCut and call it from setup.
- This should search for card matching cutPoint inside cards.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the cards array in the deck_upto_cut array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deck_upto_cut so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var cards = [ { cardSuit: 'Spades', value: 'A'} , { cardSuit: 'Spades', value: '2'} , { cardSuit: 'Spades', value: '3'} , { cardSuit: 'Spades', value: '4'} , { cardSuit: 'Spades', value: '5'} , { cardSuit: 'Spades', value: '6'} , { cardSuit: 'Spades', value: '7'} , { cardSuit: 'Spades', value: '8'} , { cardSuit: 'Spades', value: '9'} , { cardSuit: 'Spades', value: '10'} , { cardSuit: 'Spades', value: 'J'} , { cardSuit: 'Spades', value: 'Q'} , { cardSuit: 'Spades', value: 'K'} , { cardSuit: 'Clubs', value: 'A'} , { cardSuit: 'Clubs', value: '2'} , { cardSuit: 'Clubs', value: '3'} , { cardSuit: 'Clubs', value: '4'} , { cardSuit: 'Clubs', value: '5'} , { cardSuit: 'Clubs', value: '6'} , { cardSuit: 'Clubs', value: '7'} , { cardSuit: 'Clubs', value: '8'} , { cardSuit: 'Clubs', value: '9'} , { cardSuit: 'Clubs', value: '10'} , { cardSuit: 'Clubs', value: 'J'} , { cardSuit: 'Clubs', value: 'Q'} , { cardSuit: 'Clubs', value: 'K'} , { cardSuit: 'Hearts', value: 'A'} , { cardSuit: 'Hearts', value: '2'} , { cardSuit: 'Hearts', value: '3'} , { cardSuit: 'Hearts', value: '4'} , { cardSuit: 'Hearts', value: '5'} , { cardSuit: 'Hearts', value: '6'} , { cardSuit: 'Hearts', value: '7'} , { cardSuit: 'Hearts', value: '8'} , { cardSuit: 'Hearts', value: '9'} , { cardSuit: 'Hearts', value: '10'} , { cardSuit: 'Hearts', value: 'J'} , { cardSuit: 'Hearts', value: 'Q'} , { cardSuit: 'Hearts', value: 'K'} , { cardSuit: 'Diamonds', value: 'A'} , { cardSuit: 'Diamonds', value: '2'} , { cardSuit: 'Diamonds', value: '3'} , { cardSuit: 'Diamonds', value: '4'} , { cardSuit: 'Diamonds', value: '5'} , { cardSuit: 'Diamonds', value: '6'} , { cardSuit: 'Diamonds', value: '7'} , { cardSuit: 'Diamonds', value: '8'} , { cardSuit: 'Diamonds', value: '9'} , { cardSuit: 'Diamonds', value: '10'} , { cardSuit: 'Diamonds', value: 'J'} , { cardSuit: 'Diamonds', value: 'Q'} , { cardSuit: 'Diamonds', value: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var cutPoint = { card_suit: 'Hearts', no: 'Q'} ;
var deck_upto_cut = [];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	var seed = shuffleSeed();
	shuffleDeck(seed);
	//call your deckCut function here
	deckCut();
}

//write your deckCut function here
function deckCut()
{
	for(var j = 0; j < cards.length; j++)
		{
			if(cards[j].cardSuit == cutPoint.card_suit && cards[j].value == cutPoint.no)
				{
					deck_upto_cut = cards.splice(j);
					break;
				}
		}
	var reversed = [];

	for (var i = deck_upto_cut.length - 1; i >= 0; i--)
	{
		reversed.push(deck_upto_cut[i]);
	}

	deck_upto_cut = reversed;
}
//write your shuffleSeed() function here.
function shuffleSeed()
{
	var index = [];
	for(var i = 0; i < 52; i++)
		{
			index.push(round(random(2,92)));
		}
	return index;
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < cards.length; j++)
	   {
		  var tempCard = cards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          cards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if(i < deck_upto_cut.length)
		{
			drawCard(deck_upto_cut[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.value == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
