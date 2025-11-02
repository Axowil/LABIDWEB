function descargarArchivo(url, callback) {
    console.log("Iniciando descarga desde: " + url);
    setTimeout(() => {
        const contenido = "Contenido del archivo desde " + url;
        console.log("Descarga completada ");
        callback(contenido);
    }, 2000);
}