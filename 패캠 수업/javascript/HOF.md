# 6. 특정 요소의 프로퍼티 값 반전

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  const change =  todos.findIndex(todo => todo.id === id);
  Object.assign(todos, todos, todos[change].completed = !todos[change].completed);
}
/*
  function toggleCompletedById(id) {
    const changeIndex =  todos.findIndex(todo => todo.id === id);
   todos = {...todos, ...todos[changeIndex].completed = !todos[changeIndex].completed}
  }
*/

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

