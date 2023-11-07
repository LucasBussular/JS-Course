const paragraph = document.querySelectorAll('p')

// console.log(paragraph.classList)

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('sucsess')

paragraph.forEach( frase => {
    if (frase.textContent.includes('succes')) {
        frase.classList.add('success')
    } else if (frase.textContent.includes('error')) {
        frase.classList.add('error')
    } 
})

const title = document.querySelector('h1')

title.classList.toggle('test')