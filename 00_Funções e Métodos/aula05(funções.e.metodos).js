const name = 'Roger'

// em essência, métodos e funções fazem as mesmas coisas. Um método é uma função. O que diferencia ele é onde ele é declarado.

// funções 
const sayHi = () => 'Oi'

const greet = sayHi()

console.log(greet)

// métodos
name.toUpperCase() // é uma função, mas o método que usamos para invocala é diferente. Aqui ela é invocada pela notação de ponto "."