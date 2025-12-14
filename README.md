# Christmas Control Panel
| <img width="1339" height="616" alt="image" src="https://github.com/user-attachments/assets/da551ab4-9052-446e-8017-5589c40dd8b2" /> |
|---|

# 🎄 Christmas Control Panel
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

### ✅ *My Public IP*
| <img width="1184" height="391" alt="image" src="https://github.com/user-attachments/assets/c48e198a-91af-4155-8c39-0c2ea5a3d5db" /> |
|---|

Muestra tu IP publica en formato de texto

### ✅ *Wifi Utils*
| <img width="1338" height="664" alt="image" src="https://github.com/user-attachments/assets/8f7bfa1f-4b4f-44d2-bf22-3a647a0c5dfc" /> |
|---|

Conectarse a redes wifi facilmente desede la web-app


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
│   ├─ 📄 _init_.py
│   ├─ 🔧 port_utils.py
│   └─ 🖥 system_info.py
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
Próximas funciones planificadas:
- Monitor de rendimiento (CPU, RAM, disco)
- Información de red en tiempo real
- Herramientas de diagnóstico
- Módulos adicionales según feedback

---

## 📦 Instalacion y Uso
Descargue el ZIP del repo desde la seccion Code>Download

  ir a la carpeta del proyecto ```cd "C:/Users/Tu-Usuario/Downloads/ControlPanel-LocalWeb-master"```
  
  instalar requirements.txt ```pip install -r requirements.txt```
  
  correr la api ```python -m uvicorn main:app --reload```
  
  entrar a la web: ir en el navegador a ```127.0.0.1:8000```
