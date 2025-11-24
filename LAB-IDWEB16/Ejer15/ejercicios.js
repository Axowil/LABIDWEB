/*15. Declara una cadena JSON y conviértela en objeto con JSON.parse(). Muestra uno de
sus valores en el DOM (por ejemplo, dentro de un <p>)*/

const personaJSON = '{"nombre":"David","edad":35,"ciudad":"Arequipa"}';

const persona15 = JSON.parse(personaJSON);

document.getElementById("Ejercicio15").innerHTML += `<p>Nombre: ${persona15.nombre}</p>`;
document.getElementById("Ejercicio15").innerHTML += `<p>Nombre: ${persona15.edad}</p>`;
document.getElementById("Ejercicio15").innerHTML += `<p>Nombre: ${persona15.ciudad}</p>`;
