window.addEventListener("DOMContentLoaded", (event) => {
    getTodos()
  });

// 초기 Todo 목록 불러오기
function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => {
            res.slice(10)
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
    }
}

// Todo 삭제

// Todo 완료