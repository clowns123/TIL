// DOMs
const layoutGreetings = document.getElementById('layout-greetings');
const timeIs = layoutGreetings.querySelector('.greetings-time');
const greetingsUserIs = layoutGreetings.querySelector('.greetings-userIs');
const userName = layoutGreetings.querySelector('.user-name');
const userIs = layoutGreetings.querySelector('.userIs');

// val
let user = { name: '' };
const USER_LS = 'user';
// function
// greeting time
const greetingTimeIs = () => {
  const date = new Date();
  const time = date.getHours();
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

// paintingUser
const userPaint = (name) => {
  greetingsUserIs.classList.remove('showing');
  userName.classList.add('showing');
  userIs.textContent = name;
  // event
  greetingsUserIs.querySelector('i').onclick = (e) => {
    saveName('');
    loadUser();
  };
};

function saveName(name) {
  user.name = name;
  localStorage.setItem(USER_LS, JSON.stringify(user));
}

const askUser = () => {
  greetingsUserIs.classList.add('showing');
  userName.classList.remove('showing');
  userName.onkeypress = (e) => {
    if (e.keyCode !== 13) return;
    saveName(e.target.value);
    userPaint(e.target.value);
    userName.value = '';
  };
};
const loadUser = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if (JSON.parse(currentUser).name === '' || currentUser === null) {
    // user is not
    askUser();
  } else {
    // user is
    userPaint(JSON.parse(currentUser).name);
  }
};

// eslint-disable-next-line import/prefer-default-export
export function init() {
  paintGreeting();
  loadUser();
}
