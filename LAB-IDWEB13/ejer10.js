const capitales = new Map([
    ["Colombia", "Bogotá"],
    ["Argentina", "Buenos Aires"],
    ["Perú", "Lima"]
])

function invertirOrden(map) {
    const invertido = new Map();
    for (let [pais, capital] of map) {
        invertido.set(capital, pais);
    }
    return invertido;
}
invertirOrden(capitales);
console.log(invertirOrden(capitales));