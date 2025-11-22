// Ejercicio 18
const btejercicio18 = document.getElementById("ejer18");

btejercicio18.addEventListener("click", () => {

    const listaSections = Array.from(document.querySelectorAll("section"));
    for (let index = 0; index < listaSections.length; index++) {
        console.log(listaSections[index]);
        listaSections[index].setAttribute("data-index", index); 
        listaSections[index].insertAdjacentHTML('beforeend', `<p style="color: red; font-weight: bold;">[Resultado: data-index="${index}"]</p>`);
    }
}); 