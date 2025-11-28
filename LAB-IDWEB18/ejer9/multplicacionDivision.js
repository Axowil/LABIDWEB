const multiplicacion = (a, b) => a * b;
export default multiplicacion;

export const division = (a,b) => {
    if (b === 0) throw new Error("No se puede dividir entre cero.");
    return a/b;
}