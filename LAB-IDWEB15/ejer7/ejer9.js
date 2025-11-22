//Ejercicio 9

const btejercicio9 = document.getElementById("ejer9");

btejercicio9.addEventListener("click", () => {
    const div = document.getElementById("ejercicio9");
    const nuevoP = document.createElement("p");
    
    nuevoP.textContent = "Elemento insertado con JS";
    
    div.appendChild(nuevoP);
});
