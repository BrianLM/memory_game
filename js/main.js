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
	if(this.getAttribute("src")==="images/back.png"){
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

	var scoreboard = document.getElementById("scoreboard");
	if(scoreboard.childNodes.length === 0){
		var wins  = document.createElement('p');
		var losses  = document.createElement('p');
		var winValue  = document.createElement('p');
		var lossValue  = document.createElement('p');
		wins.innerHTML = "Wins:";
		losses.innerHTML = "Losses: ";
		winValue.setAttribute('data-Count',0);
		winValue.id = "winValue";
		lossValue.setAttribute('data-Count',0);
		lossValue.id = "lossValue";
		winValue.innerHTML = '0';
		lossValue.innerHTML = '0';
		if(win){
			incrementScore(winValue);
		}
		else{
			incrementScore(lossValue);
		}
		scoreboard.appendChild(wins);
		scoreboard.appendChild(losses);
		scoreboard.appendChild(winValue);
		scoreboard.appendChild(lossValue);
	}
	else{
		if(win){
			var winCount = document.getElementById("winValue");
			incrementScore(winCount);
		}
		else{
			var lossCount = document.getElementById("lossValue");
			incrementScore(lossCount);
		}
	}
}
function incrementScore(element){
	var currentScore = parseInt(element.getAttribute("data-Count"));
	currentScore+=1;
	element.innerHTML = currentScore;
	element.setAttribute('data-Count',currentScore);
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