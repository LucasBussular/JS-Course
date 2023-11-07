// Diferenciação entre Declared Fcuntion e Expession Function;

// Declared funciton são funções constuídas diretamente:

function sayIt () {
    console.log('oi')
}

// funções declaradas nãio precisam, necessariamente, serem colocadas no início do código, consideando que o Hoisting (içamento) faz com que sejam puxadas para o início pelo JS.

// Expressed Functions são funções constuídas após a declaração de uma constante. 

const showFood = function () {
    console.log('pizza')
}
// expressõe de funções não podem ser içadas como funções declaradas. Dessa maneira, é peciso que elas sejam declaradas ANTES de serem executadas no código