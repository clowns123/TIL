import { promiseAll } from './ajax.js';

// DOMs
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $inputTodo = document.querySelector('.input-todo');

const $completeAll = document.querySelector('.complete-all');

const $clearCompleted = document.querySelector('.clear-completed');
const $btn = document.querySelector('.btn');
const $completedTodos = $clearCompleted.querySelector('.completed-todos');
const $activeTodos = $clearCompleted.querySelector('.active-todos');
// State
let todos = [];
let navState = $nav.querySelector('.active').id;

// test Todos
const getTodos = async () => {
  todos = await promiseAll('GET', '/todos').then((_todos) => _todos);
  render();
};
// Event Function
const getTodoId = () =>
  todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

const addTodo = async (text) => {
  let todo = { id: getTodoId(), content: text, completed: false };
  todos = await promiseAll('POST', '/todos', todo).then((_todos) => _todos);
  render();
};
const toggleTodo = async (id) => {
  let completed = !todos.find((todo) => todo.id === +id).completed;
  todos = await promiseAll('PATCH', `./todos/${id}`, { completed }).then(
    (_todos) => _todos
  );
  render();
};

const delTodo = async (id) => {
  todos = await promiseAll('DELETE', `./todos/${id}`).then((_todos) => _todos);
  render();
};

const toggleAllTodo = async (checked) => {
  let completed = checked;
  todos = await promiseAll('PATCH', `./todos`, { completed }).then(
    (_todos) => _todos
  );
  render();
};
const completedDelTodos = async () => {
  todos = await promiseAll('DELETE', `./todos/completed`).then(
    (_todos) => _todos
  );
  render();
};

// render
const render = () => {
  let html = '';
  let $changeTodos = [];

  if (navState === 'all') {
    $changeTodos = todos;
  } else if (navState === 'active') {
    $changeTodos = todos.filter((todo) => !todo.completed);
  } else if (navState === 'completed') {
    $changeTodos = todos.filter((todo) => todo.completed);
  }

  $changeTodos.map(({ id, content, completed }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox" ${
      completed ? 'checked' : ''
    }>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>
      `;
  });

  $completedTodos.textContent = todos.filter(
    (todo) => todo.completed !== false
  ).length;
  $activeTodos.textContent = todos.filter(
    (todo) => todo.completed === false
  ).length;

  $todos.innerHTML = html;
};

// Event
const changeavState = (id) => {
  [...$nav.children].forEach(($navItem) => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });
  navState = id;
};
$nav.onclick = ({ target }) => {
  // if (!target.matches('.nav li')) return;
  // let $active = $nav.querySelector('.active');
  // if ($active === target) return;
  // $active.classList.remove('active');
  // target.classList.add('active');
  // render();
  if (!target.matches('.nav > li:not(.active)')) return;
  changeavState(target.id);
  render();
};

$inputTodo.onkeypress = (e) => {
  if (e.keyCode !== 13) return;
  addTodo(e.target.value);
  e.target.value = '';
  render();
};

$todos.onchange = (e) => {
  toggleTodo(e.target.parentNode.id);
  render();
};

$todos.onclick = (e) => {
  if (!e.target.matches('i')) return;
  delTodo(e.target.parentNode.id);
  render();
};

$completeAll.onchange = (e) => {
  toggleAllTodo(e.target.checked);
  render();
};

$btn.onclick = (e) => {
  completedDelTodos();
  render();
};

// start
window.onload = getTodos;
