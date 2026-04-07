

let submitForm =document.getElementById("submitForm");

//inputs
let username = document.getElementById("username");
let usermail = document.getElementById("usermail");
let userpassword = document.getElementById("userpassword");

//paragraphs
let nameValue = document.getElementById("nameValue");
let emailValue = document.getElementById("emailValue");
let passwordValue = document.getElementById("passwordValue");


let nameExp = /^[A-Z][a-z]+$/;
let mailExp = /^[a-z 0-9]+@gmail\.(com|in)$/;
let passwordExp = /^(?=.{8,}$)[A-Z][a-z]+[!@#$%^&*]\d{2,3}$/;

username.addEventListener("input",()=>{ //change -- show error after enter the input //input -- immediatly shows error
    if(!nameExp.test(username.value)){
        nameValue.innerText = "Invalid Name";
        nameValue.style.color = "red";
    }
    else{
        nameValue.innerText = "Valid Name";
        nameValue.style.color = "green";
    }
})
usermail.addEventListener("input",()=>{
    if(!mailExp.test(usermail.value)){
        emailValue.innerText = "Invalid Email";
        emailValue.style.color = "red";
    }
    else{
        emailValue.innerText = "Valid Email";
        emailValue.style.color = "green";
    }
})
userpassword.addEventListener("input",()=>{
    if(!passwordExp.test(userpassword.value)){
        passwordValue.innerText = "Invalid Password";
        passwordValue.style.color = "red";
    }
    else{
        passwordValue.innerText = "Valid Password";
        passwordValue.style.color = "green";
    }
})

submitForm.addEventListener("submit",(e)=>{
    e.preventDefault(); //to prevent the default behaviour of form submission and page reload
    if(nameExp.test(username.value) && mailExp.test(usermail.value) && passwordExp.test(userpassword.value)){
        alert("Form Submitted Successfully");
    }
    else{
        alert("Please Fill the Form Correctly");
    }

})




