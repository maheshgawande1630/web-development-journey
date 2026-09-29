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