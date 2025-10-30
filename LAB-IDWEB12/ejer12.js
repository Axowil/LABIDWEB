const agregarExclamacion = (frase) => frase + "!";
const aMayusculas = (frase) => frase.toUpperCase();

const componerTransformacion = (callback1, callback2) => {
    return (frase) => callback1(callback2(frase));
    
}
const transformar = componerTransformacion(aMayusculas, agregarExclamacion);
console.log(transformar("hola"));