import time;
import threading;
from typing import List ;
import random ;

def consulta_base_datos(id_consulta: int, resultados: List):
    tiempo_espera = random.uniform(1, 5)
    print(f"Consulta {id_consulta}: Iniciando (esperando {tiempo_espera:.2f}s)")
    
    time.sleep(tiempo_espera)
    
    resultado = f"Resultado de consulta {id_consulta} (tardó {tiempo_espera:.2f}s)"
    resultados.append((id_consulta, resultado, tiempo_espera))
    print(f"Consulta {id_consulta}: Completada")

def ejecutar_consultas_concurrentes():
    print("\nEJERCICIO 9: \n")
    
    resultados = []
    hilos = []
    
    tiempo_inicio = time.time()
    
    for i in range(1, 4):
        hilo = threading.Thread(target=consulta_base_datos, args=(i, resultados))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    tiempo_total = time.time() - tiempo_inicio
    
    print(f"Todas las consultas completadas en {tiempo_total:.2f}s")
    print(f"Con ejecución secuencial hubiera tardado: {sum(r[2] for r in resultados):.2f}s")
    print(f"\nResultados:")
    for id_consulta, resultado, tiempo in sorted(resultados):
        print(f"  {resultado}")

    
if __name__ == "__main__":
        ejecutar_consultas_concurrentes()
        