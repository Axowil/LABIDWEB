


//Ejercicio 1 : Esto saca el promedio de 5 notas ingresadas 
let contador = 0 ;
let total = 0 ; 

while (contador < 5) {
    let nota=0;
    nota=parseFloat(prompt("Ingrese la nota del estudiante (0-20): "));
    if (nota >=0 && nota <=20) {
        total+=nota; 
        contador++;
    } else {
        alert("Nota fuera del rango") ;
    }
}
let promedio = total / 5 ;

console.log('promedio de notas : ' +promedio ) ;
alert('Promedio de notas: ' + promedio) ;