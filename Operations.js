//String Operations

// String operations 

let value = " Python Full Stack "
console.log(value.toLowerCase()); //output: python full stack
console.log(value.toUpperCase()); //output: PYTHON FULL STACK
//console.log(value.trimEnd());     //output: " Python Full Stack" (removes whitespace from the end of the string)
// console.log(value.trimStart()); //output: "Python Full Stack " (removes whitespace from the start of the string)
console.log(value.replace('Python', 'Java')); //output: " Java Full Stack " (replaces 'Python' with 'Java')
console.log(value.indexOf('Stack')); //output: 13 (returns the index of the first occurrence of 'Stack' in the string)
console.log(value.length); //output: 19 (returns the length of the string, including whitespace)
console.log(value.slice(0, 8)); //output: " Python " (returns a portion of the string from index 0 to index 8, excluding index 8)
console.log(value.split(" ")); //output: ["", "Python", "Full", "Stack", ""] (splits the string into an array of substrings based on the specified separator, in this case, a space)
let split = value.split(" ") //output: ["", "Python", "Full", "Stack", ""] (splits the string into an array of substrings based on the specified separator, in this case, a space)
console.log(split.join("*")); //output: "*Python*Full*Stack*" (joins the elements of the array into a string, with the specified separator, in this case, an asterisk)
console.log(split.includes('Python')); //output: true (checks if the array includes the specified element, in this case, 'Python')
console.log(value.substring(4, 9)); //output: "Python" (returns a portion of the string from index 4 to index 9, excluding index 9)
console.log(value.repeat(5)); //output: " Python Full Stack  Python Full Stack  Python Full Stack  Python Full Stack  Python Full Stack " (repeats the string a specified number of times, in this case, 5 times)


// Palindrome
 let palindrome =  'madam';                                  
 let result = palindrome.split("").reverse().join("");
console.log(result);


if(palindrome === result){
    console.log(result, "is palindrome")
}
else{
    console.log(result, "is Not palindrome")
}



// Math Operations
let num = 4;
console.log(Math.floor(num)); //output:4

let num_1 = 5.4;
console.log(Math.ceil(num_1)); //output:6

let num_2 = 1.6;
console.log(Math.round(num_2)); //output:2

let power = 4
console.log(Math.pow(power, 3)); //output:64

let sqrt = 25;
console.log(Math.sqrt(sqrt)); //output:5


let random = Math.floor(Math.random()*10 + 1);
console.log(random); //output: random number between 1 and 10


// Date Objects();

let date = new Date
console.log(date); //output: current date and time

console.log(date.getDate()); //output: current day of the month
console.log(date.getDay()); //output: current day of the week (0-6)
console.log(date.getFullYear()); //output: current year
console.log(date.getMonth() + 1); //output: current month (0-11)
console.log(date.getHours()); //output: current hour (0-23)
console.log(date.getMinutes()); //output: current minute (0-59)
console.log(date.getSeconds())


console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());


