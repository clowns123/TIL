const analogClock = document.querySelector('.analog-clock')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const centerCircle = document.querySelector('.center-circle')
const digitalClock = document.querySelector('.digital-clock')

function nowTime () {
  setInterval(() => {
    let date = new Date()
    digitalClock.textContent = `
    ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}
    `
    let stest = date.getSeconds() * 3
    let mtest = date.getMinutes() * 3
    let htest = date.getHours() * 30

    second.style.transform = `rotate(${+stest}deg)`
    minute.style.transform = `rotate(${+mtest}deg)`
    hour.style.transform = `rotate(${+htest}deg)`
  }, 1000)
}

function init () {
  nowTime()
}

init()
