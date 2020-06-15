const stopWatch = document.querySelector('.stop-watch')
const display = document.querySelector('.display')
const control = document.querySelector('.control')
let start = Date.now()

function getTime () {
  if (control.textContent === 'Start') {
    control.textContent = 'Stop'
    let startTime = setInterval(() => {
      let end = new Date(Date.now() - start)
      let endMillisecond = Math.round(end.getMilliseconds() / 10)
      let endSecond = end.getSeconds()
      let endMinute = end.getMinutes()
      display.textContent = `${endMinute < 10 ? '0' + endMinute : endMinute}:${
        endSecond < 10 ? '0' + endSecond : endSecond
      }:${
        endMillisecond < 10
          ? '0' + endMillisecond
          : endMillisecond === 100
          ? endMillisecond - 1
          : endMillisecond
      }`
      if (control.textContent === 'Start') {
        clearInterval(startTime)
      }
    }, 10)
  } else {
    control.textContent = 'Start'
  }
}

function init () {
  control.addEventListener('click', getTime)
}
init()
