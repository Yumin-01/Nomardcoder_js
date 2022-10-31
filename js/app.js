// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form div input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME ="hidden"
const USERNAME_KEY = "username";
// const link = document.querySelector("a");
// function loginBtnClick(event){
    // const username = loginInput.value;
    // event.preventDefault();
    // if (username === ""){
    //     alert("please write yous name");
    // }else if(username.length > 15) {
    //     alert("Your name is too long.")
    // }
    // console.log(loginInput.value);
// }
// loginForm.addEventListener("submit", loginBtnClick);
// loginButton.addEventListener("click", loginBtnClick);

function loginSubmit(event) {
    event.preventDefault(); // 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText="hello " + username + "!";
    // greeting.innerText=`Hello ${username}!`; //~물결표시 > `백틱표시 사용
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(username);
    paintGreetings(username);
}
// link.addEventListener("click", handleLinkClick);
// "click"을 하면 > handleLinkClick함수를 실행시키겠다. JS가 알아서 함수를 사용할 수 있도록 설정
loginForm.addEventListener("submit", loginSubmit);
//입력하면 사라지는 창

//localStorage
//저장 : setItem
//삭제 : removeItem
//불러오기 : getItme

function paintGreetings(username){
    greeting.innerText=`Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}else {
    // greeting.innerText=`Hello ${savedUsername}!`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}
