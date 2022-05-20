const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault(); //브라우저 기본 동작 막기
    
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME); // login-form 숨기기
    localStorage.setItem(USERNAME_KEY , username); // local storage에 username 저장하기
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //show the greeting
   paintGreetings(savedUsername);
}