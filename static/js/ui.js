function renderMainMenu() {
    const content = document.getElementById("content")

    content.innerHTML = `
        <section class="menu-principal">
            <h1>Christmas Control Panel</h1>

            <div class="menu-grid">
                <button class="menu-btn" onclick="renderSystemMenu()">
                    System Info
                </button>

                <button class="menu-btn" onclick="renderGeoIP()">
                    Ip Geolocate
                </button>

                <button class="menu-btn" onclick="renderRunPort()">
                    Open Port
                </button>

                <button class="menu-btn" onclick="renderMyIP()">
                    My Public IP
                </button>

                <button class="menu-btn" onclick="renderWifiUtils()">
                    Wifi Utils
                </button>

                <button class="menu-btn">
                    def 6
                </button>
            </div>
        </section>
    `
}

async function wifiScan() {
    let txt = document.getElementById("networks")
    const res = await fetch("/api/wifi/scan")
    const data = await res.json()
    txt.innerText = "Scaning..."
    txt.innerText = data
}

async function wifiConect() {
    let ssid = document.getElementById("ssid")
    let pswd = document.getElementById("networkPswd")
    const form = new FormData()
    form.append("ssid", ssid.value)
    form.append("pswd", pswd.value)
    let res = await fetch("/api/wifi/connect", {
        method: "POST",
        body: form
    })
    const data = await res.json()

}

async function renderWifiUtils() {
    const content = document.getElementById("content")
    content.innerHTML = `
        <h1>Wifi Utils</h1>
        <div class="card">
            <button class="menu-btn" onclick="wifiScan()">
                Scan Wifi
            </button>
            <h3>Networks</h3>
            <div id="networks"></div>
        </div>
        <div class="card">
            <input type="text" id="ssid" placeholder="network name">
            <br>
            <input type="password" id="networkPswd" placeholder="network password">
            <button class="menu-btn" onclick="wifiConect()">
                Connect
            </button>
        </div>
    `
}

async function renderMyIP() {
    const content = document.getElementById("content")
    const res = await fetch("http://api.ipify.org?format=json")
    const data = await res.json()
    content.innerHTML = `
    <h1>My Ip</h1>
    <div class="card">
        <p><strong>Your public ip is: ${data.ip}</strong></p>
    </div>
    <button class="back-btn" onclick="renderMainMenu()">
        ← Back to main menu
    </button>
    `
}

async function handleRunPort() {
    const port = document.getElementById("portInput").value
    const loc = document.getElementById("fileInput").value
    const resultBox = document.getElementById("runPortResult")

    if (!port) {
        resultBox.textContent = "Error: Port is required"
        return
    }

    if (!loc) {
        resultBox.textContent = "Error: Path is required"
        return
    }

    const form = new FormData()
    form.append("port", port)
    form.append("loc", loc)

    let res
    try {
        res = await fetch("/api/run-port", {
            method: "POST",
            body: form
        })
    } catch (err) {
        resultBox.textContent = "Network error: " + err
        return
    }

    let data
    try {
        data = await res.json()
    } catch {
        const text = await res.text()
        resultBox.textContent = "Server error:\n" + text
        return
    }

    resultBox.textContent = JSON.stringify(data, null, 2)
}

window.handleRunPort = handleRunPort

async function renderRunPort() {
    const content = document.getElementById("content")

    content.innerHTML = `
        <h1>Run on Port</h1>

        <section class="run-port-menu">
            <div class="card">
                <label for="portInput"><strong>Port</strong></label> <br>
                <input id="portInput" type="number" placeholder="Enter a port (e.g. 8000)" min="1" max="65535">
                <br>
                <label for="fileInput"><strong>Path</strong></label> <br>
                <input id="fileInput" type="text" placeholder="Enter a file or folder path">

                <button class="menu-btn" onclick="handleRunPort()">
                    Run
                </button>
            </div>

            <div id="runPortResult"></div>

            <button class="back-btn" onclick="renderMainMenu()">
                ← Back to main menu
            </button>
        </section>
    `
}

