'use strict';


const inputFzRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputFzRef.addEventListener('input', event => {
	textRef.style.fontSize = `${event.target.value}px`
});

