let form = document.querySelector(".form");
let input = document.querySelector(".input");
let taskContainer = document.querySelector(".tasks");

    // localStorage.clear();

    // Load saved tasks on page load
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((text) => createTask(text));
};

// Handle form submit
form.onsubmit = (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
        console.log("Empty Input");
    } else {
        createTask(input.value.trim());
        saveTask(input.value.trim());
        input.value = ""; // clear input
    }
};

// Save task to localStorage
function saveTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((t) => t !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create and style the task element
function createTask(text) {
    let span = document.createElement("span");
    span.textContent = text;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.classList.add("btn");

    btn.onclick = () => {
        span.remove();
        removeTask(text);
    };

    span.appendChild(btn);
    taskContainer.appendChild(span);
}
