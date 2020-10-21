let containers = document.querySelectorAll('.general');

function cursorPlace() {
	let rhombes = document.querySelectorAll('.container__rhomb');
	let texts = document.querySelectorAll('.container__text');
 	rhombes.forEach(rhomb => rhomb.classList.add('container__rhomb-change'));
 	texts.forEach(text => text.classList.add('container__text-change'));
 };
function cursorRemove() {
	let rhombes = document.querySelectorAll('.container__rhomb');
	let texts = document.querySelectorAll('.container__text');
 	rhombes.forEach(rhomb => rhomb.classList.remove('container__rhomb-change'));
 	texts.forEach(text => text.classList.remove('container__text-change'));
}

// general.addEventListener('mouseover', cursorPlace);
containers.forEach((container) => container.addEventListener('mouseover', cursorPlace));
containers.forEach((container) => container.addEventListener('mouseout', cursorRemove));

// containers.forEach.call(function(container) {
// 	container.addEventListener('mouseover', cursorPlace);
// })