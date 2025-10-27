

//Esto me da los numeros primos hasta N 

let numero = parseInt(prompt('Introducir un numero n (1,n)'));

//metodo para vericar si es primo
function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}
for(let i = 1; i <= numero; i++) {
    if(esPrimo(i)) {
        console.log( (i) + ' es un numero primo');
    }
}
