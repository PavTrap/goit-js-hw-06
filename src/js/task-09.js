'user strict';

const colorChngRef = document.querySelector('.change-color');
colorChngRef.addEventListener('click', bgColorChng);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function bgColorChng(){
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector('.color').textContent = color;
}



