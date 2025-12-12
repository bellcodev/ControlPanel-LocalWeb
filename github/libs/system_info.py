import psutil
import platform
import time
from datetime import datetime
import json

def get_system_info():
    info = {}

    info["system"] = {
        "os": platform.system(),
        "os_version": platform.version(),
        "machine": platform.machine(),
        "processor": platform.processor(),
        "python_version": platform.python_version(),
    }

    info["cpu"] = {
        "physical_cores": psutil.cpu_count(logical=False),
        "total_cores": psutil.cpu_count(logical=True),
        "frequency": psutil.cpu_freq()._asdict(),
        "usage_per_core": psutil.cpu_percent(percpu=True),
        "total_usage": psutil.cpu_percent(),
    }

    svmem = psutil.virtual_memory()
    info["ram"] = {
        "total": round(svmem.total / (1024**3), 2),
        "available": round(svmem.available / (1024**3), 2),
        "used": round(svmem.used / (1024**3), 2),
        "percentage": svmem.percent,
    }

    swap = psutil.swap_memory()
    info["swap"] = {
        "total": swap.total,
        "used": swap.used,
        "free": swap.free,
        "percentage": swap.percent,
    }

    partitions_info = []
    for partition in psutil.disk_partitions():
        try:
            usage = psutil.disk_usage(partition.mountpoint)
        except PermissionError:
            continue

        partitions_info.append({
            "device": partition.device,
            "mountpoint": partition.mountpoint,
            "fstype": partition.fstype,
            "total": usage.total,
            "used": usage.used,
            "free": usage.free,
            "percentage": usage.percent,
        })

    info["disk"] = partitions_info

    net_io = psutil.net_io_counters()
    info["network"] = {
        "bytes_sent": net_io.bytes_sent,
        "bytes_received": net_io.bytes_recv,
    }

    boot_time = datetime.fromtimestamp(psutil.boot_time())
    info["uptime"] = {
        "boot_time": boot_time.strftime("%Y-%m-%d %H:%M:%S"),
        "uptime_seconds": time.time() - psutil.boot_time(),
    }

    return info

data = get_system_info()
print(json.dumps(data, indent=4))
