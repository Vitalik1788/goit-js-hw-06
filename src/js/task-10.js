const refs = {
  input: document.querySelector('input'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
  boxForCreateEl: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', onGetInputValue);

refs.createBtnEl.addEventListener('click', () => {
  onCreateBoxes(Number(refs.input.value));
});

refs.destroyBtnEl.addEventListener('click', onDestroyBoxes);

let inputValue = 0;

function onGetInputValue(event) {
  inputValue = event.currentTarget.value;
  return inputValue;
};

function onCreateBoxes(amount) {
  let divArray = [];
  let basicSizeEl = 30;
    for (let i = 0; i < amount; i += 1) {
      basicSizeEl += 10;
      const newDivEl = document.createElement('div');
      newDivEl.style.height = `${basicSizeEl}px`;
      newDivEl.style.width = `${basicSizeEl}px`;
      newDivEl.style.backgroundColor = getRandomHexColor();
      divArray.push(newDivEl);
      refs.boxForCreateEl.appendChild(newDivEl);
    }
    return refs.boxForCreateEl.append(...divArray);
};


function onDestroyBoxes(event) {
  refs.input.value = 1;
  refs.boxForCreateEl.innerHTML = '';
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
