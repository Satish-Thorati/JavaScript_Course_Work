// CRUD operations on objects
// Create, Read, Update, Delete
// Create

let student = {
    name : "Dhanya",
    age : 25,
    skills : "Python Full Stack",
    details : {                       //nested object:object inside an object
        salary : '12 LPA',
        company : 'Sai groups'
    },
    savings : [{                    //nested array:array inside an object
        monthly : '50k'
    }]
}

//Read
console.log(student);
console.log(student.skills);
console.log(student.details.salary);
console.log(student.savings[0].monthly);

//Update
student.age = 27;
console.log(student);

student.details.salary = '15 LPA';
console.log(student);

student.savings[0].monthly = '65k';
console.log(student);

//Delete
delete student.skills;
console.log(student);

delete student.details.company;
console.log(student);

//
let updatedStudent = [{
    name : "Jyothi",
    age : 23,
    place : "Guntur",
    company : "Sai groups",
    greet : function(){
        console.log("Hello", this.name)     //this keyword(self-window) refers to the current object which is calling the function, in this case it refers to updatedStudent[0] object  
    }

}]

function outerFunction () {
    console.log('I am From', this.place)
}

console.log(updatedStudent);
updatedStudent[0].greet();
//call method -- to call a function with a specified this value and arguments, it calls the function immediately
outerFunction.call(updatedStudent[0]);
//apply method -- to call a function with a specified this value and arguments, it calls the function immediately, the difference between call and apply is that call accepts arguments as a comma separated values while apply accepts arguments as an array
outerFunction.apply(updatedStudent[0]);

//bind method returns a new function with the specified this value and arguments, it does not call the function immediately, we need to call the returned function to see the result
let value = outerFunction.bind(updatedStudent[0]);       
value();                                                  


console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));   

console.log('age' in student);



