# 1. HTML 생성

```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];
function render() {
  let html = '';
  todos.forEach((todo) => {
    html += `\t<li id="${todo.id}">
        <lable><input type="checkbox" ${todo.completed ? 'checked' : ''}>${
      todo.content
    }</lable>
    </li>\n`;
  });

  return html;
}
console.log(render(todos));
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
```

# 2. 특정 프로퍼티 값 추출

```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  return todos.map((todo) => todo[key]);
}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]
```



# 3. 프로퍼티 정렬

```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  return todos
    .slice()
    .sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}

console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/
```

# 4. 새로운 요소 추가

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function addTodo(newTodo) {
  //   todos = [newTodo].concat(todos);
  todos = [newTodo, ...todos];
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
/*
  [
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]
*/

```

# 5. 특정 요소 삭제

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];


function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
}


removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
```



# 6. 특정 요소의 프로퍼티 값 반전

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function toggleCompletedById(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo 
  );
    
  /*
  todos = todos.map((todo) =>
    todo.id === id ? Object.assign({}, todo, {completed: !todo.completed})
  );
  */
}
toggleCompletedById(2);

console.log(todos);
/*
      [
        { id: 3, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: false },
        { id: 1, content: 'Javascript', completed: false }
      ]
*/

```



# 7. 모든 요소의 completed 프로퍼티 값을 true로 설정

```js
let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  function toggleCompletedAll() {
    todos = todos.map(todo => ({...todo, completed:true}));
    // todos = todos.map((todo) => Object.assign({}, todo, { completed: true }));
}
  
toggleCompletedAll();
  
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/
```

# 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

```js
  let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  return todos.filter((todo) => todo.completed === true).length;
  // return todos.reduce((acc, cur) => (cur.completed === true ? 1 : 0) + acc, 0);
}
console.log(countCompletedTodos()); // 1
```

# 9. id 프로퍼티의 값 중에서 최대값 구하기

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  return Math.max(...todos.map((todo) => todo.id), 0);
  // return todos.reduce((acc, cur) => (cur.id > acc ? cur.id : acc), 0);
}

console.log(getMaxId()); // 3
```

