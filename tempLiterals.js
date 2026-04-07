let name ="Satish";
let age = 23;
console.log(name + age); //Satish23

//template literals -- backticks -- `` -- without using concatenation operator,we can get variable values in a string using ${}
console.log(`My name is ${name} and my age is ${age}`); //My name is Satish and my age is 23

let wish = "Hello Good Morning";
function greetings(){
    console.log(`${wish}`);
}
greetings(); //Helo Good Morning

let a = 10;
let b = 20;
console.log(`The sum of ${a} and ${b} is ${a+b}`); //The sum of 10 and 20 is 30

let text = `First line
Second line
Third line`;
console.log(text);

//function with template literals
function welcome(student){
    console.log(`${student} Sia Groups`); //Welcome to the company  Sia Groups
}
welcome("Welcome to the company "); 