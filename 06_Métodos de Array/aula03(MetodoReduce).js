// o método reduce recebe uma função como argumento e executa a função para cada item do array, gerando como output não necessariamente um array.

const numeros = [1, 2, 3]

// o método pode receber dois argumentos: o primeiro é a função a ser executada e a segunda (opicional) que representa o valor inicial do acumulador
const sumResults = numeros.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResults)

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

const totalScoreRoger = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
       accumulator += phaseScore.score
    }

    return accumulator
}, 0)

console.log(totalScoreRoger)
