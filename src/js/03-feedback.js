import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formTextarea = document.querySelector('.feedback-form textarea');
const formEmailInput = document.querySelector('.feedback-form input');
const FEEDBACK_DATA = 'feedback-form-state';

const feedbackObject = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  feedbackObject[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_DATA, JSON.stringify(feedbackObject));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_DATA);
  console.log(feedbackObject);
}

function fillInput() {
  const savedData = localStorage.getItem(FEEDBACK_DATA);
  const parsedData = JSON.parse(savedData);
  if (savedData) {
    console.log(parsedData);
    formEmailInput.value = parsedData.email;
    formTextarea.value = parsedData.message;
  }
}
fillInput();
