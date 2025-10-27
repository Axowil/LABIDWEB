function esArmstrong(numero) {
    // Convertir el número a string para contar dígitos
    let numString = numero.toString();
    let cantidadDigitos = numString.length;
    
    let suma = 0;
    let temporal = numero;
    
    // Extraer cada dígito y elevarlo a la potencia
    while(temporal > 0) {
        let digito = temporal % 10;
        suma += Math.pow(digito, cantidadDigitos);
        temporal = parseInt(temporal / 10);
    }
    
    // Verificar si la suma es igual al número original
    return suma === numero;
}

// Programa principal
let numero = parseInt(prompt('Introduce un número:'));

if(esArmstrong(numero)) {
    console.log(`${numero} es un número Armstrong`);
} else {
    console.log(`${numero} NO es un número Armstrong`);
}
