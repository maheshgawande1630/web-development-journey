//Add the following elements to the container using only JavaScript and DOM methods:

// 1. <p> with red text → "Hey I'm red!"
// 2. <h3> with blue text → "I'm a blue h3!"
// 3. <div> with black border & pink background containing:
//    - <h1> → "I'm in a div"
//    - <p> → "ME TOO!"


let body=document.querySelector("body");
let para=document.createElement("p");
para.innerText="Hey I'm red !";
body.append(para);