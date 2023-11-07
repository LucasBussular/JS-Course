// método MAP é um método de array que gera um NOVO array como cada item do array original transformado
const numbers = [1, 2, 3]

// o método pode receber três arugmentos: item (único obrigatório), index e array 
// numbers.map((item, index, array) => {})

const doubleNumbers = numbers.map( item => item * 2)

console.log(doubleNumbers)

const prices = [20, 10, 30, 25, 15, 40, 80]

const salePrices = prices.map(price => price/2)

console.log(salePrices)

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

const saleProducts = products.map(product => {
    if (product.price >= 30) {
        return { name: product.name, price: product.price / 2 }
    } 
    return product
})

console.log(saleProducts)
console.log(products)