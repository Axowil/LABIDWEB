from wsgiref.simple_server import make_server
import json

def app(environ, start_response):
    path = environ["PATH_INFO"]

    if path == "/":
        respuesta = b"Hola, bienvenido a la pagina principal"
        headers = [("Content-Type", "text/plain")]
        status = "200 OK"
    elif path == "/saludo":
        respuesta = json.dumps({"msg": "Hola"}).encode()
        headers = [("Content-Type", "application/json")]
        status = "200 OK"

    elif path == "/pokemon":
        respuesta = json.dumps({"1": "Charizard"}).encode()
        headers = [("Content-Type", "application/json")]
        status = "200 OK"
    
    else:
        respuesta = b"404 No encontrado"
        headers = [("Content-Type", "text/plain")]
        status = "404 Not Found"

    start_response(status, headers)
    return [respuesta]

server = make_server("localhost", 8000, app)
print("Servidor corriendo en http://localhost:8000/")
server.serve_forever()