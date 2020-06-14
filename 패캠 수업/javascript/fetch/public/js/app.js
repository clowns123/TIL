import { ajax, promiseAll } from './ajax.js';
import { ajax as ajaxStudy } from './xhr.js';

// DOMs
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $inputTodo = document.querySelector('.input-todo');
const $removeTodo = document.querySelector('.remove-todo');

const $completeAll = document.querySelector('.complete-all');

const $clearCompleted = document.querySelector('.clear-completed');
const $btn = document.querySelector('.btn');
const $completedTodos = $clearCompleted.querySelector('.completed-todos');
const $activeTodos = $clearCompleted.querySelector('.active-todos');
// State
let todos = [];
let navState = $nav.querySelector('.active').id;

// test Todos
const getTodos = () => {
  fetch('./todos')
  .then(function(response){
    return response.json();
  }).then(function(myjson){
    todos = myjson
    render()
  })
};
// Event Function
const getTodoId = () =>
  todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

const addTodo = (text) => {
  let todo = { id: getTodoId(), content: text, completed: false };
  fetch('./todos', {
    method : 'POST',
    body: JSON.stringify(todo),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(function(response){
    return response.json();
  }).then(function(myjson){
    todos = myjson
    render()
  })
};
const toggleTodo = (id) => {
  let completed = !todos.find((todo) => todo.id === +id).completed;
  fetch(`todos/${id}`, {
    method : 'PATCH',
    body: JSON.stringify({completed}),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(function(response){
    return response.json();
  }).then(function(myjson){
    
    todos = myjson
    render()
  })
};

const delTodo = (id) => {
  fetch(`./todos/${id}`, {    
    method : 'DELETE',
  })
  .then(function(response){
    return response.json();
  }).then(function(myjson){
    todos = myjson
    render()
  })
};

const toggleAllTodo = (checked) => {
  let completed = checked;
  fetch(`todos`, {
    method : 'PATCH',
    body: JSON.stringify({completed}),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(function(response){
    return response.json();
  }).then(function(myjson){
    todos = myjson
    render()
  })
};
const completedDelTodos = () => {
  fetch('todos/completed', {    
    method : 'DELETE',
  })
  .then(function(response){
    return response.json();
  }).then(function(myjson){
    todos = myjson
    render()
  })
};

// render
const render = () => {
  let html = '';
  let $changeTodos = [];
  // let $changeTodos = todos.filter(({ completed }) =>
  //   navState === 'complete'
  //     ? completed
  //     : navState === 'active'
  //     ? !completed
  //     : true
  // );

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
