from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from libs.system_info import get_system_info
from libs.geo_ip import geoIp

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def root():
    return FileResponse("static/index.html")

@app.get("/api/system")
async def systemInfo():
    info = get_system_info()
    return info

@app.get("/api/geoIp")
async def geoIpInfo(ip: str):
    data = geoIp(ip)
    return data
