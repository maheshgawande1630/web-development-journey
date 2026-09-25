// Square and sum the array elements using the arrow function and then find the average of the array.

let Array=[1,2,3,4,5];

const square = Array.map(num=>num*num);
console.log(square);

const sum = square.reduce((res,el)=>res+el,0);
console.log(sum);

let avg = sum/Array.length;
console.log(avg);