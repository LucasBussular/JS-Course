// Argumentos, parâmetros e default parameters:

const myFunc = function () {
    console.log(`Oi, ${nome}`)
}

myFunc();

// como padrão, quando funções são chamadas sem argumentos, retornam undefined. Para evitar que isso ocorra, é possível declarar um "tapa buraco" quando a função for declarada. ex.:
//                   Dessa maneira, caso a função seja chamada sem nenhum argumento, por padrão devolverá "Jorge Junior"

function mostraNome (nome = 'Jorge', sobrenome = 'Junior') {
    console.log(`Oi, ${nome} ${sobrenome}`)
}

