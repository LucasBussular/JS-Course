const books = [
    { name: 'Código Limpo', price: 30 },
    { name: 'O milagre da manhã', price: 5 },
    { name: 'Alice no País das Maravilhas', price: 10 },
    { name: 'Quem Pensa Enriquece', price: 50 },
    { name: 'O livro da ciência', price: 40 }
  ]

const booksGreaterThan20 = books
    .filter( ({ price }) => price > 20)
    .map( ({ name, price }) => 
        `O livro ${name} está à venda por R$${price},00`)


console.log(booksGreaterThan20)

// é posível encadear métodos no fim do método anterior