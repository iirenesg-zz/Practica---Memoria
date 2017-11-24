var config = {
	container: document.getElementById('game-wrapper'),
	scoreDisplay: document.getElementById('score-display'),
	minuteDisplay: document.getElementById('minute-display'),
	secondDisplay: document.getElementById('second-display'),
	messageBox: document.getElementById('message-box'),
	messageDisplay: document.getElementById('message-display'),
	messageBtn: document.getElementById('message-btn')
}

var resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', newGame);

var startBtn = document.getElementById('message-btn');
startBtn.addEventListener('click', newGame);

function newGame() {
	config.container.innerHTML = '';
	config.scoreDisplay.innerText = 0;

	var game = new Game(config);
	game.init();
}
