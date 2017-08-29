var cardsInPlay =[];
var cards = ["queen","queen","king","king"];
var cardOne= cards[0];
cardsInPlay.push(cardOne);
var cardTwo =cards[1];
console.log("User Flipped " + cardOne);
cardsInPlay.push(cardTwo);
console.log("User Flipped " + cardTwo);
if(cardsInPlay[0]===cardsInPlay[1]){
	alert("You found a match!");

}
else{
	alert("Sorry, try again.")
}