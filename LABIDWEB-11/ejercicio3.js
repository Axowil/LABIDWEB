


//Es un contador de pares e impares 

let contador = 1;
let contarPar = 0;
let contarImpar = 0;
while (contador <= 10) {
    alert('Introducir 10 numeros');
    let numero = parseInt(prompt('Introducir el ' + contador + ' numero ')); 
    contador++;
    if (numero % 2 === 0) {
        contarPar++;
    } else {
        contarImpar++;
    }
}
console.log('Los numeros pares  son ' + contarPar);
console.log('Los numeros impares  son ' + contarImpar); 
