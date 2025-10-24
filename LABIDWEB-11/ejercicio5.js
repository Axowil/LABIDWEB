


//Este me da la menor cantidad de billetes del monto a retirar

let numero = parseInt(prompt('Ingrese el Monto a Retirar'))

let contador100=0;
let contador50=0;
let contador20=0;
let contador10=0;

//Billetes de 100
if (numero >= 100) {
    contador100 = Math.floor(numero / 100);
    numero = numero % 100;
//Billetes de 50
}
if (numero >= 50) {
    contador50 = Math.floor(numero / 50);
    numero = numero % 50;
}
//Billetes de 20
if (numero >= 20) {
    contador20 = Math.floor(numero / 20);
    numero = numero % 20;
}
//Billetes de 10
if (numero >= 10) {
    contador10 = Math.floor(numero / 10);
    numero = numero % 10;
}

console.log('Los billetes de 100 es '+contador100);
console.log('Los billetes de 50 es '+contador50);
console.log('Los billetes de 20 es '+contador20);
console.log('Los billetes de 10 es '+contador10);