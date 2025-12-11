salario_base = float(input("Ingrese el salario base: "))
horas_extras = float(input("Ingrese las horas extras trabajadas: "))
if (horas_extras > 0):
    pago_hora_extra = float(input("Ingrese el pago por hora extra: "))
bono = float(input("Ingrese el monto del bono: "))
afp = float(input("Ingrese el porcentaje de AFP: "))
salud = float(input("Ingrese el porcentaje de Salud: "))

salario_bruto = salario_base + (horas_extras * pago_hora_extra) + bono
descuentos = (salario_base * afp / 100) + (salario_base * salud / 100)
salario_neto = salario_bruto - descuentos

print("--- Resultados ---")
print("Salario bruto:", salario_bruto)
print("Descuentos totales:", descuentos)
print("Salario neto:", salario_neto)