const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formTargetEl = event.currentTarget.elements;
  let email = ''; 
  let password = '';

  if (formTargetEl.email.value === '') {
    alert('необходимо заполнить поле Email');
    return;
  } else {
    email = formTargetEl.email.value.trim();
  };

  if (formTargetEl.password.value === '') {
    alert('необходимо заполнить поле Password');
    return;
  } else {
    password = formTargetEl.password.value.trim();
  };
   
  const formData = {
    email,
    password,
  };

  console.log(formData);

  formEl.reset();
  
}