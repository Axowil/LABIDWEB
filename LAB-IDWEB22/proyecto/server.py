import json
import os
from wsgiref.simple_server import make_server
from urllib.parse import parse_qs

# Equipos demos
equipos = [
    {"id": 1, "nombre": "Real Madrid", "ciudad": "Madrid", "nivelAtaque": 10, "nivelDefensa": 9},
    {"id": 2, "nombre": "Barcelona", "ciudad": "Barcelona", "nivelAtaque": 9, "nivelDefensa": 8},
    {"id": 3, "nombre": "Melgar", "ciudad": "Arequipa", "nivelAtaque": 5, "nivelDefensa": 4}
]
next_id = 4

def serve_static(path):
    """Sirve archivos estáticos"""
    static_dir = os.path.join(os.path.dirname(__file__), 'static')
    file_path = os.path.join(static_dir, path.lstrip('/'))
    
    if not os.path.exists(file_path) or not os.path.isfile(file_path):
        return None
    
    with open(file_path, 'rb') as f:
        content = f.read()
    
    # Determinar content-type
    if path.endswith('.html'):
        content_type = 'text/html'
    elif path.endswith('.css'):
        content_type = 'text/css'
    elif path.endswith('.js'):
        content_type = 'application/javascript'
    elif path.endswith('.png'):
        content_type = 'image/png'
    elif path.endswith('.jpg') or path.endswith('.jpeg'):
        content_type = 'image/jpeg'
    else:
        content_type = 'application/octet-stream'
    
    return content, content_type

def application(environ, start_response):
    global next_id
    
    path = environ.get('PATH_INFO', '/')
    method = environ.get('REQUEST_METHOD', 'GET')
    
    # Servir archivos estáticos
    if path == '/' or path == '/index.html':
        path = '/index.html'
    
    if path.startswith('/') and not path.startswith('/equipos'):
        static_content = serve_static(path)
        if static_content:
            content, content_type = static_content
            status = '200 OK'
            headers = [('Content-Type', content_type)]
            start_response(status, headers)
            return [content]
    
    if path == '/equipos':
        if method == 'GET':
            # Listar todos los equipos
            response_body = json.dumps(equipos, ensure_ascii=False).encode('utf-8')
            status = '200 OK'
            headers = [
                ('Content-Type', 'application/json; charset=utf-8'),
                ('Access-Control-Allow-Origin', '*')
            ]
            start_response(status, headers)
            return [response_body]
        
        elif method == 'POST':
            # Registrar nuevo equipo
            try:
                content_length = int(environ.get('CONTENT_LENGTH', 0))
            except ValueError:
                content_length = 0
            
            request_body = environ['wsgi.input'].read(content_length)
            data = json.loads(request_body.decode('utf-8'))
            
            # Validar datos requeridos
            if not all(k in data for k in ['nombre', 'ciudad', 'nivelAtaque', 'nivelDefensa']):
                status = '400 Bad Request'
                response_body = json.dumps({"error": "Faltan campos requeridos"}).encode('utf-8')
                headers = [
                    ('Content-Type', 'application/json; charset=utf-8'),
                    ('Access-Control-Allow-Origin', '*')
                ]
                start_response(status, headers)
                return [response_body]
            
            # Crear nuevo equipo
            nuevo_equipo = {
                "id": next_id,
                "nombre": data['nombre'],
                "ciudad": data['ciudad'],
                "nivelAtaque": data['nivelAtaque'],
                "nivelDefensa": data['nivelDefensa']
            }
            equipos.append(nuevo_equipo)
            next_id += 1
            
            response_body = json.dumps(nuevo_equipo, ensure_ascii=False).encode('utf-8')
            status = '201 Created'
            headers = [
                ('Content-Type', 'application/json; charset=utf-8'),
                ('Access-Control-Allow-Origin', '*')
            ]
            start_response(status, headers)
            return [response_body]
        
        elif method == 'OPTIONS':
            # CORS preflight
            status = '200 OK'
            headers = [
                ('Access-Control-Allow-Origin', '*'),
                ('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'),
                ('Access-Control-Allow-Headers', 'Content-Type')
            ]
            start_response(status, headers)
            return [b'']
    
    elif path.startswith('/equipos/'):
        # Extraer ID del equipo
        try:
            equipo_id = int(path.split('/')[-1])
        except ValueError:
            status = '400 Bad Request'
            response_body = json.dumps({"error": "ID inválido"}).encode('utf-8')
            headers = [
                ('Content-Type', 'application/json; charset=utf-8'),
                ('Access-Control-Allow-Origin', '*')
            ]
            start_response(status, headers)
            return [response_body]
        
        if method == 'GET':
            # Buscar equipo por ID
            equipo = next((e for e in equipos if e['id'] == equipo_id), None)
            
            if equipo:
                response_body = json.dumps(equipo, ensure_ascii=False).encode('utf-8')
                status = '200 OK'
            else:
                response_body = json.dumps({"error": "Equipo no encontrado"}).encode('utf-8')
                status = '404 Not Found'
            
            headers = [
                ('Content-Type', 'application/json; charset=utf-8'),
                ('Access-Control-Allow-Origin', '*')
            ]
            start_response(status, headers)
            return [response_body]
        
        elif method == 'OPTIONS':
            # CORS preflight
            status = '200 OK'
            headers = [
                ('Access-Control-Allow-Origin', '*'),
                ('Access-Control-Allow-Methods', 'GET, OPTIONS'),
                ('Access-Control-Allow-Headers', 'Content-Type')
            ]
            start_response(status, headers)
            return [b'']
    
    status = '404 Not Found'
    response_body = json.dumps({"error": "Ruta no encontrada"}).encode('utf-8')
    headers = [
        ('Content-Type', 'application/json; charset=utf-8'),
        ('Access-Control-Allow-Origin', '*')
    ]
    start_response(status, headers)
    return [response_body]

if __name__ == '__main__':
    port = 8000
    with make_server('', port, application) as httpd:
        print(f"Servidor corriendo en http://localhost:{port}/")
        print(f"Presiona Ctrl+C para detener el servidor")
        httpd.serve_forever()
        