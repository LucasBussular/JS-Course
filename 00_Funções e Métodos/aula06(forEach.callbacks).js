// forEach e callbacks

    // função callback: funciona quando usamos uma função como argumento em outra função
    // existem casos em que utlizar o método callback deixa o código mais legível e faz com que a função possa ser utilizada mais de uma vez.
const socialNetworks = ['youtube', 'facebook', 'twitter', 'instagram']


// O método forEach pode receber até 3 parâmetros na função callback: 
    // 1 - o primeiro é o item iterado do array, independente do nome dado a ele. No caso, cada item iterado dentro do array socialNetworks é chamado de socialNetwork
    // 2 - o index do item atual
    // 3 - o array que está sendo iterado

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(socialNetwork, index, array)
}
 
// nesse caso, a função 'logArrayInfo' foi utilizada como ARGUMENTO para o método forEach, 'callingback' a função anterior.
socialNetworks.forEach(logArrayInfo(socialNetworks))

