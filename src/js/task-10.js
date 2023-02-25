'use strict';

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};

const inputRef = document.querySelector('#controls>input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');


function createBoxes(amount) {
	for (let i = 0; i < amount; i += 1){
		const createDiv = document.createElement('div');
		createDiv.style.width = `${30 + i * 10}px`;
		createDiv.style.height = `${30 + i * 10}px`;
		createDiv.style.background = getRandomHexColor();
		document.querySelector('#boxes').append(createDiv);
	}
}
function destroyBoxes() {
	boxesRef.innerHTML = '';
}



btnCreateRef.addEventListener('click', () => {
	createBoxes(inputRef.value);
})

btnDestroyRef.addEventListener('click', () => {
	destroyBoxes(inputRef.value);
})



 








