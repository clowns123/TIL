// State
let todos = [];

const container = document.querySelector('.container');
const inputTodo = container.querySelector('.input-todo');
const ulTodos = container.querySelector('.todos');
const completeAll = container.querySelector('.complete-all');
const clearCompleted = container.querySelector('.clear-completed');
const activeTodos = container.querySelector('.active-todos');
const completedTodos = container.querySelector('.completed-todos');

function render() {
  let html = '';
  todos.forEach((todo) => {
    html += `
      <li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${
      todo.complete ? 'checked' : ''
    }>
        <label for="ck-${todo.id}">${todo.content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li> 
      `;
  });
  let tempTodo = todos.filter((todo) => todo.complete !== true);
  activeTodos.textContent = tempTodo.length;
  let remainder = todos.length - tempTodo.length;
  completedTodos.textContent = remainder;
  ulTodos.innerHTML = html;
}

function maxId() {
  return todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1;
}
function addTodo(e) {
  if (e.keyCode !== 13) return;
  let id = maxId();
  let content = e.target.value;
  let tempTodo = {
    id,
    content,
    complete: false,
  };
  todos = [tempTodo, ...todos];
  e.target.value = '';
  render();
}

function delTodo(e) {
  if (!e.target.matches('i')) return;
  let id = +e.target.parentNode.id;

  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function completeCh(e) {
  let id = +e.target.parentNode.id;

  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
  );
  render();
}

function toggleAll(e) {
  let ck = e.target.checked;
  todos = todos.map((todo) => ({ ...todo, complete: ck }));
  render();
}

function CompletedClear(e) {
  if (!e.target.matches('button')) return;
  todos = todos.filter((todo) => todo.complete !== true);
  render();
}

function init() {
  inputTodo.addEventListener('keypress', addTodo);
  ulTodos.addEventListener('click', delTodo);
  ulTodos.addEventListener('change', completeCh);
  completeAll.addEventListener('change', toggleAll);
  clearCompleted.addEventListener('click', CompletedClear);
  render();
}
init();
