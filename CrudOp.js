//Array Crud Operations

//Create
let fruits = ["Apple","Banana","Orange","Mango"];
console.log(fruits); //["Apple","Banana","Orange","Mango"]

//Read
console.log(fruits[0]); //Apple
console.log(fruits[1]); //Banana
console.log(fruits[2]); //Orange
console.log(fruits[3]); //Mango

//push -- to add an element at the end of the array
fruits.push("Pineapple");
console.log(fruits); //["Apple","Banana","Orange","Mango","Pineapple"]

//unshift -- to add an element at the beginning of the array
fruits.unshift("Grapes");
console.log(fruits); //["Grapes","Apple","Banana","Orange","Mango","Pineapple"]

//pop -- to remove the last element of the array
fruits.pop();
console.log(fruits); //["Grapes","Apple","Banana","Orange","Mango"]

//shift -- to remove the first element of the array
fruits.shift();
console.log(fruits); //["Apple","Banana","Orange","Mango"]

//splice -- to add or remove elements from the array at a specific index

//to remove specific element from the array
fruits.splice(1,1);
console.log(fruits); //["Apple","Orange","Mango"]

//to add an element at a specific index
fruits.splice(1,0,"Banana");
console.log(fruits); //["Apple","Banana","Orange","Mango"]

//to replace an element at a specific index
fruits.splice(2,1,"Grapes");
console.log(fruits); //["Apple","Banana","Grapes","Mango"]

//for of loop -- to iterate over the array
for(let fruit of fruits){
    console.log(fruit);
} //Apple
//Banana
//Grapes
//Mango

//for in loop -- to iterate over the array using index
for(let index in fruits){
    console.log(index,":",fruits[index]);
}
//0: Apple
//1: Banana
//2: Grapes
//3: Mango
