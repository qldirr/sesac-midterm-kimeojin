const todoList = document.querySelector('.todoList')

window.addEventListener("DOMContentLoaded", (event) => {
    getTodos()
  });

// 초기 Todo 목록 불러오기
function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            const getTodoList = json.slice(0, 10)
            console.log('get', getTodoList);
            const li = document.createElement('li')

            todoList.innerHTML = `${getTodoList.title} - ${getTodoList.completed}`
        })
    
}


const form = document.getElementById('todo-form')
const todos = document.querySelector('.todoList')

// Todo 추가
function addTodo(){
    const todoInput = document.querySelector('input[name = "todoInput"]')
    const newTodo = todoInput.value.trim()

    if(newTodo !== ''){
        const newTodoLi = document.createElement('li')
        newTodoLi.append(newTodo)
        todos.append(newTodoLi)
    }

    todoInput.value = ''
}

// Todo 삭제

// Todo 완료