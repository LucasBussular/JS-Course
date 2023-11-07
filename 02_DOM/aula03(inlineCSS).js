const title = document.querySelector('h1')

// quando o método setattribute é usado para adicionar um estilo CSS em uma linha, ele pode sobrescrever completamente um estilo inline já existente
// title.setAttribute('style', 'margin: 50px;')

console.log(title.style) 

// para adicionar estilos inline podemos usar o método style (que proporciona um objeto com diversas chaves de estilo, como 'color' e 'magin')

title.style.margin = '70px';