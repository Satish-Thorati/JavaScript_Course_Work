let student ={
    name : "Satish",
    age : 23,
    skills : 'Python full stack',
    details :{
        package : "12 LPA",
        company : "Sia Groups"
    }
}
console.log(student); 
console.log(student.details.company);


//destructuring -- to extract values from an object and assign them to variables
let {age,skills} = student;
console.log(age); //23
console.log(skills); //Python full stack

//nested destructuring (obect inside an object)
let {details:{package,company}} = student;
console.log(package); //12 LPA
console.log(company); //Sia Groups

//rest parameter -- to collect the remaining values in an array,must be the last parameter in the function

//to pass the multiple values as arguments to a single parameter
function adding(...age){
    console.log(`Guess My age is ${age}`);  //Guess My age is 22,33,44,55
}
adding(22,33,44,55); 

//multiple parameters with rest operator
function greet(name,...result){
    console.log(`${name} What is my result? ${result}`); //Dhanya What is my result? 90,80,70
}
greet("Dhanya",90,80,70);

//spread operator -- join two objects or arrays to spread the values of an array or object into individual elements
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
console.log([...arr1,...arr2]); //[1,2,3,4,5,6,7,8,9,10]

//remove duplicates using spread operator
let arr3 = [1,2,3,4,5,5,3,4];
let arr4 = [6,7,8,9,10,6,8,9];
console.log([...arr3,...arr4]); 
console.log([...new Set([...arr3,...arr4])]); //[1,2,3,4,5,6,7,8,9,10]