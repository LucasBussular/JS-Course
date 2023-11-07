// event bubbling e event delegation

// event bubbling: o evento é iniciado no target, que é o elemento no qual o evento foi adicionado, e esse evento se propaga em direção ao elemento pai para que os callbacks
//                de evento que seus pais tenham sejam disparados também
//                ex: evento de click em uma li > js checa se há algum evento na ul e o dispara > js verifica se há algum evento no body e dispara
// para impedir que a propagação aconteça, podemos usar o método stopPopagation dentro do event listener.



