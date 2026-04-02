//closure -- 
function outer() {
    let value_1 = "I am from outer function";
    function inner() {
        console.log("Hello Satish",value_1); // Accessing outer variable
    }
    return inner(); // Returning the inner function
}
outer(); // Output: Hello Satish I am from outer function