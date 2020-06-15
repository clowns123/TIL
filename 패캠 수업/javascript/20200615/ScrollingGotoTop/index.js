const scrollBtn = document.querySelector('.scroll-icon')
function showBtn () {
  if (Math.round(scrollY) < 100) {
    scrollBtn.style.display = 'none'
    return
  }
  scrollBtn.style.display = 'block'
}
function upPage () {
  scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
function init () {
  window.addEventListener('scroll', showBtn)
  scrollBtn.addEventListener('click', upPage)
}

init()
