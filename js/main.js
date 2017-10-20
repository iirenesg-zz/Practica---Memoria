var cards = document.getElementsByClassName('card');

for (var i = cards.length - 1; i >= 0; i--) {
	console.log(cards[i]);
	cards[i].addEventListener('click', function(){hide(this)});
};

function hide(el) {
	el.classList.add('hidden');
}