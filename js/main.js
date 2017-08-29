var cardsInPlay =[];
var cards = ["queen","queen","king","king"];


function flipCard(cardID){

	console.log("User Flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	if(cardsInPlay[0]===cardsInPlay[1]){
		console.log("You found a match!");

	}	
	else{
		console.log("Sorry, try again.");
}
}
flipCard(0);
flipCard(1);