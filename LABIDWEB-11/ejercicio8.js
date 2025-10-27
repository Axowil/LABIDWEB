



let controlar = false;

while(!controlar){
    let opcion = parseInt(prompt(
        'Elige una opción:\n' +
        '1: Calcular área del círculo\n' +
        '2: Calcular área del rectángulo\n' +
        '3: Salir'
    ));

    switch (opcion) {
        case 1: 
            let radio = parseFloat(prompt('Introducir el radio:'));
            let areaCirc = areaCirculo(radio);
            alert(`El área del círculo es: ${areaCirc.toFixed(2)}`);
            break;
            
        case 2: 
            let base = parseFloat(prompt('Introducir la base:'));
            let altura = parseFloat(prompt('Introducir la altura:'));
            let areaRect = areaRectangulo(base, altura);
            alert(`El área del rectángulo es: ${areaRect.toFixed(2)}`);
            break;
            
        case 3: 
            alert('Saliendo del sistema');
            controlar = true;
            break;
            
        default:
            alert('Opción inválida. Solo(1,2,3)');
            break;
    }
}

function areaCirculo(radio){
    const PI = Math.PI;
    return PI * radio * radio;
}

function areaRectangulo(base, altura){
    return base * altura;
}

