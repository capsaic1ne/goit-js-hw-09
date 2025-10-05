const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const email = form.elements.email;
const message = form.elements.message;

const key = 'feedback-form-state';

if (localStorage.getItem(key)) {
  email.value = JSON.parse(localStorage.getItem(key)).email;
  message.value = JSON.parse(localStorage.getItem(key)).message;
  formData.email = JSON.parse(localStorage.getItem(key)).email;
  formData.message = JSON.parse(localStorage.getItem(key)).message;
}

form.addEventListener('input', handleInput);

function handleInput(event) {
  //   if (event.target.name === 'email') {
  //     formData.email = event.target.value;
  //     console.log(formData);
  //     }
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(key, JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (
    event.target.elements.email.value === '' ||
    event.target.elements.message.value === ''
  ) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(key);
  formData.email = '';
  formData.message = '';
  form.reset();
}
