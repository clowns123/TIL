import { ajax } from './ajax.js';
let todos = [];

const render = () => {
  document.querySelector('pre').textContent = JSON.stringify(todos, null, 2);
};

// const ajax = (() => {
//   const req = (method, url, callback, payload) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send(JSON.stringify(payload));

//     xhr.onload = () => {
//       if (xhr.status === 200 || xhr.status === 201) {
//         // 성공
//         callback(JSON.parse(xhr.response));
//       } else {
//         // 실패
//         console.error(xhr.status);
//       }
//     };
//   };
//   return {
//     get(url, callback) {
//       req('GET', url, callback);
//     },
//     post(url, callback, payload) {
//       req('POST', url, callback, payload);
//     },
//     patch(url, callback, payload) {
//       req('PATCH', url, callback, payload);
//     },
//     delete(url, callback) {
//       req('DELETE', url, callback);
//     },
//   };
// })();

// const test = (method) => (url, callback, payload) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(JSON.stringify(payload));

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       // 성공
//       callback(JSON.parse(xhr.response));
//     } else {
//       // 실패
//       console.error(xhr.status);
//     }
//   };
// };
// const noUsePayload = (method) => (url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       // 성공
//       callback(JSON.parse(xhr.response));
//     } else {
//       // 실패
//       console.error(xhr.status);
//     }
//   };
// };

// const get = (url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       // 성공
//       callback(JSON.parse(xhr.response));
//     } else {
//       // 실패
//       console.error(xhr.status);
//     }
//   };
// };

// const post = (url, payload, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', url);
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(JSON.stringify(payload));

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       // 성공
//       callback(JSON.parse(xhr.response));
//     } else {
//       // 실패
//       console.error(xhr.status);
//     }
//   };
// };

// const patch = (url, payload, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('PATCH', url);
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(JSON.stringify(payload));
//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       // 성공
//       callback(JSON.parse(xhr.response));
//     } else {
//       // 실패
//       console.error(xhr.status);
//     }
//   };
// };

// const remove = (url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('delete', url);
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       // 성공
//       callback(JSON.parse(xhr.response));
//     } else {
//       // 실패
//       console.error(xhr.status);
//     }
//   };
// };

// const get = test('GET');
// const post = test('POST');
// const patch = test('PATCH');
// const remove = test('DELETE');

const all = ajax;

all.get('/todos', (_todos) => {
  todos = _todos;
  const payload = { id: 4, content: 'React', completed: false };

  all.post(
    '/todos',
    (todo) => {
      todos = [todo, ...todos];
      const completed = !todos.find((todo) => todo.id === 4).completed;

      all.patch(
        '/todos/4',
        (_todo) => {
          todos = todos.map((todo) =>
            todo.id === 4 ? { ...todo, ..._todo } : todo
          );

          all.delete('/todos/4', (_) => {
            todos = todos.filter((todo) => todo.id !== 4);
            render();
          });
        },
        { completed }
      );
    },
    payload
  );
});
