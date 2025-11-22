//Ejercicio 21

const btejercicio21CP = document.getElementById("ejerCrear");
const btejercicio21EP = document.getElementById("ejerEliminar");
const div = document.getElementById("ejercicio21");

btejercicio21CP.addEventListener("click", () => {
    for (let index = 0; index < 3; index++) {
        const parrafo = document.createElement("p");
        parrafo.textContent = "Parrafo "+ (index+1);
        div.appendChild(parrafo);
    }
});

btejercicio21EP.addEventListener("click", () => {
    const listaParrafos = Array.from(div.children);

    for (let index = 0; index < listaParrafos.length; index++) {
        if(index==1) {
            listaParrafos[index].remove();
        }
        
    }
});