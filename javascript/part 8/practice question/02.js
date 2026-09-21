//create a function to find minimum in an array

let arr=[12,45,3,2,54,22];

let min=arr.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});

console.log(min);