let root = document.getElementById('root');
//creating a div element and appending it to the root element
let app = document.createElement("div");
app.id = "app";
root.appendChild(app);

//creating a heading element and appending it to the app element
let h1 = document.createElement("h1");
h1.innerText = "Todo Application";
h1.className = 'todo-heading';
app.appendChild(h1);

//creating a div element for input and appending it to the app element
let inputBox = document.createElement("div");
app.appendChild(inputBox);
inputBox.className = 'input-container';

//creating an input element and appending it to the inputBox element
let input = document.createElement("input");
input.placeholder = "Enter your task";
inputBox.appendChild(input);

//creating a button element and appending it to the inputBox element
let add = document.createElement("button");
add.innerText = "Add";
inputBox.appendChild(add);

add.addEventListener("click", () =>{
    if(input.value === ""){
        alert("Please Enter Task")
        return;
    }
//creating an object -- bcz we can't manuplicate data on string
    let todoObj = { 
        text : input.value,
        completed : false
    }

    createTodo(todoObj); 
    input.value="";
})

let ul = document.createElement("ul")
app.appendChild(ul)

function createTodo(todo){ //todo -- parameter
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerText = todo.text;

    let actions = document.createElement("div");
    actions.className = 'actions';

    let complete = document.createElement("button");
    complete.className = 'done-btn';
    complete.innerText = "Done";
//striking and unstrking the text
    complete.addEventListener("click", () =>{
        todo.completed = !todo.completed
        span.classList.toggle("completed"); //toggle -- switch true to false or false to true
    })


    let edit = document.createElement("button");
    edit.className = 'edit-btn';
    edit.innerText = "Edit";

    edit.addEventListener("click", () =>{
        let newValue = prompt("Edit your task", todo.text);
        if(newValue !== "" && newValue !== null){
             todo.text = newValue;
            span.innerText = newValue;
        }
    })



    let del = document.createElement("button");
    del.className = 'del-btn';
    del.innerText = "Delete";

    del.addEventListener("click",()=>{
        ul.removeChild(li)
    })

    li.appendChild(span);
    actions.appendChild(complete)
    actions.appendChild(edit)
    actions.appendChild(del)

    li.appendChild(actions);
    ul.appendChild(li);

    app.appendChild(ul);

}