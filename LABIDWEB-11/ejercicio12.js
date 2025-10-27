// Solicitar presupuesto inicial
let presupuesto = parseFloat(prompt('Ingrese su presupuesto disponible:'));
let presupuestoOriginal = presupuesto;

let total = 0;
let cantidadProductos = 0;
let continuar = true;

while(continuar) {
    let precio = parseFloat(prompt(`Presupuesto disponible: $${presupuesto.toFixed(2)}\n\nIngrese el precio del producto:`));
    
    // Verificar si el producto cabe en el presupuesto
    if(total + precio > presupuestoOriginal) {
        alert(`Presupuesto excedido\n\n` +
            `El producto de $${precio.toFixed(2)} supera su presupuesto.\n` +
            `Presupuesto disponible: $${presupuesto.toFixed(2)}\n` +
            `Este producto NO será agregado.`);
        continuar = false;
    } else {
        // Agregar producto al carrito
        total = total + precio;
        presupuesto = presupuesto - precio;
        cantidadProductos++;
        
        alert(`Producto agregado\n` +
            `Precio: $${precio.toFixed(2)}\n` +
            `Total actual: $${total.toFixed(2)}\n` +
            `Presupuesto restante: $${presupuesto.toFixed(2)}`);
        
        // Preguntar si desea continuar
        let respuesta = prompt('¿Desea agregar otro producto? (si/no)');
        
        if(respuesta === 'no') {
            continuar = false;
        }
    }
}

// Mostrar resumen si hay productos
if(cantidadProductos > 0) {
    alert(`RESUMEN DE COMPRA\n\n` +
        `Productos agregados: ${cantidadProductos}\n` +
        `Total parcial: $${total.toFixed(2)}\n` +
        `Presupuesto original: $${presupuestoOriginal.toFixed(2)}`);
    
    // Calcular descuento
    let descuento = 0;
    let mensaje = '';
    
    if(total > 100) {
        descuento = total * 0.10;
        mensaje = 'Tiene un descuento del 10%';
    } else if(total >= 50 && total <= 100) {
        descuento = total * 0.05;
        mensaje = 'Gana un cupón de 5%';
    } else {
        mensaje = 'No aplica descuento';
    }
    
    // Calcular total final
    let totalFinal = total - descuento;
    
    // Mostrar resultado final
    alert(`${mensaje}\n\n` +
        `Total parcial: $${total.toFixed(2)}\n` +
        `Descuento: $${descuento.toFixed(2)}\n` +
        `Total final a pagar: $${totalFinal.toFixed(2)}\n` +
        `Dinero sobrante: $${(presupuesto + descuento).toFixed(2)}`);
} else {
    alert('No se agregaron productos al carrito.');
}
