// manipulando conteúdos no DOM:

const paragraph04 = document.querySelector('p')

// paragraph04.innerHTML += ' Texto inserido'

const paragraph05 = document.querySelectorAll('p')

paragraph05.forEach( (paragraph, index) => {
    paragraph.innerText += ` Novo texto ${index + 1}`
})

const div = document.querySelector('.content')

//            se colocarmos apenas o sinal de atribuição '=' o novo HTML sobrescreve o HTML já existente

const people = [ 'Lucas', 'Gui', 'Denise', 'Rômulo']

people.forEach ( person => {
    div.innerHTML += `<p>${person}</p>`
})

const link = document.querySelector('a')

// console.log(link.getAttribute('href'))


// o método setattibute pode receber dois argumentos: o primeiro é o elemento que vai receber a mudança e o segundo é o que deve ser inserido no lugar 
link.setAttribute('href', 'https://rogermelo.com.br/')

link.innerText = 'Website do Roger Melo'

const error = document.querySelector('p.error')

error.setAttribute('class', 'success')

console.log(error.getAttribute('class'))

error.setAttribute('style', 'color: green;')
