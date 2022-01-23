const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginText = document.querySelector(".login-form+span");
const todoForm = document.querySelector(".todo-form");

const USERNAME_KEY = "username"

if (localStorage.getItem(USERNAME_KEY)=== null) {
    loginForm.classList.remove("hidden")
} else {
    getName(localStorage.getItem(USERNAME_KEY));
}

function getName(event) {
    loginForm.classList.add("hidden")
    loginText.innerText = `Hello! ${event}`;
    todoForm.classList.remove("hidden");
    todoForm.autofocus = true;
}


function putName(event) {
    event.preventDefault();
    const value = loginInput.value;
    getName(value);
    localStorage.setItem(USERNAME_KEY, value);
}

loginForm.addEventListener("submit",putName)