/*11. Delegación de eventos: crear una lista <ul> que permita eliminar cualquier <li>
al hacer clic sobre él, sin asignar eventos
individualmente. Usa event.target dentro del listener del <ul>*/

const lista11 = document.getElementById("lista11");

lista11.addEventListener("click", (event) => {
    if (event.target.matches("li")) {event.target.remove();}
});