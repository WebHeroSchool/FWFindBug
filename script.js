function cursorPlaceOnLevel() {
	let rhombes = document.querySelectorAll('.container__rhomb');
	let texts = document.querySelectorAll('.container__text');
 	rhombes.forEach(rhomb => rhomb.classList.add('container__rhomb-change'));
 	texts.forEach(text => text.classList.add('container__text-change'));
 };
function cursorRemoveOnLevel() {
	let rhombes = document.querySelectorAll('.container__rhomb');
	let texts = document.querySelectorAll('.container__text');
 	rhombes.forEach(rhomb => rhomb.classList.remove('container__rhomb-change'));
 	texts.forEach(text => text.classList.remove('container__text-change'));
};

let containers = document.querySelectorAll('.general');
containers.forEach((container) => container.addEventListener('mouseover', cursorPlaceOnLevel));
containers.forEach((container) => container.addEventListener('mouseout', cursorRemoveOnLevel));

let button = document.querySelector('.start__button');
button.addEventListener('mouseover', event => event.target.classList.add('start__button-change'));
button.addEventListener('mouseout', event => event.target.classList.remove('start__button-change'));

// general.addEventListener('mouseover', cursorPlace);
// containers.forEach.call(function(container) {
// 	container.addEventListener('mouseover', cursorPlace);
// })

