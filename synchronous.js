//Synchronous code is executed in order,line by line excutes
console.log('First')
console.log('Second')
console.log('Third')
console.log('Fourth')
console.log('Fifth')

//Assynchronous code is executed out of order,if errors occurs it will not stop the execution of the code,not skips the code
console.log('One')
console.log('Two')

setTimeout(() => {
    console.log('Three')
}, 1000);
console.log('Four')
console.log('Five')


//Schedulors

//setTimeout()-- funtion that is used to execute a block of code after a specified time interval
//ex : stop watch
setTimeout(() => {
    console.log('Delayed Functionality')
}, 3000);

//setInterval()-- 
let timer =setInterval(() => {
    let date = new Date();
    console.log(date.toLocaleTimeString())
}, 1000);
setTimeout(() => {
    clearInterval(timer);
    console.log('Timer Stopped')
},20000);


