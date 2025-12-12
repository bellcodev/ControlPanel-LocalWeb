function renderMainMenu() {
    const content = document.getElementById("content")

    content.innerHTML = `
        <section class="menu-principal">
            <h1>Panel de Control</h1>

            <div class="menu-grid">
                <button class="menu-btn" onclick="renderSystemMenu()">
                    System Info
                </button>

                <button class="menu-btn" onclick="renderGeoIP()">
                    Ip Geolocate
                </button>

                <button class="menu-btn">
                    def 3
                </button>

                <button class="menu-btn">
                    def 4
                </button>

                <button class="menu-btn">
                    def 5
                </button>

                <button class="menu-btn">
                    def 6
                </button>
            </div>
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
        <h1>Información del Sistema</h1>

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
            ← Volver al menú principal
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
                ← Volver al menú principal
            </button>
        </section>
    `
}

document.addEventListener("DOMContentLoaded", () => {
    renderMainMenu()
})
