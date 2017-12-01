function Game(config) {
 
    var pairs = 10;
    var matches = 0;
    var cards = [];
    var container = config.container;
    var scoreDisplay = config.scoreDisplay;
    var minuteDisplay = config.minuteDisplay;
    var secondDisplay = config.secondDisplay;
    var messageBox = config.messageBox;
    var messageDisplay = config.messageDisplay;
    var messageBtn = config.messageBtn;
    var timeInterval;
    var stats = {
        score: 0,
        initTime: new Date().getTime(),
        flippedCards: []
    };

    function updateTime() {
        timeInterval = window.setInterval(function(){
            var time = new Date().getTime();
            var amt = (time - stats.initTime) / 1000;
            var minutes = Math.floor(amt / 60);
            var seconds = Math.floor(amt - (minutes * 60));

            seconds < 10 ? secondDisplay.innerText = '0' + seconds : secondDisplay.innerText = seconds;
            minutes < 10 ? minuteDisplay.innerText = '0' + minutes : minuteDisplay.innerText = minutes;

        }, 1000);
    };
 
    function init() {
        messageBox.classList.add('hidden');
        var tcards = [];
         
        for (var i=0; i < pairs*2; i++) {
            var card;
            i < 10 ? card = new Card(i, i) : card = new Card(i-10, i);
            card.element.addEventListener('click', function(){updateGame(this)});
            tcards.push(card);
        };
         
        for (var i=0; i < pairs*2; i++) {
            var n = getRandomInt(0, (pairs*2)-i);
            cards.push(tcards[n]);
            container.appendChild(tcards[n].element);
            tcards.splice(n, 1);
        }

        updateTime();
    }
 
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }

    function updateGame(el) {
        if(stats.flippedCards.length < 2) {
            var card = cards.filter(function(c){return Number(c.id) == Number(el.id)})[0];
            stats.flippedCards.push(card);
            card.toggleCard();

            if(stats.flippedCards.length == 2) {
                setTimeout(checkPair, 1000);
            }
        }
    }

    function updateScore() {
        scoreDisplay.innerText = stats.score;
    }

    function checkPair() {
        var card1 = stats.flippedCards[0];
        var card2 = stats.flippedCards[1];
        if(card1.value == card2.value) {
            matches++;
            stats.score += 100;
            card1.hideCard();
            card2.hideCard();
            updateScore();
            checkGame();
        } else {
            if(card1.seen || card2.seen) {
                stats.score -= 50;
                updateScore();
            }
            card1.seen = true;
            card1.toggleCard();
            card2.seen = true;
            card2.toggleCard();
        }
        stats.flippedCards = [];
    }

    function checkGame() {
        if(matches == pairs) {
            window.clearInterval(timeInterval);
            messageDisplay.innerText = 'You won!';
            messageBtn.innerText = 'Play again';
            messageBox.classList.remove('hidden');
        }
    }
 
    return {
        init: init
    };
 
}
 
function Card(v, id) {
 
    var self = this;
    self.value = v;
    self.id = id;
 
    self.compose = function() {
        var el = document.createElement('div');
        el.classList.add('card-wrapper');
        el.setAttribute('id', self.id);
        var card = document.createElement('div');
        card.classList.add('card-3D');
        var front = document.createElement('span');
        front.setAttribute('class', 'card front card' + self.value);
        var back = document.createElement('span');
        back.setAttribute('class', 'card back');

        card.appendChild(back);
        card.appendChild(front);
        el.appendChild(card);
        return el;
    };

    self.toggleCard = function() {
        var el = self.element.getElementsByClassName('card-3D')[0];
        el.classList.toggle('flipped');
    }

    self.hideCard = function() {
        self.element.classList.add('hidden');
    }
 
    self.element = self.compose();
    self.seen = false;
}