let smallImages=document.getElementsByClassName("oldImg");

for(let i=0;i<smallImages.length;i++){
    smallImages[i].src="assets/spiderman_img.png";
    console.log(`value of img no. ${i} is changed`);
}
document.getElementsByClassName("oldImg")[1].src="assets/msd.png"

let box=document.querySelectorAll(".box a");
for(link of box){
    link.style.color="purple";
}

let para=document.querySelector("#description");
console.log(para.style);
para.style.color="brown";
para.style.backgroundColor="skyblue";

let img=document.querySelectorAll(".images img");
for(let images of img){
    images.style.border="2px solid red";
}

console.log(img.style);

let box2=document.querySelector(".box2");
box2.classList
box2.classList.add("yellowbg");
box2.classList.remove("yellowbg");
box2.classList.contains("skybluebg");
box2.classList.toggle("pinkbg");


let newP=document.createElement("p");
newP.innerText="hii my name is peeeeterrrrr parkarrrr";

let body=document.querySelector("body");
body.appendChild(newP);