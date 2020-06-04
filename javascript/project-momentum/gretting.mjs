/* eslint-disable no-use-before-define */
const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_ON = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreetion(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerHTML = `Hello ${text} <button>X</button>`;
  greeting.querySelector('button').addEventListener('click', function () {
    input.value = '';
    greeting.classList.remove(SHOWING_ON);
    saveName('');
    askForName();
  });
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreetion(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener('submit', handleSubmit);
}

function localName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null || currentUser === '') {
    // user is not
    askForName();
  } else {
    // user is
    paintGreetion(currentUser);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function init() {
  localName();
}
