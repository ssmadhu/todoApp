var addBtn = document.querySelector("#add-button");
var inputText = document.querySelector(".inputText");
var todoList = [];
var todoSpace = document.querySelector(".todo-section");
var clearBtn = document.querySelector(".clearAll");

function clickAddButton() {
    todoList.push(inputText.value);
   addToDo(inputText.value);
}

function addToDo(item){
    var listItem = document.createElement("li");
    listItem.textContent = item;
    todoSpace.appendChild(listItem);
}

function clearAll() {
    while(todoSpace.firstChild) {
        todoSpace.removeChild(todoSpace.firstChild);
    }
};


addBtn.addEventListener("click", clickAddButton);
clearBtn.addEventListener("click", clearAll);