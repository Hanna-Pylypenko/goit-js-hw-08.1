import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const textarea = document.querySelector('textarea', throttle(onTextareaInput, 500));
const email = document.querySelector('input', throttle(onEmailInput, 500));
const key = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', onFeedbackSubmit);

textarea.addEventListener('input', onTextareaInput);
email.addEventListener('input', onEmailInput);

function onEmailInput(evt) {
  const email = evt.currentTarget.value;
  formData.email = email;
  localStorage.setItem(key, formData.email);
}
function onTextareaInput(evt) {
  const message = evt.currentTarget.value;
  formData.message = message;
  localStorage.setItem(key, formData.message);
}

function onFeedbackSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(key);
  console.log(formData);
}
