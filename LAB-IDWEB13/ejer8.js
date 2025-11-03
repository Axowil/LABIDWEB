let precios = new Map([
    ["manzana", 5.0],
    ["platano", 2.50],
    ["naranja", 6.0]
]);
precios.set("pera", 3.0);

let sumaTotal = 0;
for (let [fruta, precio] of precios) {
    sumaTotal += precio;
}

console.log("La suma total de los precios es: " + sumaTotal);