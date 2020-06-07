// DOMs
const layoutGreetings = document.getElementById('layout-greetings');
const timeIs = layoutGreetings.querySelector('.time-is');
const userName = document.getElementById('user-name');
// function
// greeting time
const getTime = () => {
  let clock = new Date();
  return clock.getHours();
};

const greetingTimeIs = () => {
  let time = getTime();
  let greetingText = '';
  if (time >= 7 && time <= 12) {
    greetingText = 'morning';
  } else if (time >= 13 && time <= 22) {
    greetingText = 'afternoon';
  } else {
    greetingText = 'nigth';
  }
  return greetingText;
};

const paintGreeting = () => {
  timeIs.textContent = `${greetingTimeIs()}`;
};
// end
// loadName
const paintName = (name) => {};
const loadName = () => {
  const name = localStorage.getItem('name');
  if (name === null) return;
  paintName(name.text);
};

// saveInput
const saveName = (value) => {
  const name = { name: value };
  console.log(JSON.stringify(name));

  localStorage.setItem('name', JSON.stringify(name));
};

// Event
// Input
userName.onkeypress = (e) => {
  if (e.keyCode !== 13) return;
  saveName(e.target.value);
};

// eslint-disable-next-line import/prefer-default-export
export function init() {
  paintGreeting();
  loadName();
}
