//Generate a random number between 1 to 100

let num=Math.random();

num=num*100;
num=Math.floor(num);
num=num+1;
console.log(num);

//in short

console.log("by short(direct) way :")
let num2=Math.floor((Math.random()*100))+1;
console.log(num2)