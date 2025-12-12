from fastapi import FastAPI, Form
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from libs.system_info import get_system_info
from libs.port_utils import runPort

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def root():
    return FileResponse("static/index.html")

@app.get("/api/system")
async def systemInfo():
    info = get_system_info()
    return info

@app.post("/api/run-port")
async def openPort(
    port: str = Form(...),
    loc: str = Form(...)
):
    server = runPort(port, loc)
    return server
