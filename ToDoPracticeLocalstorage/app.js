const addTask = document.getElementById("addTask");
const form = document.getElementById("form");
const toDoTemplate = document.getElementById("ToDoTemplate").content;
const inputAlert = document.getElementById("inputAlert")
let tasks =[]


const addTaskToObjects = todo =>{
    const toDoObject = {
        name: todo,
        id: `${Date.now()}`,//do not use in a forEach
    };
    
    tasks.push(toDoObject);
    showToDos();
};

const showToDos = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    addTask.textContent = "";
    const fragment = document.createDocumentFragment()
    tasks.forEach(item => {
        const clone = toDoTemplate.cloneNode(true);
        clone.querySelector(".mb-2").textContent = item.name;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        fragment.appendChild(clone);
    })
    
    addTask.appendChild(fragment)
};

document.addEventListener("click", e => {
    //console.log(e.target.dataset.id)
    if(e.target.matches('.btn-danger')){
        console.log(e.target.dataset.id)
        tasks = tasks.filter(item => item.id !== e.target.dataset.id)
        showToDos()
    }
}); 

form.addEventListener("submit", e => {
    e.preventDefault()
    inputAlert.classList.add("d-none")
   
    const data = new FormData(form);
    const  [todo] = [...data.values()]
    console.log(todo)

    if(!todo.trim()){
       inputAlert.classList.remove("d-none");
       return;
    };
    addTaskToObjects(todo);
    showToDos();
});

document.addEventListener("DOMContentLoaded", () => {
    
    if(localStorage.getItem('tasks')){
        tasks = JSON.parse(localStorage.getItem("tasks"))
        showToDos()
    }
})

