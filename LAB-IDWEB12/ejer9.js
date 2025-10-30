const calcularDescuento = function (precio, porcentaje) {
    return (precio*porcentaje)/100;
}

console.log(calcularDescuento(200, 15)); // 30
console.log(calcularDescuento(50, 20)); // 10