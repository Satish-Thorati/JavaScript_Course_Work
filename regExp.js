let text = "Hello Welcome to JavaScript Regular Expressions";
let pattern = /welcome/i;
console.log(pattern.test(text)); //i -- case insensitive


let words = "Hello Welcome to JavaScript Regular Expressions";
let patterns = /python/i;
console.log(patterns.test(words)); //i -- case insensitive

//replace
let value ="cat cat cat";
let result = value.replace(/cat/,"Dog");
console.log(result)

//replace globally
let valuess ="cat cat cat";
let resultss = value.replace(/cat/g,"Dog");
console.log(resultss)

//match
let match = value.match(/at/)
console.log(match)

let matchss = value.match(/at/g)
console.log(matchss)

let value_2 = "Dog Dog dog";
let replace_result = value_2.replace(/dog/,"Money");
console.log(replace_result)   //Dog Dog Money

let value_3 = "Dog Dog dog";
let replace_resultt = value_3.replace(/dog/i,"Money");
console.log(replace_resultt)   //Money Dog dog

let value_4 = "Dog Dog dog";
let replace_resulttt = value_4.replace(/dog/gi,"Money");
console.log(replace_resulttt)   //Money Money Money


let age = "I age is 22 changed to 25";
let age_res = /\d/; //\d -- digit
console.log(age_res.test(age)) //true
console.log(age.match(/\d+/g)) // [ '22', '25' ]
console.log(age.match(/\d/g))  // [ '2', '2', '2', '5' ]
console.log(age.match(/\w+/g))  // [ 'I', 'age', 'is', '22', 'changed', 'to', '25' ]
console.log(age.match(/\w/g))  // [ 'I', 'a', 'g', 'e', 'i', 's', '2', '2', 'c', 'h', 'a', 'n', 'g', 'e', 'd', 't', 'o', '2', '5' ]

let regExp =new RegExp("Hello Good Morning");
console.log(regExp) // /Hello Good Morning/

//email validation
let email = "dhanya12@gmail.com";
let email_regExp = /^[a-z 0-9]+@gmail+\.(com|in)$/;  //[]--range of characters, ^--start of string, $--end of string
console.log(email_regExp.test(email)) //true

//password validation
let password = "Dhanya@123";
let password_regExp = /^[A-Z][a-z]+[!@#$%^&*]\d{2,3}$/;
console.log(password_regExp.test(password)) //true

let passwordd = "dhaNya@123";
let password_regExpp = /^[A-Z a-z]+[!@#$%^&*]\d{2,3}$/;
console.log(password_regExpp.test(passwordd)) //true

//name validation
let name = "Dhanya";
let name_regExp = /^[A-Z][a-z]+$/;
console.log(name_regExp.test(name)) //true
