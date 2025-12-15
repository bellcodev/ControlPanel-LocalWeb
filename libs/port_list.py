import subprocess

def portList():
    result = subprocess.run(['powershell.exe', '-ExecutionPolicy', 'ByPass', '-File','.\libs\powershell\port_list.ps1'], capture_output=True, text=True, check=True)
    return result.stdout
