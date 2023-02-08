let addButton = document.querySelector(".add-button");

let addTask = document.querySelector(".add-task");

let addTaskAddButton = document.querySelector(".add-task-add-button");

let input = document.querySelector(".input");

let todoList = document.querySelector(".im");

let doneList = document.querySelector(".im2");

let close = document.querySelector(".close");

const allToDos = localStorage.getItem("to-dos");

if(allToDos != null) {
    const myArray = allToDos.split("|");
    for (let index = 0; index < myArray.length; index++) {
        const para = document.createElement("p");
        para.classList.add("par");
        para.id = "par" + index;
        para.innerText = myArray[index];
        const span = document.createElement("span");
        span.classList.add("par" + index); 
        span.classList.add("spans"); 
        span.innerText = 'done';
        todoList.appendChild(para);  
        para.appendChild(span);   
    }
}

let spans = document.querySelectorAll(".spans");

for (let index = 0; index < spans.length; index++) {
    const element = spans[index];
    element.addEventListener("click", (e) => {
       let deletedClass = e.target.ClassName.replace(" spans", "");
        let element = document.querySelector("." + deletedClass);
        element.remove();
        let text = element.textContent.replace("done", "");
        console.log(text);
        console.log(allTodos);
        let newToDos = allToDos.replace(text, "") + " |";
        localStorage.setItem("to-dos", newTodos);
    })
    
}





addButton.addEventListener("click", () => {
    addTask.classList.add("flex");
})

let todos;

addTaskAddButton.addEventListener("click", () => {
    if (input.value != "") {
        if (localStorage.getItem("to-dos") == null) {
        todos = "";
        } else {
            todos = localStorage.getItem("to-dos")  + "|";
        }
        todoList.innerHTML += "<p class='par'>" + input.value + "<span>done</span>" + "</p>";
        localStorage.setItem("to-dos", todos + input.value);
        input.value = "";
        addTask.classList.remove("flex");
    } else {
        alert("fill in input");
    }
})