const ajax = (() => {
  function all (method, url, callback, payload) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(JSON.stringify(payload))
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        callback(JSON.parse(xhr.response))
      } else {
        console.error(xhr.status)
      }
    }
  }

  return {
    get (url, callback) {
      all('GET', url, callback)
    },
    post (url, payload, callback) {
      all('POST', url, callback, payload)
    },
    patch (url, payload, callback) {
      all('PATCH', url, callback, payload)
    },
    delete (url, callback) {
      all('DELETE', url, callback)
    }
  }
})()

const promiseAll = (method, url, payload) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(JSON.stringify(payload))

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
        resolve(JSON.parse(xhr.response))
      } else {
        // 에러 처리를 위해 reject 함수를 호출한다.
        reject(new Error(xhr.status))
      }
    }
  })
}
export { ajax, promiseAll }
