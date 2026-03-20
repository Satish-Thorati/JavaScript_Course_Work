//Premitive Datatypes
//String Datatype
let str_value = "example12@gmail.com";
console.log(typeof(str_value));

//Number Datatype
let num = 20;
console.log(typeof(num));

let num_decimal = 55.5;
console.log(typeof(num_decimal));

//BOOlean Datatype
let bool = true;
console.log(typeof(bool));

//Big Int (2**52)
let a=10n
let b=20n
console.log(a+b)
console.log(typeof(a,b))

//Symbol
let symbol = Symbol("id")
let symbol_1 = Symbol("id")
console.log(symbol === symbol_1)
console.log(typeof(symbol));

//Converting one datatype to another
let val_1 = 20;
let str = String(val_1)
console.log(typeof(str));

let val_2 = "true";
let boolean = Boolean(val_2)
console.log(typeof(boolean));

let val_3 = "35";
let number = Number(val_3)
console.log(typeof(number))

let val_4 = true;
let string = String(val_4)
console.log(typeof(string))

let big_num = BigInt(901234567890);
console.log(typeof(big_num));

let val = 2n;
console.log(big_num + val)


//Non-Premitive Datatypes
//Array Datatype
let arr = new Array(10,20,30,40,50)
console.log(arr) // only 50 is stored
console.log(typeof(arr))

let array = [10,20,30,40,50];
console.log(array)
console.log(typeof(array)) //typeof array is array but showed as object

let array_2 = ['apple','banana','pear'];
console.log(array_2)
console.log(typeof(array_2))

//Object Datatype
let student = {
    name : "Satish",
    age : 22,
    skills : 'python full stack'
}
console.log(student)

//Type Coercion -- js automatically converted
let product = 12 * "6";
console.log(product)

let division = 28 / "7";
console.log(division)

let sum = 6 + "6";  //It acts as a Concatination(adding one datatype to another)
console.log(sum) //66

//Type Conversion -- user manually converted
let result = 12 * 12;
console.log(result)


console.log(true === false)
console.log(true === true)