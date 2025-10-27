let continuar = true;
let total = 0;
let cantidadProductos = 0;

while(continuar) {
    let precio = parseFloat(prompt('Ingrese el precio del producto:'));
    
    total = total + precio;
    cantidadProductos++;
    
    let respuesta = prompt('¿Desea agregar otro producto? (si/no)');
    
    if(respuesta === 'no') {
        continuar = false;
    }
}

// Mostrar total parcial
alert(`Total de productos: ${cantidadProductos}\nTotal parcial: $${total.toFixed(2)}`);

// Calcular descuento
let descuento = 0;
let mensaje = '';

if(total > 100) {
    descuento = total * 0.10;
    mensaje = 'Tiene un descuento del 10%';
} else if(total >= 50 && total <= 100) {
    descuento = total * 0.05;
    mensaje = 'Gana un cupon de 5%';
} else {
    mensaje = 'No aplica descuento';
}

// Calcular total final
let totalFinal = total - descuento;

// Mostrar resultado final
alert(`${mensaje}\n\n` +
        `Total parcial: $${total.toFixed(2)}\n` +
        `Descuento: $${descuento.toFixed(2)}\n` +
        `Total final: $${totalFinal.toFixed(2)}`);
