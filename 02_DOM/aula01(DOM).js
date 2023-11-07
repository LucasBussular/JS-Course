// DOM: Document Objetct Model
//  é criado pelo browser. 
//  uma vez que o document HTML é carregado no browser, o browser cria um objeto que modela o documento, chamado 'DOCUMENT'. O document tem diversos métodos que podem ser utilizados para 
//  interagir com o documento carregado no browser. Todas as vezes que fazemos uma manipulação em uma página, a fazemos a partir do objeto 'document'

// ao usar a notação de ponto no document, aparecem diversos métodos que podem ser usados nele. Por exemplo, document.location devolve a URL completa da página.

// QUERY SELECTOR & QUERY SELECTOR ALL 

// tradução literal de query: consultar


//                                       nesse caso, a referência vai funcionar para a primeira tag 'p' encontrada no document sendo percorrida de cima para baixo
const paragraph = document.querySelector('p')
//                                       para referenciar uma classe no html, usamos o ponto '.' entre aspas simples
const paragraph02 = document.querySelector('.error')
//                                       caso não seja possivel referenciar um tipo ou uma classe, é possível combinar as duas coisas numa unica seleção. nesse caso, foi selecionado uma div
//                                       que tenha a classe 'error'.
const paragraph0 = document.querySelector('div.error')

console.log(paragraph)

// é possivel utilizar o browser para descobrir uma referência específica usando o botão direito do mouse e inspecionando o document dentro da ferramenta de desenvolvedor (f12)

//                                          para que sejam obtidas todas as referências para as tags 'p' da página, usamos o querySelectorAll. o método retorna um NodeList.
//                                          apesar da NodeList não ser um array, alguns métodos podem ser utilizados. 
//                                          é possível acessar itens do nodeList com a notação de colchetes, como um array. No caso: paragraphs[2] retorna o terceiro paragrafo do DOM.
//                                          além disso, é possível usar o método forEach para iterar sobre os itens da NodeList.
const paragraphs = document.querySelectorAll('p')

// obtendo um elemento através do ID:
//                                           como o método utilizado ja busca diretamente pelo ID, não é necessário utilizar nenhuma forma de hash antes da string
const identificador = document.getElementById('identificador')

// obtendo um elemento através do nome da classe:
//                                           como o método utilizado ja busca diretamente pela classe, não é necessário utilizar nenhuma forma de hash antes da string
//                                           nos é retornado um HTML collection (similar ao NodeList). Apesar de similares, não são identicos. Não é possível usar o método ForEach
//                                           em um HTML Collection, mas é possível usar a notação de colchetes para acessar qualquer elemento dentro dele.
const classe = document.getElementsByClassName('classe')

// obtendo elementos através do nome da tag:
//                                           como o método utilizado ja busca diretamente pela tag, não é necessário utilizar nenhuma forma de hash antes da string        
//                                           assim como o 'getElementsByClassName' o método retorna um HTMLCollection.                                   
const pelaTag = document.getElementsByTagName('p')
