let mainTodo = document.querySelector('.js-mainTodo');
let mainText = mainTodo.querySelector('input');

// mainTodo
let mTodo = {};

const MAIN_TODO = 'mTodo';

function saveMainTodo() {
  localStorage.setItem('mTodo', JSON.stringify(mTodo));
}

function deleteTodo() {
  mTodo = {};
  saveMainTodo();
  mainTodo.innerHTML = `  
  <form class="js-mainTodo">
  <div>What is your main focus for today?</div>
  <input type="text">
  </form>
  `;
  mainTodo = document.querySelector('.js-mainTodo');
  mainText = mainTodo.querySelector('input');
}

function paintTodo(text) {
  mainTodo.innerHTML = '';
  const today = document.createElement('div');
  today.textContent = 'TODAY';
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  const span = document.createElement('span');
  span.textContent = text;
  const delBtn = document.createElement('button');
  delBtn.addEventListener('click', deleteTodo);
  delBtn.textContent = 'X';

  mainTodo.appendChild(today);
  mainTodo.appendChild(checkbox);
  mainTodo.appendChild(span);
  mainTodo.appendChild(delBtn);
  mTodo = text;
  saveMainTodo();
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = mainText.value;
  mTodo.text = currentValue;
  saveMainTodo();
  paintTodo(currentValue);
}

function loadTodo() {
  const loadMainTodo = localStorage.getItem(MAIN_TODO);
  if (!loadMainTodo) {
    paintTodo(JSON.parse(loadMainTodo));
  }
}

// eslint-disable-next-line import/prefer-default-export
export function init() {
  loadTodo();
  mainTodo.addEventListener('submit', handleSubmit);
}
