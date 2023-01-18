const form = document.querySelector('.feedback-form');
const formTextarea = document.querySelector('.feedback-form textarea');
const formEmailInput = document.querySelector('.feedback-form input');

// form.addEventListener('submit');
formTextarea.addEventListener('input', onTextareaInput);
// formEmailInput.addEventListener('input');
form.addEventListener('input', e => {
  const {
    elements: { email, textarea },
  } = e.target;
  console.log(email);
});
function onTextareaInput(e) {
  const message = e.target.value;
  console.log(message);
  localStorage.setItem('feedback-msg', message);
}
