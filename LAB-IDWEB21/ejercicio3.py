import math
from abc import ABC, abstractmethod

# Clase base abstracta
class Figura(ABC):
    @abstractmethod
    def calcular_area(self):
        pass
    @abstractmethod
    def calcular_perimetro(self):
        pass
    @abstractmethod
    def __str__(self):
        pass


# Clase Rectángulo
class Rectangulo(Figura):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
    
    def calcular_area(self):
        return self.base * self.altura
    
    def calcular_perimetro(self):
        return 2 * (self.base + self.altura)
    
    def __str__(self):
        return (f"Rectángulo:\n"
                f"  Base: {self.base}\n"
                f"  Altura: {self.altura}\n"
                f"  Área: {self.calcular_area():.2f}\n"
                f"  Perímetro: {self.calcular_perimetro():.2f}")


# Clase Triángulo
class Triangulo(Figura):
    def __init__(self, lado1, lado2, lado3):
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3
    
    def calcular_area(self):
        
        s = self.calcular_perimetro() / 2
        return math.sqrt(s * (s - self.lado1) * (s - self.lado2) * (s - self.lado3))
    
    def calcular_perimetro(self):
        return self.lado1 + self.lado2 + self.lado3
    
    def __str__(self):
        return (f"Triángulo:\n"
                f"  Lado 1: {self.lado1}\n"
                f"  Lado 2: {self.lado2}\n"
                f"  Lado 3: {self.lado3}\n"
                f"  Área: {self.calcular_area():.2f}\n"
                f"  Perímetro: {self.calcular_perimetro():.2f}")


# Clase Círculo
class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio
    
    def calcular_area(self):
        return math.pi * self.radio ** 2
    
    def calcular_perimetro(self):
        return 2 * math.pi * self.radio
    
    def __str__(self):
        return (f"Círculo:\n"
                f"  Radio: {self.radio}\n"
                f"  Área: {self.calcular_area():.2f}\n"
                f"  Perímetro: {self.calcular_perimetro():.2f}")


if __name__ == "__main__":
    # Crear una lista 
    figuras = [
        Rectangulo(5, 3),
        Triangulo(3, 4, 5),
        Circulo(4)
    ]
# Mostrar los datos de cada figura
print("Figuras geometricas")

    
for i, figura in enumerate(figuras, 1):
    print(f"\nFigura {i}:")
    print(figura)
    print()
  
    area_total = sum(f.calcular_area() for f in figuras)
    perimetro_total = sum(f.calcular_perimetro() for f in figuras)
    
    print(f"\nArea total de todas las figuras: {area_total:.2f}")
    print(f"Perímetro total de todas las figuras: {perimetro_total:.2f}")