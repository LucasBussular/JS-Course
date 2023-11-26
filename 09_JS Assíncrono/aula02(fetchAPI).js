// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// 2 - FORMA USANDO ASYNC / AWAIT 

// const getUser = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     return await response.json()
// }

// 3 - FORMA CONCISA 

const getUser = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!result.ok) {
            throw new Error('Não foi possível acessar os dados')
        }

        return result.json()
        
    } catch (error) {
        console.log(error.messsage)
    }
}

const getArray = async () => {
    const users = await getUser()
    console.log(users)
}

getArray()