async function renderSystemMenu() {
    const content = document.getElementById("content")

    const res = await fetch("/api/system")
    const data = await res.json()

    const sys = data.system
    const cpu = data.cpu
    const freq = cpu.frequency
    const usagePerCore = cpu.usage_per_core
    const ram = data.ram
    const swap = data.swap
    const disks = data.disk
    const net = data.network
    const uptime = data.uptime

    const toGB = (bytes) => (bytes / (1024 ** 3)).toFixed(2)
    const uptimeHours = (uptime.uptime_seconds / 3600).toFixed(2)

    content.innerHTML = `
        <h1>Full System Info</h1>

        <section class="system-menu">
            <div class="card">
                <h3>System</h3>
                <p><strong>OS:</strong> ${sys.os}</p>
                <p><strong>OS Version:</strong> ${sys.os_version}</p>
                <p><strong>Machine:</strong> ${sys.machine}</p>
                <p><strong>Processor:</strong> ${sys.processor}</p>
            </div>
        </section>

        <section class="cpu-menu">
            <div class="card">
                <h3>CPU</h3>
                <p><strong>Núcleos físicos:</strong> ${cpu.physical_cores}</p>
                <p><strong>Núcleos totales:</strong> ${cpu.total_cores}</p>
                <p><strong>Uso total:</strong> ${cpu.total_usage}%</p>

                <br>
                <h3>Frecuencia</h3>
                <p><strong>Actual:</strong> ${freq.current} MHz</p>
                <p><strong>Mínima:</strong> ${freq.min} MHz</p>
                <p><strong>Máxima:</strong> ${freq.max} MHz</p>

                <br>
                <h3>Uso por núcleo</h3>
                <table>
                    <tr>
                        <th>Núcleo</th>
                        <th>Uso (%)</th>
                    </tr>
                    ${usagePerCore.map((u, i) => `
                        <tr>
                            <td>${i}</td>
                            <td>${u}%</td>
                        </tr>
                    `).join("")}
                </table>
            </div>
        </section>

        <section class="ram-menu">
            <div class="card">
                <h3>RAM</h3>
                <p><strong>Total:</strong> ${toGB(ram.total)} GB</p>
                <p><strong>Disponible:</strong> ${toGB(ram.available)} GB</p>
                <p><strong>Usada:</strong> ${toGB(ram.used)} GB</p>
                <p><strong>Porcentaje:</strong> ${ram.percentage}%</p>
            </div>
        </section>

        <section class="swap-menu">
            <div class="card">
                <h3>Swap</h3>
                <p><strong>Total:</strong> ${toGB(swap.total)} GB</p>
                <p><strong>Usado:</strong> ${toGB(swap.used)} GB</p>
                <p><strong>Libre:</strong> ${toGB(swap.free)} GB</p>
                <p><strong>Porcentaje:</strong> ${swap.percentage}%</p>
            </div>
        </section>

        <section class="disk-menu">
            <div class="card">
                <h3>Discos</h3>
                ${disks.map(d => `
                    <div class="card" style="margin-top: 15px;">
                        <p><strong>Dispositivo:</strong> ${d.device}</p>
                        <p><strong>Montaje:</strong> ${d.mountpoint}</p>
                        <p><strong>Tipo:</strong> ${d.fstype}</p>
                        <p><strong>Total:</strong> ${toGB(d.total)} GB</p>
                        <p><strong>Usado:</strong> ${toGB(d.used)} GB</p>
                        <p><strong>Libre:</strong> ${toGB(d.free)} GB</p>
                        <p><strong>Porcentaje:</strong> ${d.percentage}%</p>
                    </div>
                `).join("")}
            </div>
        </section>

        <section class="network-menu">
            <div class="card">
                <h3>Red</h3>
                <p><strong>Enviado:</strong> ${toGB(net.bytes_sent)} GB</p>
                <p><strong>Recibido:</strong> ${toGB(net.bytes_received)} GB</p>
            </div>
        </section>

        <section class="uptime-menu">
            <div class="card">
                <h3>Tiempo encendido</h3>
                <p><strong>Boot Time:</strong> ${uptime.boot_time}</p>
                <p><strong>Uptime:</strong> ${uptimeHours} horas</p>
            </div>
        </section>

        <button class="back-btn" onclick="renderMainMenu()">
            ← Back to main menu
        </button>
    `
}

async function fetchGeoIp(ip) {
    const res = await fetch(`http://ip-api.com/json/${ip}`)
    const data = await res.json()

    document.getElementById("geoResult").innerHTML =
        `IP: ${ip}<br>
Country: ${data.country}<br>
Region: ${data.regionName}<br>
City: ${data.city}<br>
ISP: ${data.isp}<br>
Latitude: ${data.lat}<br>
Longitude: ${data.lon}<br>
Timezone: ${data.timezone}`
}

async function renderGeoIP() {
    const content = document.getElementById("content")

    content.innerHTML = `
        <h1>Ip Geolocate</h1>

        <section class="geoip-menu">
            <div class="card">
                <input id="ipInput" type="text" placeholder="Introduce una IP" style="
                    width: 100%;
                    padding: 12px;
                    font-size: 1rem;
                    border-radius: 10px;
                    border: 1px solid #ccc;
                    margin-bottom: 15px;
                ">

                <button class="menu-btn" onclick="fetchGeoIp(document.getElementById('ipInput').value)">
                    Buscar IP
                </button>
            </div>

            <div id="geoResult"></div>

            <button class="back-btn" onclick="renderMainMenu()">
                ← Back to main menu
            </button>
        </section>
    `
}

document.addEventListener("DOMContentLoaded", () => {
    renderMainMenu()
})
