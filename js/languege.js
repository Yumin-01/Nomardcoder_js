const lang = document.querySelector("h1#lang-btn");
const label = document.querySelector("#login-form label");
const inputEle = document.querySelector("#input-name");
lang.innerText = "EN";


function langChange() {
    if(lang.innerText === "EN"){
        lang.innerText = "KR";
        label.innerText = "당신의 이름은 무엇입니까?"
        inputEle.placeholder = '이름을 입력해주세요';
        quote.innerText = todaysQuoteKR.quote;
        author.innerText = todaysQuoteKR.author;
        // greeting.innerText=`안녕 ${localStorage.getItem("username")}!`;
        
    }else if(lang.innerText === "KR") {
        lang.innerText = "EN";
        label.innerText = "What is your name."
        inputEle.placeholder = 'Please write your name';
        quote.innerText = todaysQuote.quote;
        author.innerText = todaysQuote.author; 
        // greeting.innerText=`Hello ${localStorage.getItem("username")}!`;
    }
}

lang.addEventListener("click", langChange);
