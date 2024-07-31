const todoList = document.querySelector('.todoList')
const form = document.getElementById('todo-form')
const todoInput = document.querySelector('input[name = "todoInput"]')
const newTodo = todoInput.value.trim()

window.addEventListener("DOMContentLoaded", (event) => {
    getTodos()
});

// 초기 Todo 목록 불러오기
function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => {
            const getTodoList = json.slice(0, 10)
            console.log('get', getTodoList);
            const li = document.createElement('li')
            const span = document.createElement('span')
            const delBtn = document.createElement('button')
            delBtn.innerText = 'X'

            getTodoList.forEach((value) => {
                console.log('va', value);
                span.innerHTML = value.title
                li.appendChild(span)
                li.appendChild(delBtn)
                todoList.appendChild(li)
            });

        })

}



function keyCodeCheck() {
    if (window.event.keyCode === 13 && newTodo !== '') {
        addTodo()
    }
}

// Todo 추가
function addTodo() {


    const newTodoLi = document.createElement('li')
    const newBtn = document.createElement('button')
    const newSpan = document.createElement('span')
    newTodoLi.appendChild(newBtn)
    newTodoLi.appendChild(newSpan)

    newSpan.textContent = newTodo
    todoList.appendChild(newTodoLi)

    todoInput.value = ''
}

// Todo 삭제

// Todo 완료