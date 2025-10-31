
const nombres = new Set();

for (let index = 0; index < 5; index++) {
    const nombre = prompt("Ingrese un nombre " + (index + 1) + ":");
    if (nombre !== null && nombre.trim() !== "") {
        nombres.add(nombre.trim());
    }
}

console.log("Nombres unicos:", Array.from(nombres));
