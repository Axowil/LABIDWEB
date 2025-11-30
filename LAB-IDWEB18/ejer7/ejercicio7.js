 
 //Ejercicio 7 
 
 document.getElementById('cargarBtn').addEventListener('click', function() {
            fetch('https://jsonplaceholder.typicode.com/users/2')
                .then(function(response) {
                    return response.json();
                })
                .then(function(user) {
                    document.getElementById('datos').innerHTML = 
                        '<p>Nombre: ' + user.name + '</p>' +
                        '<p>Email: ' + user.email + '</p>' +
                        '<p>Ciudad: ' + user.address.city + '</p>';
                });
        });