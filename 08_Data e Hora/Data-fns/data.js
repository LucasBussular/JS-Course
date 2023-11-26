const present = new Date()

console.log(dateFns.format(present, 'MMMM'))
console.log(dateFns.format(present, 'YYYY'))
console.log(dateFns.format(present, 'dddd'))
console.log(dateFns.format(present, 'DD/MM/YYYY'))

const past = new Date('Apr 7 2023 19:00:00')

console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))