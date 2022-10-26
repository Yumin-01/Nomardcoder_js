/*-----------------------------------------------------------------*/
//nomadcoders_JS_#2

// const a = 5;
// const b = 2;
// const myName = "umean"; 

let a = 5;
let b = 2;
let myName = "umean"; 

//let vs const vs var
//let > 변동 가능
//첫번쨰 선언 let myName = ~~ ; 이후 두번째 선언때는 myname = ~~; 으로 바로 업데이트가 가능하다.
//const로 설정한 값은 이후에 설정해도 절대 변경되지않는다
//const - 디폴트
//let - 값을 업데이트 하고 싶을 경우 사용
//var 업데이트를 원한다면 언제든지 업데이트 가능. but var는 잘못 사용해도 바로잡아주지 않는다. 요즘은 자주 사용하지 않는 편.

console.log(a + b);
console.log(a * b);
console.log(a / b);

myName = "yumin";  //myName 업데이트

console.log("hello " + myName);


/*-----------------------------------------------------------------*/
//Boolean 
// const amIFat = true; //false
const amIFat = null; //noting this , but this is not undefined
let somthing; // this is undefined 
console.log(somthing);


/*-----------------------------------------------------------------*/
//array
//무언가를 나열하기 위한 더 좋은 방법

// const mon = "mon"
// const tue = "tue"
// const wed = "wed"
// const thu = "thu"
// const fri = "fri"
// const sat = "sat"
// const sun = "sun"

// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]
// console.log(daysOfWeek[5]);

//if you need fri, [] < write number
//ex) daysOfWeek[5]
//result is sat
//why? because computer counts number 0.

//get item from array 
console.log(daysOfWeek);
console.log(daysOfWeek[4]);

//add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["salt", "tomato", "sugar"];
toBuy.push("popcorn");
console.log(toBuy); 

/*-----------------------------------------------------------------*/
//Object
// const playerName ="yumin";
// const playerPoints = 100;
// const playerInput = false;
// const playerWinning= "sometimes";


// const player = ["yumin", 100, false, "sometimes"];
//not perfect 
//If you use this way, you need detaile comment

//how can you use a better way?

// const player = {
//     name : "yumin",
//     points: 100,
//     input: false,
//     winning: "sometimes"
// };

// console.log(player);
// console.log(player.name);

// //other way..
// console.log(player["name"]);

// player.input = true;
//how???? player is const,,,,? const = object, input data is inside value
//So you can change inside value in object

// player.points = player.points + 100;
// console.log(player.points);


/*-----------------------------------------------------------------*/
//Functions-1
// function sayHello (){
//     console.log("hello my name is C");
// }

// alert();
// console.log("hello");
// sayHello("yumin");
// sayHello("dal");
// sayHello("lee");

// sayHello();
// sayHello();
// sayHello();
// sayHello();


/*-----------------------------------------------------------------*/
//Functions-2
//how to receive data? 

// function sayHello (nameOfPerson, age){
//     console.log("hello my name is " + nameOfPerson + ". " + "and " + "I'm " + age + " years old.");
// }

// sayHello("yumin", 15);
// sayHello("dal", 20);
// sayHello("lee", 24);

function plus(firstNumber,SecondNumber) {
    console.log(firstNumber + SecondNumber);
}
plus(8 , 60);


function divide (a,b){
    console.log(a/b);
}
divide(90,2);

const player = {
    name : "yumin",
    sayHello: function sayHello(otherPersonsName){
        console.log("hello " + otherPersonsName + " Nice to meet you.");
    }
};
player.sayHello("umean");


/*-----------------------------------------------------------------*/
//return

const age = 30;
function calculateKrAge (ageOfForeigner) {
    ageOfForeigner + 2; 
    // return "hello" > console.log : not 32 , result is hello
}

const krAge = calculateKrAge(age);
console.log(krAge);

const cal = {
    plus : function(a,b){
        return a + b;
    },
    minus : function(a,b){
        return a - b; 
    },
    divide : function(a,b){
        return a / b; 
    },
    power : function(a,b){
        return a ** b; 
    },
};

const plusResult = cal.plus(2,3);
console.log(plusResult);

//When the program loads "return", the program is complete.


/*-----------------------------------------------------------------*/
//conditional
//focus on if 

// const age2 = prompt("how old are you?");
const age3 = parseInt(prompt("how old are you?"));
console.log(age3);
console.log(isNaN(age3)); // This function determines whether the input data is a number or not.

if(isNaN(age3)){
    //condition == true
    console.log("please write a number.");
} else if(age3 < 18){ 
    //condition == false
    console.log("You are too young.");
}else {
    console.log("You can drink");
}

//other && || 