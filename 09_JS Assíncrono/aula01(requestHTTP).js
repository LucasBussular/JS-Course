const getTodos = url => new Promise((resolve, reject) => { 
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
        const isRequestOK = request.readyState === 4 && request.status === 200
        const isRequestNotOK = request.readyState === 4
    
        if(isRequestOK) {
            const data = JSON.parse(request.responseText)
            resolve(data)
        }
    
        if(isRequestNotOK) {
            reject('Erro de conexão com o servidor')
        }
    })
    
    request.open('GET', url)
    request.send()
})

getTodos('./json/todos.json')
    .then(data => {
        console.log(data)
        return getTodos('./json/todos-02.json')
    })
    .then(data => {
        console.log(data)
        return getTodos('./json/todos-03.json')
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
   
