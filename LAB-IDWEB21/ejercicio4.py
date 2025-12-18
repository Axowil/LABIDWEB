from abc import ABC, abstractmethod
from enum import Enum

class FormatoLibro(Enum):
    PDF = "PDF"
    EPUB = "EPUB"
    MOBI = "MOBI"

# Clase base abstracta Libro
class Libro(ABC):
    def __init__(self, titulo, autor, anio):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.disponible = True
    
    @abstractmethod
    def prestar(self):
        pass
    
    @abstractmethod
    def devolver(self):
        pass
    
    @abstractmethod
    def mostrar_info(self):
        pass

# Clase LibroFisico
class LibroFisico(Libro):
    def __init__(self, titulo, autor, anio):
        super().__init__(titulo, autor, anio)
    
    def prestar(self):
        if self.disponible:
            self.disponible = False
            return f" Libro físico '{self.titulo}' prestado exitosamente"
        else:
            return f" El libro físico '{self.titulo}' no está disponible"
    
    def devolver(self):
        if not self.disponible:
            self.disponible = True
            return f" Libro físico '{self.titulo}' devuelto exitosamente"
        else:
            return f" El libro físico '{self.titulo}' no estaba prestado"
    
    def mostrar_info(self):
        estado = "Disponible" if self.disponible else "Prestado"
        return (f"[LIBRO FÍSICO]\n"
                f"  Título: {self.titulo}\n"
                f"  Autor: {self.autor}\n"
                f"  Año: {self.anio}\n"
                f"  Estado: {estado}")

# Clase LibroDigital
class LibroDigital(Libro):
    def __init__(self, titulo, autor, anio, formato):
        super().__init__(titulo, autor, anio)
        self.formato = formato
        self.disponible = True 
    
    def prestar(self):
       
        return f"✓ Acceso al libro digital '{self.titulo}' concedido (no se presta físicamente)"
    
    def devolver(self):
        return f"ℹ Los libros digitales no requieren devolución"
    
    def mostrar_info(self):
        return (f"[LIBRO DIGITAL]\n"
                f"  Título: {self.titulo}\n"
                f"  Autor: {self.autor}\n"
                f"  Año: {self.anio}\n"
                f"  Formato: {self.formato.value}\n"
                f"  Estado: Siempre disponible")

# Clase Biblioteca
class Biblioteca:
    def __init__(self):
        self.libros = []
    
    def agregar_libro(self, libro):
        self.libros.append(libro)
        print(f" Libro '{libro.titulo}' agregado a la biblioteca")
    
    def listar_libros(self):
        if not self.libros:
            print("La biblioteca está vacía")
            return
        
        for i, libro in enumerate(self.libros, 1):
            print(f"\n{i}. {libro.mostrar_info()}")
    
    def buscar_por_titulo(self, titulo):
        libros_encontrados = [libro for libro in self.libros 
                             if titulo.lower() in libro.titulo.lower()]
        
        if libros_encontrados:
            print(f"\n Se encontraron {len(libros_encontrados)} libro(s):")
            for libro in libros_encontrados:
                print(f"\n{libro.mostrar_info()}")
            return libros_encontrados
        else:
            print(f" No se encontraron libros con el título '{titulo}'")
            return []
    
    def buscar_por_autor(self, autor):
        libros_encontrados = [libro for libro in self.libros 
                             if autor.lower() in libro.autor.lower()]
        
        if libros_encontrados:
            print(f"\n Se encontraron {len(libros_encontrados)} libro(s) del autor '{autor}':")
            for libro in libros_encontrados:
                print(f"\n{libro.mostrar_info()}")
            return libros_encontrados
        else:
            print(f" No se encontraron libros del autor '{autor}'")
            return []
    
    def prestar_libro_fisico(self, titulo):
        print(f"\n--- Intentando prestar libro físico: '{titulo}' ---")
        libros_encontrados = [libro for libro in self.libros 
                             if titulo.lower() in libro.titulo.lower() 
                             and isinstance(libro, LibroFisico)]
        
        if not libros_encontrados:
            print(f" No se encontró libro físico con título '{titulo}'")
            return False
        
        libro = libros_encontrados[0]
        print(libro.prestar())
        return libro.disponible == False
    
    def prestar_libro_digital(self, titulo):
        print(f"\n--- Intentando acceder a libro digital: '{titulo}' ---")
        libros_encontrados = [libro for libro in self.libros 
                             if titulo.lower() in libro.titulo.lower() 
                             and isinstance(libro, LibroDigital)]
        
        if not libros_encontrados:
            print(f" No se encontró libro digital con título '{titulo}'")
            return False
        
        libro = libros_encontrados[0]
        print(libro.prestar())
        return True
    
    def devolver_libro(self, titulo):
        print(f"\n--- Intentando devolver libro: '{titulo}' ---")
        libros_encontrados = [libro for libro in self.libros 
                             if titulo.lower() in libro.titulo.lower()]
        
        if not libros_encontrados:
            print(f" No se encontró libro con título '{titulo}'")
            return False
        
        libro = libros_encontrados[0]
        print(libro.devolver())
        return True
    
    def intentar_prestar_prestado(self, titulo):
        print(f"\n--- Intentando prestar libro ya prestado: '{titulo}' ---")
        libros_encontrados = [libro for libro in self.libros 
                             if titulo.lower() in libro.titulo.lower() 
                             and isinstance(libro, LibroFisico)]
        
        if libros_encontrados:
            libro = libros_encontrados[0]
            print(libro.prestar())


