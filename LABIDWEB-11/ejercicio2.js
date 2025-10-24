



//Segun la edad que ingrese se le menciona en que etapa de la vida esta

let edad = prompt('Ingrese su edad :')

if(edad >=60){
    console.log('Adulto mayor')
}else if(edad >=18 && edad <60) {
    console.log('Adulto')
}else if(edad >=12 && edad <18) {
    console.log('Adolescente')
}else if (edad<12){
    console.log('Niño')
}