// objeto é um método de armazenamento de dados empares 'chave' e 'valor', chamado propriedades, e executam ações, chamadas de método que não são nada mais que ações.

// criando um objeto literal:

let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de Frango', '4 receitas de purê de batata']
}

console.log(user)

// para acessar propriedades de um objeto basta usar a notação de ponto. Assim:

console.log(user.name) 
// console mostra 'João'
// ou:

console.log(user['name'])
// console mostra 'João'

// para alterar algum valor de um objeto, basta atribuir da seguinte forma:

user.name = 'Marcelo'
// assim, o valor armazenado na chave 'name' passa a ser 'Marcelo'

