//Ejercicio 16
const btejercicio16 = document.getElementById("ejer16");

btejercicio16.addEventListener("click", () => {
    const primerUl = document.querySelector("#ejercicio16 ul");
    const ultimoLi = primerUl.lastElementChild;
    
    primerUl.lastElementChild.remove();
    const primerLi = ultimoLi.cloneNode(true);
    primerUl.prepend(primerLi);
});
