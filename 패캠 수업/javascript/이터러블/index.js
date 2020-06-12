// 이터레이션 프로토콜을 구현하여 무한 이터러블을 생성하는 함수
const userIterable = function () {
  let i = 5 // 자유 변수
  return {
    [Symbol.iterator] () {
      return this
    },
    next () {
      return i === 0 ? { done: true } : { value: --i, done: false }
    }
  }
}
let test = userIterable[Symbol.iterator]()
console.log(test)
