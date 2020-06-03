// html load
const toDoform = document.querySelector('.js-toDoForm')
const toDoinput = toDoform.querySelector('input')
const toDoList = document.querySelector('.js-toDoList')

// const
const TODOS_LS = 'toDos'

// array
let toDos = []

// todo local save
function saveToDos () {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

// paint todo(li)
function paintToDo (text) {
  const li = document.createElement('li')
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  const delBtn = document.createElement('button')
  const span = document.createElement('span')
  const newId = toDos.length + 1
  delBtn.innerHTML = 'X'
  delBtn.addEventListener('click', deleteTodo)
  span.innerHTML = text + ' '
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = newId
  toDoList.appendChild(li)
  const toDoObject = {
    text: text,
    id: newId
  }
  toDos.push(toDoObject)
  saveToDos()
}

// enter save
function handleSubmit (event) {
  event.preventDefault()
  const currentValue = toDoinput.value
  paintToDo(currentValue)
  toDoinput.value = ''
}

// load local
function loadToDos () {
  const loadedToDos = localStorage.getItem(TODOS_LS)
  if (loadedToDos !== null) {
    const parseedToDos = JSON.parse(loadedToDos)
    parseedToDos.forEach(todo => paintToDo(todo.text))
  }
}

// delete todo
function deleteTodo (event) {
  const btn = event.target
  const li = btn.parentNode
  toDoList.removeChild(li)
  const removeTodo = toDos.filter(todo => todo.id !== parseInt(li.id))
  toDos = removeTodo
  saveToDos()
}

export function init () {
  loadToDos()
  toDoform.addEventListener('submit', handleSubmit)
}
