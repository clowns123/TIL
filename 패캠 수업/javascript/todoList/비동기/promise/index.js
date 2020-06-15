// // const get = (url, successCallback, falledCallback) => {
// //   const xhr = new XMLHttpRequest()
// //   xhr.open('GET', url)
// //   xhr.send()

// //   xhr.onload = () => {
// //     if (xhr.status === 200 || xhr.status === 201) {
// //       successCallback(JSON.parse(xhr.response))
// //     } else {
// //       falledCallback(xhr.status)
// //     }
// //   }
// // }
// // get('https://jsonplaceholder.typicode.com/todos', console.log, console.error)

// const promiseGet = url => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.send()
//     xhr.onload = () => {
//       if (xhr.status === 200 || xhr.status === 201) {
//         resolve(JSON.parse(xhr.response))
//       } else {
//         reject(new Error(xhr.status))
//       }
//     }
//   })
// }

// let todos = []
// promiseGet('https://jsonplaceholder.typicode.com/todos')
//   .then(_todos => (todos = _todos))
//   .then(console.log)
//   .catch(err => console.error('에러' + err))
//   .finally(() => console.log('끝'))

// function foo () {
//   try {
//     setTimeout(() => {
//       // 콜러가 없다. 때문에 이벤트 전파가 이뤄지지 않는다.
//       throw new Error('Error')
//     }, 1000)
//   } catch (error) {
//     console.error('에러 발생', error)
//   }
// }

// function bar () {
//   // 콜러
//   foo() // 콜리
// }
// bar()
