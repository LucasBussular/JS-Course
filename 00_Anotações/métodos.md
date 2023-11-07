
**ETAPA 05______________________________________________________________________________________________________________________________________________________________________________**

**setAtrributes:** 

    o método setattibute pode receber dois argumentos: o primeiro é o elemento que vai receber a mudança e o segundo é o que deve ser inserido no lugar 
    link.setAttribute('href', 'https://rogermelo.com.br/')

**innerText vs textContent:**

    o método innerText obtém apenas o texto VISÍVEL. Portanto, se houver alguma tag de spam com 'display: none' o texto não será obtido.
    já o método textContent obtém todo o texto, até aquele que está oculto.

**toggle:**

    o método toggle é usado para alternar classe em um elemento html. Aceita como parâmetro uma string contendo o nome da classe a ser modificada. 
    caso a classe passada como argumento já exista, ela será removida. Caso não exista, será adicionada.

**article.children:**

    o método children retorna um HTMLcollection com todas as tags filhas da tag.

**Array.from(article.children):**

    o método Array.from recebe como argumento uma lista, htmlCollection, etc e transforma em um array (no caso, transforma o htmlcollection obtido através do método children em um array).
    não é um método destrutivo, ou seja, ao invocar o article.children novamente obteremos um htmlcollection novamente.

**title.parentElement:**

    o método parentElement revela qual a tag imediatamente superior hierarquicamente no DOM.
    é possível encadear o método, revelando a tag 'avó': title.parentElement.parentElement

**nextElementSibling:**

    é um método que retorna o primeiro elemento abaixo na árvore do DOM.

**previousElementSibling:**

    é um método que retorna o primeiro elemento acima na árvore do DOM.


**addEventListener('click', evento):**

    é um método que permite escutar um evento, sempre acoplado a um referencial da página, como botao.addEventListener. Recebe como argumento o tipo do evento a ser escutado como string ('click'), 
    e recebe como segundo argumento uma função callback.
    o segundo argumento (evento) nos retorna algumas informações como pointerId, pressure etc e uma lista de propriedades possíveis para serem usadas a partir dele.

**button.createElement('nomeDaTag'):**

    é um método usado para criar uma nova tag a partir de um evento. Recebe como argumento o nome da tag a ser criada em forma de string.

**ul.append(elemento)**

    o método append faz com que a tag pai, no caso 'ul', receba como ÚLTIMO filho o elemento dado como argumento, no caso 'elemento'.

**ul.prepend(elemento)**

    o método prepend faz com que a tag pai, no caso 'ul', receba como PRIMEIRO filho o elemento dado como argumento, no caso 'elemento'.

**Array.some()**

    o método array.some(item => item === qualquerNome) itera sobre o array e, caso a callback inserida seja verdadeira, retorna true. Caso não, retorna false.

**stopPropagation()**

    o método stopPropagation evita com que eventos sejam diparados para as tags pai do evento inicial.

**ETAPA 06______________________________________________________________________________________________________________________________________________________________________________**

**RegEx**

    Expresões Regulares são regra que devem ser alcançadas quando algum input é enviado.
    regex101.com (site para criação de padrões regex)

    Para criar expresões regulares, é preciso alocá-las dentro de barras e dentro de uma const.

    todo regex pode ser testado usando o método .test: const result = padraoRegex.test(nomeTestado)
                                                        o valor retornado será true (caso o nome se enquadre na regex) ou false (caso o nome não se enquandre na regex)

    exemplo: const pattern = /^[a-z]{6,}$/
        O regex é criado usando as barras
        o que é colocado entre colchetes ([]) é o caracter set. nesse caso, todo caracter de a à z (minúsculo) pode ser considerado dentro do esperado.
        o que é colocado entre chaves ({}) é a quantidade de caracteres esperada. no caso, o mínimo de caracteres esperado é 6 e o máximo é indefinido.
        o "^" e o "$" determinam que antes e depois dos caracteres esperados não pode haver mais nenhum outro caracter

**método search()**

    O método .search é usado em strings e recebe como argumento uma regex. ela retorna entre 0 e indefinido caso o match seja verdadeiro mostrando o índice onde ele ocorrou. 
    caso não tenha acontecido o match, ele retorna -1.

**ETAPA 07______________________________________________________________________________________________________________________________________________________________________________**

Bootstrap: é uma biblioteca de componentes. Componentes são elementos da interface que podem ser utilizadas já prontas. 
    é uma biblioteca JS e CSS.

**Objeto global Window**

    Em JavaScript, o objeto window é um objeto global que representa a janela do navegador. Ele atua como o contêiner global para todas as variáveis, funções e objetos globais do JavaScript. Todas as variáveis globais são propriedades do objeto window.

    ex: window.outerWidth > é um método que mostra no console a lagura da tela (janela/window) do browser
            como é um objeto global, não há necessidade de ecrever window: basta escrever no console outerwidth que funcionará da mesma maneira.

**setTimeout**

    executa uma função após uma certa quantidade de tempo. Para isso, recebe dois argumentos: primeiro uma função e segundo a quantidade de tempos em milisegundos.
    ex: setTimeout ( () => {}, 2000)
                    recebe como primeiro argumento uma callback function e 2000 milisegundos (2 segundos) como segundo argumento

    a setTimeout pode receber como terceiro (ou mais) argumento um argumento a ser utilizado na função referenciada como primeiro argumento,
        ex: setTimeout(console.log, 1500, 'olá', 'tudo bem?')
                       como o método log recebe o que será mostrado no console, mostrará 'olá tudo bem?', os dois argumentos passados concatenados

**scrollTo**

    método que recebe dois argumentos (coordenada Y e coordenada X) do elemento que deve ser exibido no canto esquerdo superior da tela.
    ex: scrollTo(0, 0)
                a página é rolada para o topo

**setInterval()**

    é similiar ao setTimeout, mas no serInterval a função ocorre recorrentemente de acordo com o tempo passado como argumento.
    ex: setInterval(() => {}, 1000)
    
**ETAPA 08______________________________________________________________________________________________________________________________________________________________________________**

**sort()**

    método de array que organiza em um novo array em ordem alfabética/numérica.

**array.FIND**

    método que executa uma função callback em um array até retornar um valor truthy. Quando encontrar o booleano positivo, para de interar sobre o array.

**ETAPA 09______________________________________________________________________________________________________________________________________________________________________________**

**trim()**

    método que remove espaços em branco no início e no final de strings

**EVENT DELLEGATION**

    Evente dellegation é um padrão comum em JS. Ao invés de atribuir listeners de evento em cada elemento filho, é possível adicionar apenas um no elemento pai comum e usa o 'event.target' para
    determinar o elemento específico que acionou o evento.

**ETAPA 10______________________________________________________________________________________________________________________________________________________________________________**


