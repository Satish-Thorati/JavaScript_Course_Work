//IIFE (Immediately Invoked Function Expression)-- function that runs immediately after it is defined
(function() {
    let message = "Hello, I am an IIFE!";
    console.log(message); // Output: Hello, I am an IIFE!
})(); // The parentheses at the end invoke the function immediately

//IIFE with parameters
(function(name) {
    let greeting = "Hello, " + name + "!";
    console.log(greeting); // Output: Hello, Satish!
}
("Satish")); // Passing "Satish" as an argument to the IIFE

//IIFE with return value
let result = (function(a, b) {
    return a + b;
})(5, 10);
console.log(result); // Output: 15

