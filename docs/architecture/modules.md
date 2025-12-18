# Modules
Descripciones de cada modulo de la web-app

## System Info
Brinda todo tipo de **informacion del sistema** en un formato claro, legible, funcional y atractivo visulmente para todo tipo de

>**Info:**

>System: brinda informacion como el sistema operativo, la version y el procesador

>CPU: brinda la cantidad de nucleos fisicos y los nucleos totales al igual que su uso y frecuencia representados en una tabla

>Ram: ofrece informacion de la ram como la cantidad, la disponible y la usada

>Swap: ofrece al igual que la ram el total, usado, libre y porcentaje

>Discos: informacion sobre los discos disponibles (nombre, tipo, total, usado, libre y porcentaje)

>Red: gb recibidos y enviados por internet

>Tiempo encendido: dia y hora exacto a la que se encendio y cuanto tiempo lleva encendida

## Ip Geolocate
Al introducir una ip publica la **geocaliza** y ofrece toda la info posible sobre la ip (Pais y Ciudad, operador telefonico, latitud y longitud y un poco mas de informacion segun la ip y lugar donde se encuentra)

## Open Port
Al introducir un puerto y una ubicacion en la computadora, **abre un puerto** local(localhost:) en la ubicacion elegida puede ser un path(ubicacion en la pc) o un una web atraves de su index.html

## My Public Ip
Ofrece tu Ip publica en formato de texto limpio, legible y atractivo atravez de una api gratuita y publica (sin conexion no funciona debido a no ser una api local)

## Wifi Utils
Permite escanear las wifis de tu alrededor y conectarte a ellas introduciendo SSID y Contraseña correcta

## Ports List
Muestra una lista de todos los puertos abiertos, su direccion y proceso al que pertenece

## Port Check
Permite comprobar si un puerto esta abierto o cerrado, introduciendo direccion y puerto

## Search Files
Es un buscador de archivos que introduciendo el disco o ubicacion en la que se cree que se encuentra el archivo y el nombre de este

## Como se conectan?
Todos estos archivos se conectan con el main.py atravez de importaciones (import) para que este cree un endpoint en la api y ui.js pueda interactuar con cada archivo para que asi la web-app funcione correctamente mientras cada archivo este bien hecho y bien conectado a su endpoint
