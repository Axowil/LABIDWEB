function mostrarDatos(nombre, edad, ...hobbies) {
    return "Nombre: "+nombre+"\nEdad: "+edad+"\nHobies: "+hobbies.join(", ");
}

console.log(mostrarDatos("Will", 15 , "leer", "viajar", "cocinar"));
console.log(mostrarDatos("Cmero", 24, "futbol", "cine"));    