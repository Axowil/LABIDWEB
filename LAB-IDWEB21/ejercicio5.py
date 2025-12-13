# Clase personalizada para errores de operación
class OperacionInvalidaException(Exception):
    pass

def realizar_operacion(operacion_str):
    try:
        # mostrar la operación recibida
        print(f'Operación recibida: "{operacion_str}"')
        
        # separar los componentes del string
        componentes = operacion_str.strip().split(' ')
        
        # validar que tengamos exactamente 3 componentes
        if len(componentes) != 3:
            raise OperacionInvalidaException(
                "No valido  'numero1 operador numero2'"
            )
        
        num1_str, operador, num2_str = componentes
        
        # convertir strings a float
        try:
            numero1 = float(num1_str)
            numero2 = float(num2_str)
        except ValueError:
            raise ValueError(
                f"Datos incorrectos: '{num1_str}' y '{num2_str}' deben ser números"
            )
        
        # validar que el operador sea válido
        operadores_validos = ['+', '-', '*', '/']
        if operador not in operadores_validos:
            raise OperacionInvalidaException(
                f"Datos Incorrectos '{operador}'. Use: {', '.join(operadores_validos)}"
            )
        
        # realizar la operacion y manejar excepciones
        if operador == '+':
            resultado = numero1 + numero2
        elif operador == '-':
            resultado = numero1 - numero2
        elif operador == '*':
            resultado = numero1 * numero2
        elif operador == '/':
            # manejo especial para división por cero
            if numero2 == 0:
                raise OperacionInvalidaException("Division por cero no permitida")
            resultado = numero1 / numero2
        
        print(f' Resultado: {numero1} {operador} {numero2} = {resultado}')
        return resultado
        
    except OperacionInvalidaException as e:
        print(f' Error de operación: {e}')
        raise
    except ValueError as e:
        print(f' Error de valor: {e}')
        raise
    except Exception as e:
        print(f' Error : {e}')
        raise


if __name__ == "__main__":

    print("1. Operaciones validas:")
    operaciones_validas = ["10 / 2", "15 + 7", "20 - 8", "6 * 4"]
    for op in operaciones_validas:
        try:
            realizar_operacion(op)
        except Exception:
            pass
        print()
    
    while True:
        try:
            entrada = input(">> ")
            if entrada.lower() == 'salir':
                print("¡Hasta luego!")
                break
            realizar_operacion(entrada)
            print()
        except Exception:
            print()
            continue