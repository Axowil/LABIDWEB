

//Este ejercicio suma los numeros hasta n sin contar los 5

let numero = parseInt(prompt('Introducir un numero de (1,n) exepto los 5'))

let contador= 0 ; 
//booleano para restringir los numeros diferentes de 5
function esCinco(num){
    if(num%5==0) return false;
    else return true;
}
for(let i = 1 ; i<=numero;i++){
    if(esCinco(i)){
        contador+=i;
        console.log('los numeros son ' + i)
    }
}
console.log('La suma es  :'+ contador)