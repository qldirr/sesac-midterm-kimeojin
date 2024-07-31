const todoList = document.getElementById('todo-list')
const form = document.getElementById('todo-form')
const todoInput = document.querySelector('.todoInput')

// DOM 내용이 완전히 로드되었을 때 getTodos 함수 실행
window.addEventListener("DOMContentLoaded", (event) => {
    getTodos()
});

// 초기 Todo 목록 불러오기
function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => {
            const getTodoList = json.slice(0, 10)
            
            for (let i=0; i < getTodoList.length; i++){
                const li = document.createElement('li')
                const span = document.createElement('span')
                const delBtn = document.createElement('button')
                console.log('et', getTodoList[i]);
                delBtn.innerText = 'X'
                span.textContent = getTodoList[i].title
                li.appendChild(span)
                li.appendChild(delBtn)
                todoList.appendChild(li)
            }
            
            // getTodoList.forEach((value, index) => {
            //     console.log('va', value);
                
            // });

        })

}


// Enter 키 입력시에도 addTodo() 실행
function keyCodeCheck() {
    const newTodo = todoInput.value.trim()
    if (window.event.keyCode === 13 && newTodo !== '') {
        addTodo()
    }
}

// Todo 추가
function addTodo() {
    const newTodo = todoInput.value.trim()
    const newTodoLi = document.createElement('li')
    const newDelBtn = document.createElement('button')
    const newSpan = document.createElement('span')

    newDelBtn.innerText = 'X'
    newSpan.textContent = newTodo
    newTodoLi.appendChild(newDelBtn)
    newTodoLi.appendChild(newSpan)

    todoList.appendChild(newTodoLi)

    todoInput.value = ''
}

// Todo 삭제

// Todo 완료