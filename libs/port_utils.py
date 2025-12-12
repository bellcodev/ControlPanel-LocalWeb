import http.server
import socketserver
import os
import threading

def runPort(port, loc):
    try:
        port = int(port)
    except:
        return {"status": "error", "message": "Port must be a number"}

    if not os.path.exists(loc):
        return {"status": "error", "message": f"Path does not exist: {loc}"}

    os.chdir(loc)

    handler = http.server.SimpleHTTPRequestHandler

    def start_server():
        with socketserver.TCPServer(("", port), handler) as httpd:
            httpd.serve_forever()

    thread = threading.Thread(target=start_server, daemon=True)
    thread.start()

    return {
        "status": "success",
        "message": f"Server running at http://localhost:{port}",
        "path": loc
    }
