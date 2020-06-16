const container = document.querySelector('.container')
const sideNav = document.querySelector('.side-nav')
const main = document.querySelector('.main')
const i = document.querySelector('i')

function showNav (e) {
  container.classList.toggle('active')
}

function init () {
  i.addEventListener('click', showNav)
}

init()
