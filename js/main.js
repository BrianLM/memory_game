var cardsInPlay =[];
var cards = [
{
	rank: "queen",
	suit: "hearts",
	image: "images/queen-of-hearts.png"
},
{	
	rank: "queen",
	suit: "diamonds",
	image: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	image: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	image: "images/king-of-diamonds.png"
}
];


function flipCard(cardID){

	console.log("User Flipped " + cards[cardID].rank);
	console.log(cards[cardID].image);
	console.log(cards[cardID].suit);
	cardsInPlay.push(cards[cardID].rank);
	if(cardsInPlay[0]===cardsInPlay[1]){
		console.log("You found a match!");

	}	
	else{
		console.log("Sorry, try again.");
}
}
flipCard(0);
flipCard(1);