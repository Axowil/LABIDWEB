from wsgiref.simple_server import make_server

def app(environ, start_response):
    path = environ["PATH_INFO"]
    if path == "/":
        contenido = [b"Inicio"]
        status = "200 OK"
    elif path == "/saludo":
        contenido = [b"Hola mundo desde WSGI"]
        status = "200 OK"
    else:
        contenido = [b"404 - Pagina no encontrada"]
        status = "404 Not Found"
    start_response(status, [("Content-Type","text/html")])
    return contenido

server = make_server("localhost",8000, app)
print("Servidor corriendo en: http://localhost:8000")
server.serve_forever()