# Programa principal
if __name__ == "__main__":
    # Crear biblioteca
    biblioteca = Biblioteca()

    print("SISTEMA DE GESTIÓN DE BIBLIOTECA")
    
    
    # Agregar 3 libros físicos
    print("\n--- Agregando libros fisicos ---")
    libro1 = LibroFisico("Cien Años de Soledad", "Gabriel García Márquez", 1967)
    libro2 = LibroFisico("Don Quijote de la Mancha", "Miguel de Cervantes", 1605)
    libro3 = LibroFisico("El Principito", "Antoine de Saint-Exupéry", 1943)
    
    biblioteca.agregar_libro(libro1)
    biblioteca.agregar_libro(libro2)
    biblioteca.agregar_libro(libro3)
    
    # Agregar 2 libros digitales
    print("\n--- Agregando libros digitales ---")
    libro4 = LibroDigital("1984", "George Orwell", 1949, FormatoLibro.PDF)
    libro5 = LibroDigital("El Código Da Vinci", "Dan Brown", 2003, FormatoLibro.EPUB)
    
    
    biblioteca.agregar_libro(libro4)
    biblioteca.agregar_libro(libro5)
    
    # Listar todos los libros
    biblioteca.listar_libros()
    
    print("\n\n--- Busqueda por Titulo ---")
    biblioteca.buscar_por_titulo("Quijote")
    
    print("\n\n--- Busqueda por Autor ---")
    biblioteca.buscar_por_autor("García Márquez")
    
    # Prestar un libro físico
    print("\n\n--- Prestamo en libro fisico  ---")
    biblioteca.prestar_libro_fisico("Cien Años de Soledad")
    
    # Intentar prestar un libro ya prestado
    biblioteca.intentar_prestar_prestado("Cien Años de Soledad")
    
    # Prestar un libro digital
    print("\n\n--- Acceso a libros digitales ---")
    biblioteca.prestar_libro_digital("1984")
    biblioteca.prestar_libro_digital("1984")  # Se puede acceder múltiples veces
    
    # Devolver libro físico
    print("\n\n--- Devolucion de libro ---")
    biblioteca.devolver_libro("Cien Años de Soledad")
    
    # Intentar devolver un libro digital
    biblioteca.devolver_libro("1984")
    
    # Listar todos los libros nuevamente para ver los cambios
    biblioteca.listar_libros()
    