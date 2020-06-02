const form = document.querySelector('.js-form');
const input = form.querySelector('input')
const greeting = document.querySelector(".js-greetings");

const USER_LS = 'currentUser'
const SHOWING_ON = 'showing'

function saveName(text){
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetion(currentValue)
    saveName(currentValue)
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit)
}

function paintGreetion(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerHTML = `Hello ${text}`
}

function localName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user is not
        askForName();
    }else{
        // user is
        paintGreetion(currentUser);
    }
}

export function init(){
    localName();
}


