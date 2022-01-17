const todoInput = document.querySelector(".todo-form input");
const todoUl = document.querySelector("ul");

const TODOLIST_KEY = "todolist";
const TODOLIST_VALUE = localStorage.getItem(TODOLIST_KEY)
let todolist = [];

if (TODOLIST_VALUE !== null) {
    todolist= JSON.parse(TODOLIST_VALUE);
    todolist.forEach(addTodo);
}

function addTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click",deletetodo)
    li.appendChild(span);
    li.appendChild(button);
    todoUl.appendChild(li);  
}
function saveTodo(newTodo) {
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todolist));
}


function handleTosubmit(event) {
    event.preventDefault();
    const value = todoInput.value
    const valueObj =  {text: value,id:Date.now() }
    todolist.push(valueObj)
    addTodo(valueObj);
    todoInput.value = "";
    saveTodo(value);
}

function deletetodo(event) {
    const li = event.target.parentElement;
    li.remove();
    console.dir(li)
    todolist = todolist.filter(update);
    function update(item) {
        return item.id !== JSON.parse(li.id);
    }
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todolist));
}
todoForm.addEventListener("submit", handleTosubmit);


