// Arrow Function
const greeting = () => {
    console.log("Hello, World!");
};
greeting(); // Output: Hello, World!

// Arrow Function with Parameters  
//single parameter
const square = x => {
    return x * x;
}; 
console.log(square(5)); // Output: 25

//multiple parameters
const add = (a, b) => {
    return a + b;
};
console.log(add(3, 4)); // Output: 7

// Arrow Function with Implicit Return
const multiply = (a, b) => {
   return console.log(a*b);
}
multiply(2, 3);    // Output: 6
