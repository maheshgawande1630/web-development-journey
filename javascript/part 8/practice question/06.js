//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.


let doubleAndReturnArgs=(arr,...arg)=>{
    let newarr=arr.concat(...arg.map(el=>el*2));
    return newarr;
}

console.log(doubleAndReturnArgs([1,2,3],3,5,7));