const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const counter = document.querySelector('.counter');

const indecrease = (function () {
  let num = +counter.textContent;
  return {
    increaseNum: function () {
      return ++num;
    },
    decreaseNum: function () {
      return num ? --num : 0;
    },
  };
})();

function numUp() {
  counter.textContent = indecrease.increaseNum();
}
function numDown() {
  counter.textContent = indecrease.decreaseNum();
}

function init() {
  increase.addEventListener('click', numUp);
  decrease.addEventListener('click', numDown);
}
init();
