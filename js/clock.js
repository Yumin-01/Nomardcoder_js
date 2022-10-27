const clock = document.querySelector("h2#clock");
clock.innerText = "00:00:00";

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = (`${hours} : ${minutes} : ${seconds}`);

}
// setInterval(sayHello, 5000); //5s = 5000ms
// setTimeout(sayHello, 5000);
getClock(); // 1. 함수 호출
setInterval(getClock, 1000); // 2. 매초 함수 반복 실행
// 두자리 숫자로 만들어주는 자동 함수 pastStart()

