// HTML 불러오기
// 시계
const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

// js 기능 구성
// 시계
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:`+ 
    `${minutes < 10 ? `0${minutes}` : minutes}:` +
    `${seconds < 10 ?  `0${seconds}` : seconds}`
}

// clock 초기화
export function init(){
    getTime();
    setInterval(getTime, 1000);
}
