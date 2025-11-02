function ejecutarOperacion(funcion, num1, num2) {
    return funcion(num1, num2);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

console.log(ejecutarOperacion(suma, 10, 5)); 
console.log(ejecutarOperacion(resta, 10, 5));