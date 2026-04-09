//Callback -- A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used in asynchronous programming to handle tasks that take time to complete, such as fetching data from an API or reading a file.

//callback necessity --
// function placeOrder(order){
//     console.log(`${order} Placed`)

//     setTimeout(() => {
//         console.log(`Payment Successfull`)
//         delivered();
//     },3000);
// }

// function delivered(){
//     console.log('Order Delivered')
// }
// placeOrder("Biryani")

//callback implementation
//higher order function -- A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Higher-order functions are a fundamental concept in functional programming and are used to create more flexible and reusable code.
function placeOrder(order,payment){
    console.log(`${order} Placed`)

    setTimeout(() => {
        console.log(`Payment Successfull`)
        payment();
    },3000);
}

function delivered(){
    console.log('Order Delivered')
}
placeOrder("Biryani",delivered);

//-----------------------------------------------------

function calculation(a,b,call){
    call(a,b)

}

function add(x,y){
    console.log(x + y)

}

function substract(i,j){
    console.log(i-j)
    
}

function division(e,f){
    console.log(e/f)
    
}
calculation(20,40,add); 
calculation(60,30,substract);
calculation(12,2,division);
