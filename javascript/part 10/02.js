//eventListener


let btns=document.querySelectorAll("button");

for(btn of btns){

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);

}

function sayHello(){
    alert("hello");
}

function sayName(){
    alert("Apna Clg");
}