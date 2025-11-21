/*10. Tabla dinámica desde JavaScript: generar una tabla HTML al presionar un botón,
a partir de un arreglo de objetos
const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
];*/

const btnTabla10 = document.getElementById("btnTabla10");

btnTabla10.addEventListener("click", () => {
    const productos = [
        { nombre: "Laptop", precio: 3500 },
        { nombre: "Mouse", precio: 80 },
    ];
    
    const seccion = document.getElementById("Ejercicio10");
    const tablaAnterior = seccion.querySelector("table");
    if (tablaAnterior) tablaAnterior.remove();
    
    const keys = Object.keys(productos[0]);
    
    const tabla = document.createElement("table");
    tabla.innerHTML = `
        <thead>
            <tr>
                ${keys.map(k => `<th>${k}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${productos.map(p => `
                <tr>
                    ${keys.map(k => `<td>${p[k]}</td>`).join('')}
                </tr>
            `).join('')}
        </tbody>
    `;
    
    seccion.appendChild(tabla);
});