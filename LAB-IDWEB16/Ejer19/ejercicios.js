/*19. Convierte un objeto JSON en objeto JS, modifica un valor (por ejemplo: edad o precio),
y vuelve a convertirlo a JSON actualizado*/


const personaJSON19 = '{"nombre":"Willian","edad":19,"ciudad":"Arequip"}';

console.log("\n=== EJERCICIO 19 ===");
console.log("Antes:", personaJSON19);

const persona19 = JSON.parse(personaJSON19);  
persona19.edad = 24;  
persona19.ciudad = "Arequipa";

const personaActualizadaJSON = JSON.stringify(persona19);
console.log("Después:", personaActualizadaJSON);