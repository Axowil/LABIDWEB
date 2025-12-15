from geometria import Rectangulo,Triangulo,Circulo


def demostrar_figuras():
    print("EJERCICIO 6 ")
    print()
    
    figuras = [
        Rectangulo(5, 3),
        Triangulo(3, 4, 5),
        Circulo(2.5)
    ]
    
    for i, figura in enumerate(figuras, 1):
        print(f"Figura {i}: {figura.__class__.__name__}")
        print(f"  Área: {figura.calcular_area():.2f}")
        print(f"  Perímetro: {figura.calcular_perimetro():.2f}")
        print()
        
if __name__ == "__main__":
    demostrar_figuras() 