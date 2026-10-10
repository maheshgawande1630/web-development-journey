// Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked


let btn=document.createElement("button");
let body=document.querySelector("body");
body.append(btn);

btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
})
