/*20. Cuando el usuario escriba su nombre en un <input> y haga clic en un botón, guarda
los datos en un objeto, conviértelo a JSON y muéstralo en consola*/

const inputNombre20 = document.getElementById("nombreInput20");
const btn20 = document.getElementById("btn20");

btn20.addEventListener("click", () => {
    const datos = {
        nombre: inputNombre20.value
    };
    
    const datosJSON = JSON.stringify(datos);
    console.log("=== Datos guardados ===");
    console.log(datosJSON);
});
