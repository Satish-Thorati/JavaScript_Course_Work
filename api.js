//fetch already returns promises

//HTTP Methods -- GET,POST,PUT,DELETE

//GET -- 
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())//json -- javascript object notation
.then(data => console.log(data))
.catch(error => console.log(error))

let user ={
    id : 11,
    name : 'Dhanya Sri',
    username : 'Dhanya@21',
    email : 'dhanya@gmail.com'
}


//POST -- Sending the data
fetch('https://jsonplaceholder.typicode.com/users',{
    method : 'POST',
    headers :{
        'Content-Type':'application/json'
    },
    body : JSON.stringify(user)

})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err.message))

//PUT -- Update
let updatedUser = {
    name :'Ajay',
    username : "Kumar",
    email : "lakshmireddy@gmail.com"
}
fetch('https://jsonplaceholder.typicode.com/users/5',{ //SPECIFY THE ID
    method : 'PUT',
    headers :{
        'Content-Type':'application/json'
    },
    body : JSON.stringify(updatedUser)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error.status))

//DELETE
fetch('https://jsonplaceholder.typicode.com/users/3',{ ////SPECIFY THE ID
    method : 'DELETE',
})
.then(response => response,console.log('Deleted Successfully'))