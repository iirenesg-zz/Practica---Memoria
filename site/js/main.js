var container = document.getElementById('game-wrapper');
var scoreDisplay = document.getElementById('score-display');
var resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', newGame);

function newGame() {
	container.innerHTML = '';
	scoreDisplay.innerText = 0;

	var game = new Game(container, scoreDisplay);
	game.init();
}

newGame();