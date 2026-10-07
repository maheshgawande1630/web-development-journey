//"this" in eventListener

let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");
let btn=document.querySelector("button");

h1.addEventListener("click",function);

h3.addEventListener("click",function);

p.addEventListener("click",function);

btn.addEventListener("mouseenter",function(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellow";
});

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="skyblue";
};
