const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.button.addEventListener('click', onButtonClickChangeColor);

function onButtonClickChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = document.body.style.backgroundColor;
  
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
