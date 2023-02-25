'use strict';




const inputRef = document.querySelector('#name-input');
const nameOutputRef =  document.querySelector('#name-output');


inputRef.addEventListener('input', onINputChange);



function onINputChange(event) {
	if (inputRef.value === ''){
		nameOutputRef.textContent = 'Anonymous';
	} else {
	nameOutputRef.textContent = event.currentTarget.value;
	};
};
