# Christmas Control Panel
<img width="1299" height="597" alt="image" src="https://github.com/user-attachments/assets/9691f1ae-12b5-4058-8889-6a824cfe675e" />


# 🎄 Christmas Control Panel
Un panel de control para PC con un estilo navideño moderno, creado especialmente para la temporada. Su objetivo es ofrecer herramientas simples, rápidas y útiles dentro de una interfaz festiva y agradable.

Actualmente el proyecto está en desarrollo activo y se irán añadiendo nuevas funciones con el tiempo.

---

## ✨ Características actuales

### ✅ *System Info*
Muestra información básica del sistema, como:
- Nombre del dispositivo
- Sistema operativo
- Arquitectura
- RAM disponible
- Otros datos relevantes según la plataforma

### ✅ *IP Geolocate*
Permite obtener la geolocalización aproximada de una dirección IP:
- País
- Ciudad
- Región
- ISP (si está disponible)
- Coordenadas aproximadas

### ✅ *Run Port*
Permite abrir un puerto local en una carpeta o archivo de la PC:
- Pide numero de Puerto
- Pide ubicacion del archivo a mostrar
- Abre el puerto en localhost

---

## 🎅 Estilo navideño
El panel utiliza una interfaz inspirada en la estética navideña:
- Colores cálidos y festivos
- Animaciones suaves
- Elementos decorativos sutiles
- Diseño minimalista tipo “Google UI”

Perfecto para lanzar durante las fiestas.

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
