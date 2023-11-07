/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('ul.videos')

const lis = ul.children
// o método children retorna uma html collection. é preciso transformar em array:

const lisArray = Array.from(lis)
// htmlcollection transformado em array

lisArray.forEach( element => {
  element.classList.add('video')
})

console.log(lisArray)

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const titulo = document.querySelector('h2')

console.log(titulo.parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const titulo01 = document.querySelector('h1')

console.log(titulo01.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(ul.previousElementSibling)

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

lisArray.forEach(li => { 
  li.addEventListener('click', event => {
  console.log(event.target)
})})

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const button = document.querySelector('button')


const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

 

button.addEventListener('click', () => {videos.forEach(obj => {
  const li = document.createElement('li')
  li.textContent = `${obj.name}`

  ul.append(li)
})})


/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const body = document.body

titulo01.addEventListener('click', () => {
  body.remove()
})