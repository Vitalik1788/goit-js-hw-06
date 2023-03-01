const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChangeName);

function onInputChangeName(event) {
  console.log(event.currentTarget.value);  
  if (event.currentTarget.value === '') {
    refs.nameLabel.textContent = 'Anonymous'
  } else {
    refs.nameLabel.textContent = event.currentTarget.value
  }
};