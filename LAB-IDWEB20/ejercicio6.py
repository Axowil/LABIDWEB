import numpy as np
def normalizar(lista, modo):
    arr = np.array(lista, dtype=float)
    if arr.size == 0:
        print("La lista no puede estar vacia.")
        return
    match modo:
        case "minmax":
            minimo = arr.min()
            maximo = arr.max()
            if minimo == maximo:
                print("No se puede realizar minmax ya que toda la lista es igual.")
                return
            return (arr - minimo) / (maximo - minimo)
        case "zscode":
            media = arr.mean()
            desviacion = arr.std()
            if desviacion == 0:
                print("No se puede calcular zscode ya que la desviacion es 0.")
                return
            return (arr - media) / desviacion
        case "unit":
            norma = np.sqrt(np.sum(arr ** 2))
            if norma == 0:
                print("No se puede realizar unit ya que la norma es 0.")
                return
            return arr / norma
        case _:
            print("Modo ingresado no valido.")
            return

while True:
    modoSeleccionado = input("Ingrese un modo (minmax, zscode, unit, salir) : ")
    if modoSeleccionado.lower() == "salir":
        print("Gracias por usar este programa.")
        break
    lista = [10, 20, 30]
    print(normalizar(lista, modoSeleccionado))