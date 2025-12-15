import json;
from typing import Dict;

class EquipoFutbol:
    def __init__(self, nombre: str, pais: str, nivel_ataque: int, nivel_defensa: int):
        self.nombre = nombre
        self.pais = pais
        self.nivel_ataque = nivel_ataque
        self.nivel_defensa = nivel_defensa
    
    def to_dict(self):
        return {
            'nombre': self.nombre,
            'pais': self.pais,
            'nivelAtaque': self.nivel_ataque,
            'nivelDefensa': self.nivel_defensa
        }

def crear_equipos() -> Dict[str, EquipoFutbol]:
    equipos = {
        'barcelona': EquipoFutbol('FC Barcelona', 'España', 95, 85),
        'real_madrid': EquipoFutbol('Real Madrid', 'España', 93, 88),
        'bayern': EquipoFutbol('Bayern Múnich', 'Alemania', 91, 90),
        'psg': EquipoFutbol('PSG', 'Francia', 92, 82),
        'manchester_city': EquipoFutbol('Manchester City', 'Inglaterra', 94, 89)
    }
    return equipos

def convertir_equipos_a_json(equipos: Dict[str, EquipoFutbol]) -> str:
    datos = {clave: equipo.to_dict() for clave, equipo in equipos.items()}
    return json.dumps(datos, indent=2, ensure_ascii=False)

def demostrar_equipos():
    print("\n EJERCICIO 8: \n")
    
    equipos = crear_equipos()
    
    # Mostrar equipos
    for clave, equipo in equipos.items():
        print(f"{equipo.nombre} ({equipo.pais})")
        print(f"  Ataque: {equipo.nivel_ataque}, Defensa: {equipo.nivel_defensa}")
    
    # Convertir a JSON
    json_equipos = convertir_equipos_a_json(equipos)
    print(f"\n{json_equipos}")
    
    # Guardar en archivo
    with open('equipos.json', 'w', encoding='utf-8') as f:
        f.write(json_equipos)
    print("\nDatos guardados en 'equipos.json'")

    
if __name__ == "__main__":
    demostrar_equipos()