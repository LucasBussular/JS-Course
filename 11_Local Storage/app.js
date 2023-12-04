// coloca os itens no localStorage a partir de um conjunto chave e valor (ou modifica o par já existente)
localStorage.setItem('name', 'Roger')
localStorage.setItem('age', '32')  

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

// retorna 'Roger', valor correspondente à chave 'name'
console.log(name, age)

// remove um item especificado
//localStorage.removeItem()

// limpa toda a localStorage e apaga todos os itens
//localStorage.clear()

const myArray = [
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { e: 5, f: 6}
]

console.log(JSON.stringify(myArray))

localStorage.setItem('myArray', JSON.stringify(myArray))

const JSONfromLocalStorage = localStorage.getItem('myArray')

const convertedArray = JSON.parse(JSONfromLocalStorage)

console.log(convertedArray)