//simple guess game


const fav="mulshi pattern";
let guess=prompt("guess my favourite movie :");

while((fav!=guess)&&(guess!="quit")){
    console.log("");
    guess=prompt("You Guess Wrong !! try again...");
}

if(guess==fav){
    console.log("Congratulations...");
}
else{
    console.log("You quit");
}