
let numero = parseFloat(prompt('Introducir el precio del producto : '))

const redondeoAbajo=Math.floor(numero);
const redondeoArriba=Math.ceil(numero);
const redondeoNormal =Math.round(numero);

console.log(`El Redondeo abajo es :  ${redondeoAbajo}`)
console.log(`El Redondeo arriba es : ${redondeoArriba} `)
console.log(`El Redondeo normal es : ${redondeoNormal}`)

