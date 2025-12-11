def crearMatriz(n):
    nuevaMatriz = []
    for _ in range(n):
        nuevaFila = []
        for _ in range(n):
            nuevaFila.append(None)
        nuevaMatriz.append(nuevaFila)
    return nuevaMatriz

def mostrarMatriz(arreglo):
    for i in range(len(arreglo)):
        for j in range(len(arreglo[i])):
            print(arreglo[i][j], end="\t")
        print("")

def llenarEspiral(arreglo):
    lado = len(arreglo)
    arriba = lado
    derecha = lado-1
    abajo = lado-1
    izquierda = lado-2
    contador = 0
    i = 0
    j = -1
    while True:
        for _ in range(arriba):
            j += 1
            contador += 1
            arreglo[i][j] = contador
        for _ in range(derecha):
            i += 1
            contador +=1
            arreglo[i][j] = contador
        for _ in range(abajo):
            j -= 1
            contador+=1
            arreglo[i][j] = contador
        for _ in range(izquierda):
            i -= 1
            contador+=1
            arreglo[i][j] = contador
        arriba -= 2
        derecha -= 2
        abajo -= 2
        izquierda -=2
        if arriba == 1:
            j += 1
            contador += 1
            arreglo[i][j] = contador
        if contador == lado*lado:
            break

numeroString = input("Ingresar el numero N: ")
if (numeroString.isnumeric() and int(numeroString) > 2):
    numero = int(numeroString)
    miMatriz = crearMatriz(3)
    llenarEspiral(miMatriz)
    mostrarMatriz(miMatriz)
else:
    print("Numero no cumple con los requisitos")