# BNackend con Node.js

En este ejercicio se recopilan anotaciones ddel curso de Platzi de node.js, relacionado con Backend, el cual hace parte de la Escuela de JavaScript.

Notas Importantes:

1. [Página Web del Curso](https://platzi.com/clases/backend-nodejs/)

2. [Anotaciones del compañero Jasán Hernández](https://github.com/JasanHdz/backendnodejs/tree/master/notes#duplex-y-transforms-streams). Estos apuntes están realmente buenos. Sí que valen la pena.

## ¿Qué es Node.js?

Node.js es un entorno de ejecución para JavaScript construido con el motor JavaScript V8 de Chrome. JavaScript es un lenguaje interpretado pero en Node.js tenemos algo llamado el JIT Compiler que es una especie de monitor que optimiza fragmentos de código que son ejecutados frecuentemente.

### Notas de los compañeros

1. [Artículo explicativo de V8 y Js](https://medium.com/reactbrasil/como-o-javascript-funciona-dentro-da-engine-v8-5-dicas-sobre-como-escrever-c%C3%B3digo-otimizado-e05af6088fd5)

2. Preguntas y respuestas.

**¿Qué es node.js ?**
Node.js es un entorno de ejecucion para javascript

**¿Qué es un entorno de ejecución?**

Un entorno de ejecucion es una capa encima del sistema operativo que ejecuta una pieza de software.

**¿Qué nos permite?**

Usar javascript para el servidor.

## ¿Qué es Node.js y para qué sirve?


### Diferencias entre Node.js y JavaScript

En JavaScript del lado del cliente tenemos el **DOM** y el **CSSDOM** así como el **objeto window** para manipular los elementos de nuestra página además una serie de APIs, aquí unos ejemplos:

fetch
SessionStorage y LocalStorage
canvas
bluetooth
audio
web authentication

Mientras que en Node.js no tenemos un DOM ni un objeto windows, lo que sí tenemos son una serie de módulos que nos permiten interactuar con los recursos de la máquina como el sistema operativo y el sistema de archivos, por ejemplo:

os -> comunicarse con el sistema operativo
fs
http -> crear serviodores
util
debugger 
stream -> permite manejar grandes colecciones de datos
events -> definir acciones ydisparar más adelante
ECMAScript Modules
consola

Para ver una muy buena infografía, [Ir a esta página.](https://platzi.com/clases/1646-backend-nodejs/22671-resumen-diferencias-nodejs-y-javascript/)

### Notas compañeros.

1. Diferencias y similitudes entre javascript y node.js

**En javascript**

En javascript tenemos el DOM. La interfaz web.
En javascript tambien tenemos el CSSOM
Tambien el fetch API
Toda la capa del web storage
Tambien el canvas API
Las APIs en general del navegador

**En Node.js**

Node tiene el modulo de HTTP para crear servidores
El modulo del sistema operativo para comunicarse con el SO
El modulo utiliddes
El modulo debugger

**En común**

Librerias comunes streams
Eventos
Ecmascript modules
Consola

## Instalación de Node.Js

Para ver sobre este tema, [clickear aquí.](https://platzi.com/clases/1646-backend-nodejs/22015-instalacion-de-nodejs/)

## Arquitectura orientada a eventos

Es el paradigma de programación más popular en NOde.js. Así puede manejarse código asíncrono de mejor manera.

En JavaScript y Node se manejan las funciones asíncronas usando callbacks, promesas y async/await. Sin embargo también puede emplearsen los EventEmitters.

### Notas de los compañeros.

1. Algunas librerías internas de node que extienden de EventEmitter son las librerías fs y process. Veamos unos ejemplos.

El módulo fs usa internamente EventEmitter, específicamente ‘open’, ‘end’ y ‘data’, respectivamente cuando se abre un archivo, cuando se termina de leer un archivo o cuando se está leyendo uno. Y este sería el output.

[En este link explican muy bien el tema](https://medium.com/developers-arena/nodejs-event-emitters-for-beginners-and-for-experts-591e3368fdd2).

2. Una arquitectura orientada por eventos es un patron de diseño el cual permite a un conjunto de sistemas comunicarse entre si de forma reactiva mediante la publicacion y el consumo de eventos, **los cuales se pueden interpretar como cambios de estado de objetos**.

3. Investigando un poco, según la versión de Node.js v12.11.1, estos son los módulos nativos que vienen por default:

Assertion Testing
Async Hooks
Buffer
C++ Addons
C/C++ Addons - N-API
Child Processes
Cluster
Command Line Options
Console
Crypto
Debugger
Deprecated APIs
DNS
Domain
ECMAScript Modules
Errors
Events
File System
Globals
HTTP
HTTP/2
HTTPS
Inspector
Internationalization
Modules
Net
OS
Path
Performance Hooks
Policies
Process
Punycode
Query Strings
Readline
REPL
Report
Stream
String Decoder
Timers
TLS/SSL
Trace Events
TTY
UDP/Datagram
URL
Utilities
V8
VM
Worker Threads
Zlib

4. Arquitectura Orientada a objetos: permite manipular código asíncrono

el callback = es el parámetro que se va a ejecutar después
async-await = manera de escribir codigo asyncrono que no se vea asyncrono

## Node.js para la web.

Para crear un servidor http se usa node.js

Se usa el módulo nativo _http_.

En esta clase usamos **_Postman_** para poder ver el ejemplo con el servidor eco, pues en el ejemplo dado el servidor no se puede correr directamente en la url.








