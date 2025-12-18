
class OperacionInvalidaException(Exception):
    pass

def realizar_operacion(operacion_str):
    try:
        print(f'Operación recibida: "{operacion_str}"')
        componentes = operacion_str.strip().split(' ')
        if len(componentes) != 3:
            raise OperacionInvalidaException(
                "No valido  'numero1 operador numero2'"
            )
        
        num1_str, operador, num2_str = componentes
        
        try:
            numero1 = float(num1_str)
            numero2 = float(num2_str)
        except ValueError:
            raise ValueError(
                f"Datos incorrectos: '{num1_str}' y '{num2_str}' deben ser números"
            )
        
        operadores_validos = ['+', '-', '*', '/']
        if operador not in operadores_validos:
            raise OperacionInvalidaException(
                f"Datos Incorrectos '{operador}'. Use: {', '.join(operadores_validos)}"
            )
        
        if operador == '+':
            resultado = numero1 + numero2
        elif operador == '-':
            resultado = numero1 - numero2
        elif operador == '*':
            resultado = numero1 * numero2
        elif operador == '/':
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
        except Exception: e ;
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