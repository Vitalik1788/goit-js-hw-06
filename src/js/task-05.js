const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChangeName);

function onInputChangeName(event) {
  if (event.currentTarget.value.trim() === '') {
    refs.nameLabel.textContent = 'Anonymous'
  } else {
    refs.nameLabel.textContent = event.currentTarget.value.trim();
  }
};

