// //errorhandling methods
// //try , catch , throw , finally

// async function handling(){
//     try{
//         const response = await fetch('http://localhost:8001/students')
//         const data = await response.json()
//         console.log(data)

//         if(!response.ok){
//             throw new Error('Response Failed')
//         }
//     }
//     catch(error){
//         console.log(error.status)
//     }
//     finally{
//         console.log('Thank You')
//     }
// }
// handling();

// //-------------------------------------------------
// try{
//     let y = 20;
//     let x = y + 10;
//     console.log(x)
// }
// catch{
//     console.log("Error:",err.message)
// }
// //------------------------------------------------
// let course ={
//     title : 'Oncologist',
//     instructor : 'Dr.satish'
// }

async function update(){
    try{
        const response = await fetch('http://localhost:8001/courses/102',{
            methods : 'PUT',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(course)
        })
        const data = await response.json()
        console.log(data)

        if(!response.ok){
            throw new Error('Error Response Failed')
        }

    }
    catch(err){
        console.log("Error:",err.status)
    }
    finally{
        console.log('Visit Again')
    }
} 
update();
