activo = True
lista_estudiantes = []

def registrar_estudiante(nombre, edad, promedio):
    nuevo_estudiante = {
        "nombre": nombre,
        "edad": edad,
        "promedio": promedio 
    }
    lista_estudiantes.append(nuevo_estudiante)

def mostrar_estudiantes():
    if len(lista_estudiantes) == 0:
        print("Lista de estudiantes vacia")
        return
    
    for i, estudiante in enumerate(lista_estudiantes, 1):
        print(f"{i}. {estudiante["nombre"]}, Edad: {estudiante["edad"]}, Promedio: {estudiante["promedio"]}")
    
def mejor_estudiante():
    if len(lista_estudiantes) == 0:
        print("Lista de estudiantes vacia")
        return
    
    estudiante = lista_estudiantes[0]
    for es in lista_estudiantes:
        if es["promedio"] > estudiante["promedio"]:
            estudiante = es
    return estudiante
    
def buscar_estudiante(nombre):
    for estudiante in lista_estudiantes:
        if estudiante["nombre"] == nombre:
            return estudiante
    return -1

def eliminar_estudiante(nombre):
    estudiante = buscar_estudiante(nombre)
    if estudiante != -1:
        lista_estudiantes.remove(estudiante)
        print("Estudiante elminiado")
    else:
        print("No se encontro este estudiante")

while activo:
    print("\n--- MENÚ ---")
    print("1. Agregar estudiante")
    print("2. Mostrar estudiantes")
    print("3. Mejor estudiante")
    print("4. Buscar estudiante")
    print("5. Eliminar estudiante")
    print("6. Salir")
        
    opcion = input("\nOpción: ")
    
    match opcion:
        case "1":
            print("Agregar estudiante")
            nombre = input("Ingrese nombre: ")
            edad = int(input("Ingrese edad: "))
            promedio = float(input("Ingrese promedio: "))
            registrar_estudiante(nombre, edad, promedio)
            print(f"Estudiante {nombre} agregado exitosamente")
        
        case "2":
            print("Mostrar estudiantes")
            mostrar_estudiantes()
            
        
        case "3":
            print("Mejor estudiante")
            print(mejor_estudiante())
            
        case "4":
            nombre = input("Ingrese nombre de estudiante: ")
            estudiante = buscar_estudiante(nombre)
            if estudiante != -1: print(f"Estudiante: {estudiante}")
            else: print("Estudiante no registrado")
        
        case "5":
            nombre = input("Ingrese nombre de estudiante: ")
            eliminar_estudiante(nombre)
            
        case "6":
            activo = False
        
        case _:
            print("Opcion no valida:")
            