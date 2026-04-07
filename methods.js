// Array Methods

//map --interates over the array and returns a new array
let array = [10,12,20,25,15];
let result = array.map(value =>(
    value * 2
));
console.log(result);
//with return statement
let result1 = array.map(value =>{
     return value * 2
});
console.log(result1);

//filter -- it filters the array based on the condition and returns a new array
//ex: whatsapp search engine (search for contacts)
let arr_2 = [5,10,16,12,6] 
let result2 = arr_2.filter(value =>(
    value >= 10
));
console.log(result2);

//find -- it returns the first element that satisfies the condition
//ex: add to cart (only one product added in cart)
let find_value = arr_2.find(value =>(
    value >= 10
));
console.log(find_value);

//reduce -- it reduces the array to a single value based on the condition
let value = [100,200,300,400,500]
let reduce_value = value.reduce((accumulator, currentValue) => ( 
    //accumulator is the value that is returned from the previous iteration 
    //currentValue is the current value of the array that is being iterated
     accumulator + currentValue
),0);//0 is the initial value of the accumulator
console.log(reduce_value);

//forEach
let fruits = ["apple","banana","pear","grapes"];
let fruits_res = fruits.forEach(e =>(
    console.log(e)
));
