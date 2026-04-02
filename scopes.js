//Scope of variables

//Global Scope
let globalVar = "I am a global variable";
function globalScopeExample() {
    console.log("Hello Satish",globalVar); // Accessible here
}
globalScopeExample(); // Output: Hello Satish I am a global variable
// console.log(globalVar); // Output: I am a global variable

//Local Scope
function localScopeExample() {
    let localVar = "I am a local variable";
    console.log("Hello Sanjeev",localVar); // Accessible here
}
localScopeExample(); // Output: Hello Sanjeev I am a local variable
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

//Block Scope
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log("Hello Bishal",blockVar); // Accessible here
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined


if(true){
    const blockConst = "I am a blockk-scoped constant";
    console.log("Hello Sushil",blockConst); // Accessible here
}
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined


if(true){
    var functionScopedVar = "I am function-scoped variable";
    console.log("Hello Sushil",functionScopedVar); // Accessible here
}
console.log(functionScopedVar); // Output: I am function-scoped variable
