//Ejercicio 15
const btejercicio15 = document.getElementById("ejer15");

btejercicio15.addEventListener("click", () => {
    const primerArticle = document.querySelector("article")

    const nuevoArticle = primerArticle.cloneNode(true);

    nuevoArticle.id = "articleClonado";

    document.querySelector("main").appendChild(nuevoArticle);
});