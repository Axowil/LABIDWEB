
/*16. Crea un arreglo de objetos productos (nombre, precio). Convierte a JSON y luego
vuelve a objeto. Muestra los nombres en una lista <ul> generada dinámicamente*/

const productos = [
    { nombre: "Laptop", precio: 2500 },
    { nombre: "Mouse", precio: 105 },
    { nombre: "Teclado", precio: 150 }
];

const productosJSON = JSON.stringify(productos);
console.log("JSON:", productosJSON);

const productosObjeto = JSON.parse(productosJSON);

const seccion16 = document.getElementById("Ejercicio16");

const ul = document.createElement("ul");
ul.innerHTML = productosObjeto.map(p => `<li>${p.nombre}</li>`).join('');
seccion16.appendChild(ul);