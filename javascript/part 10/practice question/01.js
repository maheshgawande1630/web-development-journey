//Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load

let box=document.querySelector(".box");
let input=document.querySelector("input");
let para=document.querySelector("p");
let box2=document.querySelector(".box2");


//mouseout
box.addEventListener("mouseout",function(){
    box.style.backgroundColor="pink";
});

//keypress
input.addEventListener("keypress",function(){
    input.value="you typed something :";
    input.style.color="red";
    input.style.backgroundColor="orange";
});

//scroll

box2.addEventListener("scroll",function(){
    box2.innerText="You scrolled this box";
    box2.style.backgroundColor="lightblue";
});

//load

window.addEventListener("load",function(){
    para.innerText="Page is loaded completely"
});