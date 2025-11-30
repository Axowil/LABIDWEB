//Ejercicio 8
async function loadUserData() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/2';

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const user = await response.json();
        const userNameElement = document.getElementById('userName');
        const userEmailElement = document.getElementById('userEmail');
        const userCityElement = document.getElementById('userCity');
        
        userNameElement.innerText = user.name;
        userEmailElement.innerText = user.email;
        userCityElement.innerText = user.address.city;

        console.log('Datos del usuario cargados y DOM actualizado:', user);

    } catch (error) {
        console.error('Hubo un problema al cargar los datos del usuario:', error);
        document.getElementById('userName').innerText = 'Error al cargar';
        document.getElementById('userEmail').innerText = 'Revisar consola';
        document.getElementById('userCity').innerText = 'Revisar consola';
    }
}
const loadButton = document.getElementById('loadUserBtn');
loadButton.addEventListener('click', loadUserData);