//promises -- used for return and for print
//pending status -- we can't print ,only see 
//resolve -- success
//reject -- fail

function payment(){
    //create promise
    return new Promise((resolve,reject)=>{

        let status = false;
        if(status){
            resolve('Resolved Successfully')
        }
        else{
            reject('Rejected Error')
        }
    })
}
payment()
.then(resolve => console.log(resolve)) //then -- response or resolve
.catch(reject => console.log(reject)) //catch -- errors