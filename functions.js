//functions

//function declaration --Defined using the function keyword.
function greeting(){
    console.log("Welcome To Javascript Functions")
}
greeting()

//function expression --Function stored inside a variable.
let add = function greet(){
    console.log("Good Evening")
}
add();

//Anonymous functions --Function without a name.
let adding = function(){
    console.log(10 + 25)
}
adding()