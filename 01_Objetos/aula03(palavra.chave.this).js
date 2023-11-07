// variáveis e escopo de bloco


let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: [
        { title: 'Empadão de Frango', likes: 30},
        { title: '4 receitas de purê de batata', likes: 50}
    ],
    login: function () {
        console.log('Usuário logado')
    },
    logout: function () {
        console.log('Usuário deslogado')
    },
    logBlogPosts () {
        //          a palavra chave this referencia o objeto 'user', sendo assim, é um objeto de contextos

        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach( post => {
            console.log(post.title, post.likes)
        })
    }
}

// para invocar o método:

user.login()
user.logout()

// as arrow function funcionam de maneira diferente com a palavra chave 'this'. Por isso, para que o thios referencie o objeto no qual o método foi criado, é preciso usar as function declarations.