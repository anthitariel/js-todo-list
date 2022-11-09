// selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector(".filter-todo");

// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// functions
function addTodo(e) {
  // prevent form from submitting 
  e.preventDefault()
  // add todo
  if (todoInput.value === '') {
    alert("Please enter your todo")
    }
  else {
    // create todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // create todo li
    const newTodo = document.createElement('li')
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    // create checked button
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>'
    checkedButton.classList.add('checked-btn')
    todoDiv.appendChild(checkedButton) 
    // create trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    // append to list
    todoList.appendChild(todoDiv)
    // clear todo input value
    todoInput.value = ''
    } 
}

function deleteCheck(e) {
    const item = e.target
    // delete mark 
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
    }
    // check mark
    if(item.classList[0] === 'checked-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
  const todos = [...todoList.children];
  todos.forEach(function(todo) {
      switch (e.target.value) {
          case "all" :
              todo.style.display = "flex";
              break;
          case "completed":
              if(todo.classList.contains("completed")) {
                  todo.style.display = "flex";
              }
              else {
                  todo.style.display = "none";
              }
              break;
          case "uncompleted":
              if(!todo.classList.contains("completed")) {
                  todo.style.display = "flex";
              }
              else {
                  todo.style.display = "none";
              }
              break;
      }
  });
}



