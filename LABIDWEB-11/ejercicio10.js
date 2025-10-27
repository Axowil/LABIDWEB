
let notas = [];

let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas: "));
let index = 0;
while (index<cantidadNotas) {
    
    let nota = parseInt(prompt(`Ingrese nota ${index+1}: `));
    if (nota < 0 || nota > 20) {
        console.log("Error, nota no esta en el  rango 0-20");
    }
    else {
        notas.push(nota);
        index++;
    }
}
let continuar = true;

while (continuar) {
    
    let eleccion = parseInt(prompt((
        "Calcular estadisticas de N notas\n"+
        "1. Promedio\n"+
        "2. Valor Maximo\n"+
        "3. Valor Minimo\n"+
        "4. Cuantos pares e impares\n"+
        "5. Cuantos estan por encima del promedio\n"+
        "6. Salir\n"+
        "\nEleccion: "
    )));

    let promedioNotas = promedio(notas);
    let maximaNota = valorMaximoMinimo(notas, "maximo");
    let miniNota = valorMaximoMinimo(notas, "minimo");
    let notasPar = cantidadParImpar(notas, "par");
    let notasImpar = cantidadParImpar(notas, "impar");

    if (eleccion==1) {
        console.log("El promedio de las notas es: "+promedioNotas);    
    }
    else if (eleccion==2) {
        console.log(`Maxima nota: ${maximaNota}`);
    }
    else if (eleccion==3) {
        console.log(`Minima nota: ${miniNota}`);
    }
    else if (eleccion==4) {
        console.log(`Cantidad Par: ${notasPar} \nCantidad Impar: ${notasImpar}`);
    }
    else if (eleccion==5) {
        console.log(`Cantidad Notas mayor al promedio: ${notasMayoresPromedio(notas)}`);
    }
    else if (eleccion==6) {
        console.log("Gracias por usar el programa, adios");
        continuar = false;
    }
    else {
        console.log("Error, entrada no valida vuelv a probar");
    }

}

function promedio(notas) {
    let promedio = 0;

    for (let index = 0; index < notas.length; index++) {
        promedio+=notas[index];
    }

    return promedio /= notas.length;
}

function valorMaximoMinimo(notas, condicion) {
    
    if (condicion ==="maximo") {
        let maximo = notas[0];
        
        for (let index = 0; index < notas.length; index++) {
            if (notas[index]>maximo) {
                maximo = notas[index];
            }
        }

        return maximo;
    }
    else if (condicion === "minimo") {
        let minimo = notas[0];

        for (let index = 0; index < notas.length; index++) {
            if (notas[index]<minimo) {
                minimo = notas[index]++;
            }
        }

        return minimo;
    }
}

function cantidadParImpar(notas, condicion) {
    if (condicion=="par") {
        let par = 0;
        
        for (let index = 0; index < notas.length; index++) {
            if (notas[index]%2==0) {
                par++;
            }
        }

        return par;
    }
    else if (condicion == "impar") {
        let impar = 0;

        for (let index = 0; index < notas.length; index++) {
            if (notas[index]%2!=0) {
                impar++;
            }
        }

        return impar;
    }
}

function notasMayoresPromedio(notas) {
    let promedioNotas = promedio(notas);
    let cantidad = 0;

    for (let index = 0; index < notas.length; index++) {
        if (notas[index]>=promedioNotas) {
            cantidad++;
        }
    }

    return cantidad;
}