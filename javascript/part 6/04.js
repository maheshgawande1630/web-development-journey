//create a function that returns the concatenation of all strings in an array

let str=["Mah","esh"," ","Gawande"," ","!","!"];

function Concat(str){
    
    let result="";

    for(let i=0;i<str.length;i++){
        result=result+str[i];
    }

    return result;

}

console.log(Concat(str));