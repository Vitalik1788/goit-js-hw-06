const inputEl = document.querySelector('input');

console.log(inputEl);

inputEl.addEventListener('blur', onInputLengthValue);
const inputValue = inputEl.getAttribute('data-length');

console.log(inputValue);


function onInputLengthValue(event) {
  if (event.currentTarget.value.length < inputValue || event.currentTarget.value.length > inputValue) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
}
}; 


