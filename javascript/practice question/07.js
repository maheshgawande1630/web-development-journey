//Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age): name is age years old.

let name = prompt("Enter your name:");
console.log(name);

let age = prompt("Enter age :");
console.log(age);

let info=(`${name} is ${age} years old`);
console.log(info);