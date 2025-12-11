while True:
    ingresoMensual = int(input("Ingresar el ingreso mensual (0 para salir): "))
    if (ingresoMensual == 0): break
    ingresoAnual = ingresoMensual * 14
    print("Su ingreso anual es de:", ingresoAnual)
    imp_tramo2 = 0
    imp_tramo3 = 0
    imp_tramo4 = 0

    if (ingresoAnual > 20_000):
        limite = min(50_000, ingresoAnual)
        monto = limite-20_000
        imp_tramo2 = monto/10
    if (ingresoAnual > 50_000):
        limite = min(100_000, ingresoAnual)
        monto = limite-50_000
        imp_tramo3 = monto*(1/5)
    if (ingresoAnual > 100_000):
        monto = ingresoAnual-100_000
        imp_tramo4 = monto*(3/10)
    impuesto_total = imp_tramo2+imp_tramo3+imp_tramo4
    tasa_efectiva = (impuesto_total/ingresoAnual)*100
    print(f"[0,20000] -> {0}")
    print(f"[20000,50000] -> {imp_tramo2}")
    print(f"[50000,100000] -> {imp_tramo3}")
    print(f"[100000, mas] -> {imp_tramo4}")
    print("Total de impuestos:",impuesto_total)
    print("Tasa efectiva real:",round(tasa_efectiva,2))
    print()
print("Fin del programa.")