//user enter a max number and then tries to guess a random generated number between 1 to max

let max=Number(prompt("enter a max number :"));
let num=Math.floor((Math.random()*max))+1;
let guess=prompt("Guess a number :");

while(true){

    if(guess==="quit"){
        console.log("User quit..");
        break;
    }else{
        guess=Number(guess);
    }

    if(guess===num){
        console.log("Congratulations !! You entered a right number which is ",num);
        break;
    }else if(guess<num){
       guess=prompt("Number You entered is too small : ");
    }else{
        guess=prompt("Number you entered is too large :");
    }


}
