const past = new Date('May 1 2020 07:47:00')
const present02 = new Date()

// quantidade de milisegundo que se passou desde 01/01/1970
console.log(present02.getTime(), past.getTime())

//para fazer a comparação entre as duas datas:
const difference = present02.getTime() - past.getTime()

console.log(difference)

const seconds = Math.round(difference / 1000)

console.log({ seconds })

const minutes = Math.round(seconds / 60)

console.log({ minutes })

const hours = Math.round(minutes / 60)

console.log({ hours })

const days = Math.round(hours / 24)

console.log({ days })

console.log(`Escrito hà ${days} dias`) 

const timeStamp = 111152936660

console.log(new Date(timeStamp))