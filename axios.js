const axios = require('axios')

axios.get('http://localhost:8001/students')
.then(response => console.log(response))
.catch(err => console.log(err.status))

let student = {
    name : 'Rahul',
    age : 22
}

async function sending(){
    try{
        axios.post('http://localhost:8001/students',student)
        console.log(response.data)

        if(!response.ok){
            throw new Error('Error: Response Failed')
         }
        }
    catch(err){
            console.log("Err:",err.message)
        }
    finally{
        console.log("Happy Customer")
    }
}
sending();

axios.put('http://localhost:8001/courses/101',{
    title : "Chemistry",
    instructor : "Dr.Ajay"
})
.then(response => console.log(response.data))
.catch(err => console.log("Error:",err.message))