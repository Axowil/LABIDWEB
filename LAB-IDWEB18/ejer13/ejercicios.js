// Ejercicio 13
const ejercicio13 = document.getElementById("ejercicio13");
ejercicio13.addEventListener("click", () => {
    console.log(validarInnerHtml("<h1> Soy Willian</h1>")); 
});

function validarInnerHtml(string) {
    const patron = /^<h1>(.*)<\/h1>$/ 

    const resultado = string.match(patron);

    if (resultado && resultado.length > 1) {

        return resultado[1].trim(); 
    } else {
        return null; 
    }
}