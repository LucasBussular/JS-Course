const formAddToDo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

// ADICIONANDO ITEM TO-DO

formAddToDo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    
    if (inputValue.length) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
        </li>
        `
        event.target.reset()
    }    
})

// DELETANDO ITEM TO-DO

// a função para deletar os todos foi passada para fora e está sendo invocada dentro o escutador de evento para melhor organizaçõ

const removeTodo = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

    if (trashDataValue) {
        todo.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
 // função sendo invocada com o argumento local referenciado
    removeTodo(clickedElement)   
})

// BUCANDO ITEM TO-DO

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()

    Array.from(todosContainer.children)
        .filter( todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach( todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
    })

    Array.from(todosContainer.children)
        .filter( todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach( todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })

})
