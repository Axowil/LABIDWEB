const numeroAleatorio = (min, max) => {
    return Math.round((Math.random()*(max-min+1))+min);
}

console.log(numeroAleatorio(15,30));
console.log(numeroAleatorio(40,100));
console.log(numeroAleatorio(2,5));