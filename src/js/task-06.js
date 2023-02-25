'use strict';



const inputRef = document.querySelector('#validation-input');
const validInputRef = inputRef.getAttribute("data-length");

inputRef.addEventListener('blur', onFocusBlur);

function onFocusBlur(event) {
  if (event.target.value.length == validInputRef) 
  {
	inputRef.classList.add('valid');
	inputRef.classList.remove('invalid');
  } else {
	inputRef.classList.add('invalid');
	inputRef.classList.remove('valid');
  };
};
