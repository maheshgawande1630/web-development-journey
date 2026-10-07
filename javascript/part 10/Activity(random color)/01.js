let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    
    let newColor=getRandomColor();
    let h3=document.querySelector("h3");
    h3.innerText=newColor;
    document.querySelector("div").style.backgroundColor=newColor;
})

function getRandomColor(){

    let red=(Math.floor(Math.random()*255));
    let green=(Math.floor(Math.random()*255));
    let blue=(Math.floor(Math.random()*255));
    let color=`RGB(${red},${green},${blue})`;
    return color;
}