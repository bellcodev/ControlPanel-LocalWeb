import requests

def geoIp(ip):
    url = f""
    response = requests.get(url)

    data = response.json()

    return {
        "IP": ip,
        "País": data.get("country"),
        "Región": data.get("regionName"),
        "Ciudad": data.get("city"),
        "ISP": data.get("isp"),
        "Latitud": data.get("lat"),
        "Longitud": data.get("lon"),
        "ZonaHoraria": data.get("timezone")
    }
