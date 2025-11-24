/*18. Define una variable con un JSON que simule una lista de libros. Parsea el JSON y
genera una tabla con sus títulos y autores usando el DOM*/

const librosJSON = '[{"titulo": "Rayuela", "autor": "Julio Cortázar"},{"titulo": "El amor en los tiempos del cólera", "autor": "Gabriel García Márquez"}]';

const libros = JSON.parse(librosJSON);
const keys = Object.keys(libros[0]);

const tabla = document.createElement("table");
tabla.innerHTML = `
    <thead>
        <tr>
            ${keys.map(key => `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`).join('')}
        </tr>
    </thead>
    <tbody>
        ${libros.map(libro => `
            <tr>
                ${keys.map(key => `<td>${libro[key]}</td>`).join('')}
            </tr>
        `).join('')}
    </tbody>
`;

document.getElementById("Ejercicio18").appendChild(tabla);