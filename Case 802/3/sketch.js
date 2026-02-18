/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 6576922
CaseNum: 802-2-81207848-6576922

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! 
I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in hand_to_win from the deck and store it in the hand array.

- Write a function called winning_hand_set and call it from setup.
- The function should take each card in hand_to_win and seacrh for a match in playingCards.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 6 and 69.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var playingCards = [ { s: 'Spades', n: 'A'} , { s: 'Spades', n: '2'} , { s: 'Spades', n: '3'} , { s: 'Spades', n: '4'} , { s: 'Spades', n: '5'} , { s: 'Spades', n: '6'} , { s: 'Spades', n: '7'} , { s: 'Spades', n: '8'} , { s: 'Spades', n: '9'} , { s: 'Spades', n: '10'} , { s: 'Spades', n: 'J'} , { s: 'Spades', n: 'Q'} , { s: 'Spades', n: 'K'} , { s: 'Clubs', n: 'A'} , { s: 'Clubs', n: '2'} , { s: 'Clubs', n: '3'} , { s: 'Clubs', n: '4'} , { s: 'Clubs', n: '5'} , { s: 'Clubs', n: '6'} , { s: 'Clubs', n: '7'} , { s: 'Clubs', n: '8'} , { s: 'Clubs', n: '9'} , { s: 'Clubs', n: '10'} , { s: 'Clubs', n: 'J'} , { s: 'Clubs', n: 'Q'} , { s: 'Clubs', n: 'K'} , { s: 'Hearts', n: 'A'} , { s: 'Hearts', n: '2'} , { s: 'Hearts', n: '3'} , { s: 'Hearts', n: '4'} , { s: 'Hearts', n: '5'} , { s: 'Hearts', n: '6'} , { s: 'Hearts', n: '7'} , { s: 'Hearts', n: '8'} , { s: 'Hearts', n: '9'} , { s: 'Hearts', n: '10'} , { s: 'Hearts', n: 'J'} , { s: 'Hearts', n: 'Q'} , { s: 'Hearts', n: 'K'} , { s: 'Diamonds', n: 'A'} , { s: 'Diamonds', n: '2'} , { s: 'Diamonds', n: '3'} , { s: 'Diamonds', n: '4'} , { s: 'Diamonds', n: '5'} , { s: 'Diamonds', n: '6'} , { s: 'Diamonds', n: '7'} , { s: 'Diamonds', n: '8'} , { s: 'Diamonds', n: '9'} , { s: 'Diamonds', n: '10'} , { s: 'Diamonds', n: 'J'} , { s: 'Diamonds', n: 'Q'} , { s: 'Diamonds', n: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var hand_to_win = [ { suit: 'Clubs', v: 'J'} , { suit: 'Hearts', v: 'K'} , { suit: 'Hearts', v: '10'} , { suit: 'Diamonds', v: 'J'} , { suit: 'Hearts', v: 'Q'}  ];
var hand =[];

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
	var seed = 	shuffleSeed();
	shuffleDeck(seed);
	//call your winning_hand_set function here
	winning_hand_set();
}

//write your winning_hand_set function here
function winning_hand_set()
{
	for(var i = 0; i < hand_to_win.length; i++)
		{
			for(var j = 0; j < playingCards.length; j++)
				{
					if(playingCards[j].s == hand_to_win[i].suit && playingCards[j].n == hand_to_win[i].v)
					{
						hand.push(playingCards[j]);
						break;
					}
				}
		}
}
//write your shuffleSeed() function here.
function shuffleSeed()
{
	var index = [];
	for(var i = 0; i < 52; i++)
		{
			index.push(round(random(6,69)));
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
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
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
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
			if (card.n == values[j] && card.s == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
