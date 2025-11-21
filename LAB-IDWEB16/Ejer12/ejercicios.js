/*12. Animación con DOM y CSS: hacer que al presionar un botón, un cuadrado (<div>)
se mueva horizontalmente usando classList.add("mover") y una animación CSS. Agrega un botón
"Reiniciar" que quite la clase*/

const btnMover12 = document.getElementById("btnMover12");
const btnReiniciar12 = document.getElementById("btnReiniciar12");
const cuadrado12 = document.getElementById("cuadrado12");

btnMover12.addEventListener("click", () => {
    cuadrado12.classList.add("mover");
});

btnReiniciar12.addEventListener("click", () => {
    cuadrado12.classList.remove("mover");
});