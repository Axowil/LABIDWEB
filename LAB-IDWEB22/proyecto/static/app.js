const API_URL = 'http://localhost:8000';

// Elementos del DOM
const registroForm = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');
const listaEquipos = document.getElementById('listaEquipos');
const cargarEquiposBtn = document.getElementById('cargarEquipos');
const buscarBtn = document.getElementById('buscarBtn');
const buscarIdInput = document.getElementById('buscarId');
const resultadoBusqueda = document.getElementById('resultadoBusqueda');

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`;
    mensaje.style.display = 'block';
    
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 5000);
}

// Registrar nuevo equipo
registroForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const datos = {
        nombre: document.getElementById('nombre').value,
        ciudad: document.getElementById('ciudad').value,
        nivelAtaque: parseInt(document.getElementById('nivelAtaque').value),
        nivelDefensa: parseInt(document.getElementById('nivelDefensa').value)
    };
    
    try {
        const response = await fetch(`${API_URL}/equipos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        
        const resultado = await response.json();
        
        if (response.ok) {
            mostrarMensaje(`¡Equipo "${resultado.nombre}" registrado exitosamente con ID: ${resultado.id}!`, 'exito');
            registroForm.reset();
            cargarEquipos();
        } else {
            mostrarMensaje(`Error: ${resultado.error}`, 'error');
        }
    } catch (error) {
        mostrarMensaje('Error de conexión con el servidor', 'error');
        console.error('Error:', error);
    }
});

// Cargar todos los equipos
async function cargarEquipos() {
    listaEquipos.innerHTML = '<div class="cargando">Cargando equipos...</div>';
    
    try {
        const response = await fetch(`${API_URL}/equipos`);
        const equipos = await response.json();
        
        if (equipos.length === 0) {
            listaEquipos.innerHTML = '<div class="no-equipos">No hay equipos registrados</div>';
            return;
        }
        
        listaEquipos.innerHTML = equipos.map(equipo => `
            <div class="equipo-card">
                <h3>${equipo.nombre}</h3>
                <div class="equipo-info"><strong>ID:</strong> ${equipo.id}</div>
                <div class="equipo-info"><strong>Ciudad:</strong> ${equipo.ciudad}</div>
                <div class="stats">
                    <div class="stat">
                        <div class="stat-label">Ataque</div>
                        <div class="stat-value">${equipo.nivelAtaque}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Defensa</div>
                        <div class="stat-value">${equipo.nivelDefensa}</div>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        listaEquipos.innerHTML = '<div class="no-equipos">Error al cargar los equipos</div>';
        console.error('Error:', error);
    }
}

// Buscar equipo por ID
buscarBtn.addEventListener('click', async () => {
    const id = buscarIdInput.value;
    
    if (!id) {
        mostrarMensaje('Por favor ingrese un ID', 'error');
        return;
    }
    
    resultadoBusqueda.innerHTML = '<div class="cargando">Buscando...</div>';
    
    try {
        const response = await fetch(`${API_URL}/equipos/${id}`);
        const data = await response.json();
        
        if (response.ok) {
            resultadoBusqueda.innerHTML = `
                <div class="equipo-card">
                    <h3>${data.nombre}</h3>
                    <div class="equipo-info"><strong>ID:</strong> ${data.id}</div>
                    <div class="equipo-info"><strong>Ciudad:</strong> ${data.ciudad}</div>
                    <div class="stats">
                        <div class="stat">
                            <div class="stat-label">Ataque</div>
                            <div class="stat-value">${data.nivelAtaque}</div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">Defensa</div>
                            <div class="stat-value">${data.nivelDefensa}</div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            resultadoBusqueda.innerHTML = `
                <div class="mensaje error" style="display: block;">
                    ${data.error}
                </div>
            `;
        }
    } catch (error) {
        resultadoBusqueda.innerHTML = `
            <div class="mensaje error" style="display: block;">
                Error de conexión con el servidor
            </div>
        `;
        console.error('Error:', error);
    }
});

// Cargar equipos al inicio
cargarEquiposBtn.addEventListener('click', cargarEquipos);
cargarEquipos();