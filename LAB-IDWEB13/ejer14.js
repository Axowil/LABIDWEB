function gestionarEmpleados(empleados) {
    const mapa = new Map();

    for (const emp of empleados) {
        if (!mapa.has(emp.area)) {
            mapa.set(emp.area, []);
        }
        mapa.get(emp.area).push(emp.nombre);
    }

    return mapa;
}

const empleados = [
    { id: 1, nombre: "Willian", area: "Ventas", salario: 2500 },
    { id: 2, nombre: "Johan", area: "TI", salario: 3200 },
    { id: 3, nombre: "Gian", area: "Ventas", salario: 2700 },
    { id: 4, nombre: "Marcelo", area: "Recursos Humanos", salario: 3000 },
]

console.log(gestionarEmpleados(empleados));
gestionarEmpleados(empleados);