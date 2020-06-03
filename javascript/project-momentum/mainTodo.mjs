const mainTodo = document.querySelector('.js-mainTodo')
const mainText = mainTodo.querySelector('input')

// mainTodo
let mTodo = ''

const MAIN_TODO = mTodo

function saveMainTodo (text) {
  localStorage.setItem(MAIN_TODO, text)
}

function loadTodo () {
  const loadMainTodo = localStorage.getItem(MAIN_TODO)
  if (loadMainTodo !== '') {
    paintTodo(loadMainTodo)
  }
}

function deleteTodo (event) {
  mTodo = ''
  saveMainTodo()
  mainTodo.innerHTML = `  
  <form class="js-mainTodo">
    <div>What is your main focus for today?</div>
    <input type="text">
  </form>
  `
}

function paintTodo (text) {
  mainTodo.innerHTML = ''
  const today = document.createElement('div')
  today.innerHTML = 'TODAY'
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  const span = document.createElement('span')
  span.innerHTML = text
  const delBtn = document.createElement('button')
  delBtn.addEventListener('click', deleteTodo)
  delBtn.innerHTML = 'X'

  mainTodo.appendChild(today)
  mainTodo.appendChild(checkbox)
  mainTodo.appendChild(span)
  mainTodo.appendChild(delBtn)
}

function handleSubmit (e) {
  e.preventDefault()
  const currentValue = mainText.value
  saveMainTodo(currentValue)
  paintTodo(currentValue)
}

export function init () {
  loadTodo()
  mainTodo.addEventListener('submit', handleSubmit)
}
