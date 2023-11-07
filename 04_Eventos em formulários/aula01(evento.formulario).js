// o evento submit:

const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('.feedback')

// o listener de evento ocorrre no form, e não no botão

const regex = /^[a-zA-Z]{6,12}$/
const testUsername = username => regex.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()

    let username = event.target.username.value

    const isAValidUsername = testUsername(username)

    if (isAValidUsername) {
        paragraph.textContent = 'o username é válido.'
        username = ''
        event.target.username = focus()
        return
    }

    paragraph.textContent = 'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras.'
    username = ''
    event.target.username = focus()

    console.log(username)
})

form.username.addEventListener('keyup', event => {
    const username = event.target.value

    const isAValidUsername = testUsername(username)

    if (isAValidUsername) {
        form.username.setAttribute('class', 'success')
        return
        }

        form.username.setAttribute('class', 'error')
})

// // padrão regex
// const pattern = /^[a-z]{6,}$/
// //             usando o método .test encadeado da expressão regex feita, é retornado true ou false
// const isAMatch = pattern.test(username)

// if (isAMatch) {
//     console.log('o teste da regex passou!')
// } else {
//     console.log('o teste da regex não passou!')
// }

// const result = username.search(pattern)

