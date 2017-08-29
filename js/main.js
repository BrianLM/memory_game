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

function flipCard(){
	var cardID = this.getAttribute("data-id");
	console.log("User Flipped " + cards[cardID].rank);
	console.log(cards[cardID].image);
	console.log(cards[cardID].suit);
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src',cards[cardID].image);
	if(cardsInPlay[0]===cardsInPlay[1]){
		evaluateGuess(true);
	}	
	else{
		if(cardsInPlay.length > 1){
			evaluateGuess(false);
		}
	}
}
function evaluateGuess(win) {
	var playAgain = document.createElement('p');
	document.getElementById("play-controls").appendChild(playAgain);
	
	if(win){
		playAgain.innerHTML =  "Congratulations, would you like to play again?";
	}
	else{
		playAgain.innerHTML = "Sorry, no match. Would you like to play again?"	;		
	}
	var yesButton = document.createElement("button");
	yesButton.innerHTML = 'Yes';
	yesButton.addEventListener('click', resetBoard);
	document.getElementById("play-controls").appendChild(yesButton);

	var noButton = document.createElement("button");
	noButton.innerHTML = 'No';
	noButton.addEventListener('click', destroyBoard);
	document.getElementById("play-controls").appendChild(noButton);

}
function createBoard(){
	var gameBoard = document.getElementById("game-board");

	for(i=0; i < cards.length;i++){
		var newListItem = document.createElement('img');
		newListItem.addEventListener('click', flipCard);
		newListItem.setAttribute('src',"images/back.png");
		newListItem.setAttribute('data-id',i);
		gameBoard.appendChild(newListItem);
	}
	var scoreBoard = document.createElement("table");
	var scoreRow = scoreBoard.insertRow(0);
	// add more rows
	gameBoard.appendChild(scoreBoard);


}
function resetBoard() {
	var gameBoard = document.getElementById("game-board").childNodes;
	for(i=0; i < gameBoard.length;i++){
		gameBoard[i].setAttribute('src',"images/back.png");
	}
	cardsInPlay =[];
	var gameOver = document.getElementById("play-controls");
	while (gameOver.firstChild) {
		gameOver.removeChild(gameOver.firstChild);
	}
}
function destroyBoard() {
	var gameBoard = document.getElementById("game-board");
	while (gameBoard.firstChild) {
		gameBoard.removeChild(gameBoard.firstChild);
	}
	var gameOver = document.getElementById("play-controls");
	while (gameOver.firstChild) {
		gameOver.removeChild(gameOver.firstChild);
	}
}
createBoard();