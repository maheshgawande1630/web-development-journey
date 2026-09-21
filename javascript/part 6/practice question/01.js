  
// Write a JavaScript function that returns array elements larger than a number.

function larger_Element(arr,num){
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}