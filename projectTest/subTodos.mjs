// DOMs
const layoutTodoList = document.getElementById('layout-todoList');
const openBtn = layoutTodoList.querySelector('button');
const model = layoutTodoList.querySelector('.model');
const modelOverlay = layoutTodoList.querySelector('.model-overlay');
const modelContent = layoutTodoList.querySelector('.model-content');
const closeBtn = modelContent.querySelector('button');

function openModel() {
  model.classList.remove('showing');
}

function closeModel() {
  model.classList.add('showing');
}
export function init() {
  openBtn.addEventListener('click', openModel);
  closeBtn.addEventListener('click', closeModel);
  modelOverlay.addEventListener('click', closeModel);
}
