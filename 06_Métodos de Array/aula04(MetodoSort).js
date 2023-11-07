// método usado apra ordenas itens de um array. O sort MODIFICA o array original. 
// O sort pode receber como argumento um função de comparação. nessa função serão dados dois itens para serem comparados.

// ordenando strings:
// por padrão, o SORT ordena strings em ordem alfabética.
const names = ['Cristiana', 'Alfredo', 'Edson']

names.sort()

console.log(names)

// ordenando números:

const scores = [10, 50, 2, 5, 35, 70, 45]

scores.sort((score1, score2) => score2 - score1)

console.log(scores)

// ordenando objetos:

const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
  ]

// theBigFamily.sort((item1, item2) => {
//     if (item1.score > item2.score) {
//         return -1
//     } else if (item1.score < item2.score) {
//         return 1
//     } 
    
//     return 0
// })

theBigFamily.sort((item1, item2) => item2.score - item1.score)
console.log(theBigFamily)