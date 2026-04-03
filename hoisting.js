//Hoisting -- Variables and function declarations are moved to the top of their scope before code execution
console.log(x); // Output: undefined (due to hoisting)
var x = 5;
console.log(x); // Output: 5

let y = 10;
console.log(y); // Output: 10 (let is not hoisted like var)
