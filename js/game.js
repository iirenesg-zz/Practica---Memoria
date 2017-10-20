function Game() {

	var pairs = 10;
	var cards = [];

	function init() {
		var tcards = [];
		
		for (var i=0; i < pairs; i++) {
			tcards.push(new Card(i));
			tcards.push(new Card(i));
		};
		
		for (var i=0; i < pairs; i++) {
			var n = getRandomInt(0, pairs-i-1);
			cards.push(tcards[n]);
			tcards.splice(n, 1);
		}
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; 
	}

	return {init};

}

function Card(v) {

	this.compose = function() {
		var el = document.createElement('span');
		el.classList.add('card');
		el.classList.add('back');
		return el;
	};
	this.value = v;
	this.element = this.compose();
	this.up = false;
	this.matched = false;

}