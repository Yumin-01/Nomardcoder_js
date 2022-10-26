// const title  = document.getElementById("title");
// title.innerText = "got you!"
// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title  = document.getElementsByTagName("hi");
// const hellos  = document.querySelector(".hello h1"); //use . because this is css selector , .hello hi = div h1]
//querySelector will give you only first element
// console.log(hellos);
// hellos.innerText = "on";

// const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(h1);
// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;

//     if(currentColor === "blue"){
//         newColor = "tomato";
//     }else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }
// function handleMouseenter() {
//     h1.innerText = "Here";
// }
// function handleMouseleave() {
//     h1.innerText = "Gone";
// }
// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copier!!!");
// }

// h1.addEventListener("click", handleTitleClick); // = title.onclick = handleTitleClick
// h1.addEventListener("mouseenter", handleMouseenter); // = title.onmouseenter = handleMouseenter
// h1.addEventListener("mouseleave", handleMouseleave); // = title.mouseleave = handleMouseleave

// most detail style > css
//function > js
// window.addEventListener("resize",handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);


// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {
//     const changeClass = h1.className;
//     const clickedClass = "active";
//     let returnClass;

//     if (changeClass === clickedClass){
//         returnClass = "";
//     }else {
//         returnClass = clickedClass;
//     }
//     h1.className = returnClass;
// }
// h1.addEventListener("click", handleTitleClick);

const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    // Same Thing.
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);