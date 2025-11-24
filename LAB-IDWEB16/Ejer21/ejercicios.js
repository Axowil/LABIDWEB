/*21. Define un JSON con una lista de tareas (título, completada). Crea dinámicamente una
lista en el DOM que muestre el estado de cada tarea (por ejemplo, con color verde si está
completada)*/

const tareasJSON = '[{"titulo":"Ir a la tienda","completada":true},{"titulo":"Estudiar Calculo","completada":false},{"titulo":"Hacer ejercicio","completada":true}]';

const tareas = JSON.parse(tareasJSON);

const ul21 = document.createElement("ul");
ul21.innerHTML = tareas.map(tarea => 
    `<li class="${tarea.completada ? 'completada' : ''}">${tarea.titulo}</li>`
).join('');

document.getElementById("Ejercicio21").appendChild(ul21);
