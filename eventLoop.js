
//printing order -- 1st synchronous (highest priority)
                //-- 2nd asynchronous



console.log("Start");  //1st

setTimeout(()=>{
    console.log("Call Back Queue")//4th  -- asynchronous

},1000);

Promise.resolve().then(() =>console.log('Micro Task Queue'));//3nd -- Promises

console.log('End')//2nd