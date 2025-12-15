param (
    [string]$targetHost,
    [int]$port
)
if ($targetHost -eq "localhost" -or $targetHost -eq "127.0.0.1") {
    $active = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    if ($active) {
        Write-Host "El puerto local $port esta ACTIVO (escuchando)"
    } else {
        Write-Host "El puerto local $port esta INACTIVO"
    }
} else {
    try {
        $tcp = New-Object System.Net.Sockets.TcpClient
        $tcp.Connect($targetHost, $port)
        Write-Host "El puerto $port en $targetHost esta ABIERTO"
        $tcp.Close()
    } catch {
        Write-Host "El puerto $port en $targetHost esta CERRADO o inaccesible"
    }
}
