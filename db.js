let student = {
    name : 'AjayReddy',
    id : '4',
    age : 25
}

fetch('http://localhost:8001/students')
.then(Response => Response.json())
.then(data => console.log(data))
.catch(err => console.log(err));

fetch('http://localhost:8001/students/2',{
    method : 'PUT',
    headers : {
        'Content-Type' : 'apllication/json'
    },
    body : JSON.stringify(student)
})

.then(response => response.json())
.then(data =>console.log(data))
.catch(err => console.log(err));

fetch('http://localhost:8001/students/3',{
    
})