/*9. Galería con miniaturas: crear una galería donde al hacer clic en una miniatura (img)
se muestre la imagen grande en un <div> principal*/

const miniaturas = document.querySelectorAll(".galeria-miniaturas img");
const galeriaPrincipal = document.getElementById("galeriaPrincipal");

miniaturas.forEach(img => {
    img.addEventListener("click", () => {
        galeriaPrincipal.innerHTML = `<img src="${img.src}">`;
    });
});
