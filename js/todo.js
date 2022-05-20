const toDoForm = document.getElementById("todo-form");
const toDOInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDOInput.value;
    toDOInput.value = "";
    const newTodoObj = {
        id: Date.now(), 
        text:newToDo
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDoList = localStorage.getItem(TODOS_KEY);
if (savedToDoList !== null){
    const parsedToDos = JSON.parse(savedToDoList);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}