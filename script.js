let containers = document.querySelectorAll('.container__text');
let playingField = document.createElement('div');
playingField.classList.add('field__wrap');
let menuScreen = document.getElementById('menu__screen');
let menu = document.getElementById('menu');
let startButton = document.getElementById('start__button');

let chooseLevel = (event) => {
	containers.forEach((container) => container.classList.remove('rhomb'));
	event.currentTarget.classList.add('rhomb');
};
containers.forEach((container) => container.addEventListener('click', chooseLevel));

function startGame() {
	let level = document.querySelector('.rhomb').getAttribute('id');
	let currentNumberOfCards = card => card;
	let numberOfCards = currentNumberOfCards(level);
	menuScreen.remove();
	menu.appendChild(playingField);
	let cards = () => {
		function addCards() {
			let newCard = document.createElement('div');
			newCard.classList.add('field__card');
			let invertCard = document.createElement('img');
			invertCard.classList.add('card__back');
			invertCard.src = 'img/inverted-card.png';
			let facialCard = document.createElement('img');
			facialCard.classList.add('card__front');
			facialCard.src = 'img/game-over.png';
			playingField.appendChild(newCard);
			newCard.appendChild(invertCard);
			newCard.appendChild(facialCard);
		}
		addCards();
	};
	function addField(difficultyLevel) {
		switch (difficultyLevel) {
			case 'simple': 
				for (let i = 0; i < 3; i++) {
					cards(level);
				}
				numberOfCards = 3;
				break;
			case 'middle':
				for (let i = 0; i < 6; i++) {
					cards(level);
				}
				numberOfCards = 6;
				break;
			case 'complex':
				for (let i = 0; i < 9; i++) {
					cards(level);
				}
				numberOfCards = 9;
				break;
		};
		let addedCards = document.querySelectorAll('.field__card');
		let random = Math.floor(Math.random() * numberOfCards);
		for (i = 0; i < numberOfCards; i++) {
			if (i === random) addedCards[i].lastElementChild.src='img/card-bag.png';
		};
		addedCards.forEach((element) => element.addEventListener('click', function(){
			element.classList.toggle('active');
			addedCards.forEach((item) => item.addEventListener('click', showMenu));
		}));
	};
	addField(level);
};
startButton.addEventListener('click', startGame);

let showMenu = function() {
	menu.appendChild(menuScreen);
	playingField.innerHTML = '';
	playingField.remove();
};