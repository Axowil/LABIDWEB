const gradosARadianes = (grados) => {
    radianes = grados * (Math.PI/180);
};

const radianesAGrados = (radianes) => {
    grados = radianes * (180/Math.PI);
};

let angulo1grados = 45; 
let angulo2radianes = Math.PI; 

console.log("Angulo1: "+angulo1grados+"\nCoseno: "+Math.cos(angulo1grados).toFixed(2)+"\nSeno: "+Math.sin(angulo1grados).toFixed(2));
console.log("Angulo2: "+angulo2radianes.toFixed(2)+"\nCoseno: "+Math.cos(angulo2radianes).toFixed(2)+"\nSeno: "+Math.sin(angulo2radianes).toFixed(2));