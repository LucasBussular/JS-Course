// relações dos nós do DOM:
// para selecionar todas as tags dentro de uma div/article:

const article = document.querySelector('article')

console.log(article.children)
// retorna um HTMLCollection. como não é possível usar o método forEach em uma HTMLcollection, é preciso transforma-lo em um array. 

console.log(Array.from(article.children))
// o método Array.from cria um array da htmlCollection, podendo iterar sobre ele.

// Array.from(article.children).forEach(element => {
//     element.classList.add('article-element')
// })

const title = document.querySelector('h2')

console.log(title.parentElement.parentElement)