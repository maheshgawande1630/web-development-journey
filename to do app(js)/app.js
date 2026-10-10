let btn=document.querySelector("#btn");
let input=document.querySelector("input")




btn.addEventListener("click",function(){

    let newli=document.createElement("li");
    let ul=document.querySelector("ul");
    let lis=document.querySelectorAll("newli");

     for(li of lis){
        li.innerText=input.value;
    }
    ul.appendChild(newli);
    

   

})