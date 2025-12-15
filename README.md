# 🎄 Christmas Control Panel
| <img width="1349" height="683" alt="image" src="https://github.com/user-attachments/assets/31149a80-f7e4-408c-bfa4-48923b1ed494" /> |
|---|

![Python](https://img.shields.io/badge/Python-3.10%2B-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License](https://img.shields.io/github/license/bellcodev/Christmas-ControlPanel)
![Last Commit](https://img.shields.io/github/last-commit/bellcodev/Christmas-ControlPanel)
![Issues](https://img.shields.io/github/issues/bellcodev/Christmas-ControlPanel)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-blue)
![Stars](https://img.shields.io/github/stars/bellcodev/Christmas-ControlPanel?style=social)
![Forks](https://img.shields.io/github/forks/bellcodev/Christmas-ControlPanel?style=social)

Un panel de control para PC con un estilo navideño moderno, creado especialmente para la temporada. Su objetivo es ofrecer herramientas simples, rápidas y útiles dentro de una interfaz festiva y agradable.

Actualmente el proyecto está en desarrollo activo y se irán añadiendo nuevas funciones con el tiempo.

---

## ✨ Características actuales

### ✅ *System Info*

| <img width="1325" height="629" alt="image" src="https://github.com/user-attachments/assets/c133b9ad-eef7-48c4-bebf-4cebd57490a4" /> |
|---|


Muestra información básica del sistema, como:
- Nombre del dispositivo
- Sistema operativo
- Arquitectura
- RAM disponible
- Otros datos relevantes según la plataforma

### ✅ *IP Geolocate*

| <img width="1338" height="625" alt="image" src="https://github.com/user-attachments/assets/a4ff6c73-e272-4133-8816-f72929758d8d" /> |
|---|


Permite obtener la geolocalización aproximada de una dirección IP:
- País
- Ciudad
- Región
- ISP (si está disponible)
- Coordenadas aproximadas

### ✅ *Run Port*

| <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/c2e74f4d-f605-4ed0-8e85-72402b9b32b7" /> | <img width="1000" height="45" alt="image" src="https://github.com/user-attachments/assets/94e9a2e2-939c-4801-98cf-2e0852361c63" /> |
|---|---|

Permite abrir un puerto local en una carpeta o archivo de la PC:
- Introduce numero de Puerto
- Introduce ubicacion del archivo a mostrar
- Abre el puerto en localhost

### ✅ My Public IP
| <img width="1184" height="391" alt="image" src="https://github.com/user-attachments/assets/c48e198a-91af-4155-8c39-0c2ea5a3d5db" /> |
|---|

🌐 Muestra tu *IP pública* en texto plano, de forma inmediata y lista para copiar. Ideal para diagnósticos rápidos, configuraciones de red o compartirla sin complicaciones.

---

### ✅ Wifi Utils
| <img width="1328" height="672" alt="image" src="https://github.com/user-attachments/assets/16d7b32e-2b0b-4d38-af07-3f852ae7aa54" /> |
|---|

📶 Explora, selecciona y conéctate a *redes Wi‑Fi cercanas* directamente desde la web‑app. Gestiona tus conexiones sin abrir configuraciones del sistema y con una interfaz clara y accesible.

---

### ✅ Port List
| <img width="1335" height="683" alt="image" src="https://github.com/user-attachments/assets/762eb1b5-5a7d-43a4-aca3-f5d72075d0c5" /> |
|---|

🧭 Escanea tu sistema y muestra *todos los puertos abiertos*, incluyendo dirección, protocolo, proceso asociado y PID. Todo organizado en una tabla limpia y fácil de interpretar.

---

### ✅ Port Check
| <img width="1346" height="683" alt="image" src="https://github.com/user-attachments/assets/72c14121-d283-4520-81db-ff4c71fb5dc5" /> |
|---|

🔍 Comprueba si un *puerto específico* está abierto o accesible en una dirección determinada. Perfecto para validar servicios locales, APIs, servidores o configuraciones remotas.

---

## 🎅 Estilo navideño
El panel utiliza una interfaz inspirada en la estética navideña:
- Colores cálidos y festivos
- Animaciones suaves
- Elementos decorativos sutiles
- Diseño minimalista tipo “Google UI”

Perfecto para lanzar durante las fiestas.

---
## Estructura del Proyecto
```
📦 Christmas-ControlPanel
├─ 🎁 libs/
│   ├─ 🔧 PowerShell/
│   │   ├─ 📳 port_check.ps1
│   │   └─ 📂 port_list.ps1
│   ├─ 📄 _init_.py
│   ├─ 🔧 port_list.py
│   ├─ 🔧 port_check.py
│   ├─ 🔧 port_utils.py
│   ├─ 🖥 system_info.py
│   └─ 🖥 wifi_utils.py
│
├─ 🎨 static/
│   ├─ 🌟 css/
│   │   └─ 🎀 style.css
│   ├─ 🎄 js/
│   │   ├─ ✨ script.js
│   │   └─ 🎅 ui.js
│   └─ 🏠 index.html
│
├─ 📜 LICENSE
├─ 📘 README.md
├─ 🎅 main.py
└─ 📦 requirements.txt
```
---

## 🛠 Estado del proyecto
El proyecto *está en desarrollo*.  
- Módulos adicionales según feedback

---

## 📦 Instalacion y Uso
Descargue el ZIP del repo desde la seccion Code>Download

  ir a la carpeta del proyecto ```cd "C:/Users/Tu-Usuario/Downloads/ControlPanel-LocalWeb-master"```
  
  instalar requirements.txt ```pip install -r requirements.txt```
  
  correr la api ```python -m uvicorn main:app --reload```
  
  entrar a la web: ir en el navegador a ```127.0.0.1:8000```
