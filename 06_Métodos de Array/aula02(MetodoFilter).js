// o método filter é usasdo para que retorne apenas ALGUNS itens do array original como um novo array

const randomNumbers = [36, 99, 37, 63]

//                           o método pode receber três parâmetros: item (obrigatório), index, array
const numbersGreaterThan37 = randomNumbers.filter(number => number > 37)

console.log(numbersGreaterThan37)

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const premiumUsers = users.filter( user => user.premium )

console.log( { users, premiumUsers } )