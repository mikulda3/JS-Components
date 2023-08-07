let input = document.querySelector(".todo--input");
let date = document.querySelector(".todo--date");
let todoList = document.querySelector(".todo--list");

let btnAdd = document.querySelector(".todo--btn__add");
let btnDelete = document.querySelector(".todo--btn__delete");


btnAdd.addEventListener("click", () => {
  let todoText = input.value;
  let todoDate = date.value;

  if(todoText !== "" && todoDate !== ""){
    const newTodo = document.createElement("li");
  
    newTodo.innerHTML = `
      <div class="todo--row">
        <p>${todoText}</p>
        <p>${todoDate}</p>
        <button class="todo--btn__delete">Delete</button>
      </div>
    `;
    
    input.value = date.value = "";

    todoList.appendChild(newTodo);

    newTodo.querySelector(".todo--btn__delete").addEventListener("click", () => {
      todoList.removeChild(newTodo);
    });
  }
})
