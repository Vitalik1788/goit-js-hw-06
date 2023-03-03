const refs = {
  input: document.querySelector('input'),
  span: document.querySelector('span'),
};

refs.input.addEventListener('input', onTextSizeChange);

function onTextSizeChange (event) {
  console.log(event.currentTarget.value);
  refs.span.style.fontSize = event.currentTarget.value + 'px';
}