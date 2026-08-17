//Write a program to find the largest of 3 numbers.

let a=number(prompt("Enter first number :"));
let b=number(prompt("Enter second number :"));
let c=number(prompt("Enter third number :"));

if(a>=b && a>=c){
    console.log("a is greatest");
}
else if(b>=a && b>=c){
    console.log("b is greates");
}
else{
    console.log("c is greatest:");
}
