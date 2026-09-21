//Generate a random number between 1 to 5 

let num=Math.random();

num=num*5;
num=Math.floor(num);
num=num+1;
console.log(num);

//in short

console.log("by short(direct) way :")
let num2=Math.floor((Math.random()*5))+1;
console.log(num2)