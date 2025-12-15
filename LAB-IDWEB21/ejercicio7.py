import shutil;

# EJERCICIO 7: Copiar archivos

def copiar_archivo_texto(origen: str, destino: str):
    try:
        with open(origen, 'r', encoding='utf-8') as f_origen:
            with open(destino, 'w', encoding='utf-8') as f_destino:
                for linea in f_origen:
                    f_destino.write(linea)
        print(f"Archivo de texto copiado: {origen} → {destino}")
    except FileNotFoundError:
        print(f"Error el archivo {origen} no existe")
    except Exception as e:
        print(f"Error al copiar archivo de texto: {e}")

def copiar_archivo_binario(origen: str, destino: str):
    try:
        shutil.copy2(origen, destino)
        print(f"Archivo binario copiado: {origen} → {destino}")
    except FileNotFoundError:
        print(f"Error el archivo {origen} no existe")
    except Exception as e:
        print(f"Error al copiar archivo binario: {e}")

def demostrar_copia_archivos():
    print("\n EJERCICIO 7: \n")
    
    # Crear archivo de prueba
    with open('prueba.txt', 'w', encoding='utf-8') as f:
        f.write("Este es un archivo de prueba\n")
        f.write("Con múltiples líneas\n")
        f.write("Para demostrar la copia\n")
    
    copiar_archivo_texto('prueba.txt', 'copia_texto.txt')
    
    with open('prueba.bin', 'wb') as f:
        f.write(bytes([1, 2, 3, 4, 5]))
    
    # Copiar archivo binario
    copiar_archivo_binario('prueba.bin', 'copia_binaria.bin')
    
if __name__ == "__main__":
    demostrar_copia_archivos() 