function port-list {
    Get-NetTCPConnection -State Listen |
        Select-Object LocalAddress, LocalPort, OwningProcess |
        Sort-Object LocalPort |
        ForEach-Object {
        $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
        [PSCustomObject]@{
            Port     = $_.LocalPort
            Address  = $_.LocalAddress
            Process  = if ($proc) { $proc.ProcessName } else { "N/A" }
            PID      = $_.OwningProcess
        }
        } | Format-Table -AutoSize
}

port-list
