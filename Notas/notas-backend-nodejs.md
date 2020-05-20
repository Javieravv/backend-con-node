# BNackend con Node.js

En este ejercicio se recopilan anotaciones ddel curso de Platzi de node.js, relacionado con Backend, el cual hace parte de la Escuela de JavaScript.

Notas Importantes:

1. [Página Web del Curso](https://platzi.com/clases/backend-nodejs/)

2. [Anotaciones del compañero Jasán Hernández](https://github.com/JasanHdz/backendnodejs/tree/master/notes#duplex-y-transforms-streams). Estos apuntes están realmente buenos. Sí que valen la pena.

3. [Repositorio del curso](https://github.com/glrodasz/platzi-backend-node/tree/introduccion-a-streams)

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

# Manejo y uso de Streams con Node.js

## Introducción a Streams

Los Streams son una colección de datos como los arrays o strings sólo que se van procesando pedazo por pedazo, esta capacidad los hace muy poderosos porque podemos manejar una gran cantidad de datos de manera óptima.

### Notas de los compañeros

1. Interesante, en vez de cargar el archivo de una sola vez y agotar la memoria. Se va cargando por lotes o fracciones reduciendo así el consumo de memoria y una eventual sobrecarga del servidor.

2. [Artículo sobre Streams en Node.js](https://elabismodenull.wordpress.com/2017/03/28/el-manejo-de-streams-en-nodejs/)

3. La diferencia entre fs.readFile y fs.createReadStream es que el primero hace que el contenido se ocupe en una parte de la memoria, mientras que el segundo procesa la información por partes.

4. Los streams al igual que un arreglo o una cadena de texto, es una colección de datos, con la diferencia que los stream dividen estos datos en varias sesiones, dándonos un mejor rendimiento en la memoria.
Para poder usar streams, lo hacemos con el modulo de fyle system, fs.
Este tendrá dos métodos, createReadStream y createWriteableStream.
El primero nos funciona para transformar archivos a stream, es decir, leerlos, mientras que el segundo para crearlos o editarlos.
Controlar los streams nos permitirá manejar mucho mejor el consumo de memoria de nuestro servidor.

## Readable y Writable streams

Los Readable y Writeable streams tienen los siguientes eventos y funciones respectivamente:

### Readable

**Eventos**

- data. Se dispara cuando recibe datos.
- end. Se dispara cuando termina de recibir datos.
- error. Se dispara cuando hay un error.

**Funciones**

- pipe
- unpipe
- read
- push

### Writeable

**Eventos**

- drain. Se dispara cuando emite datos.
- finish. Se dispara cuando termina de emitir.
- error. Se dispara cuando hay un error.

**Funciones**

- write
- end

Recuerda que tienen estos eventos porque los heredan de la clase **EventEmitter**.

### Notas de los compañeros

1. No entendí para que el size si nunca lo usa?

Rta. Cuando se crea un stream se puede definir el tamaño (size) del buffer, este tamaño representa el número de bytes que el buffer puede almacenar, esto lo puedes utilizar cuando tienes un tamaño de memoria limitado y quieres asegurarte que el buffer no sobrepasen un tamaño que perjudique tu servidor, esto no se menciona en el video pero este size se define en el constructor (el método read(size)) del readable stream, este parámetro es opcional y por defecto es de 16kb para un readable stream normal y de 64kb para un readable stream del fs.
Espero haberte ayudado, por si no me explique bien acá te dejo un enlace con mas info del size 

2. [Aquí un gran artículo en inglés sobre el tema](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)

Este artículo sí que es bueno y muy similar a lo que la clase explica.

3. Todos los streams son instancias de EventEmitter.

4. [Tabla de códigos ASCII](https://ascii.cl/)

## Duplex y Transform Streams

Ambos sirven para simplificar nuestro código:

**Duplex**: implementa los métodos write y read a la vez.

**Transform**: es similar a Duplex pero con una sintaxis más corta.

[Documentación de Streams](https://nodejs.org/api/stream.html#stream_duplex_and_transform_streams)

# Uso de utilidades de Node.js

## Sistema Operativo y Sistema de Archivos.

Hay dos módulos básicos:

- **os**. Sirve para consultar y manejar los recursos del sistema operativo.
- **fs**. Sirve para administrar (copiar, crear, borrar etc.) archivos y directorios.

Los métodos contenidos en estos módulos (y en todo Node.js) funcionan de forma asíncrona por default, pero también se pueden ejecutar de forma síncrona, por ejemplo el método readFile() tiene su versión síncrona readFileSync().

### Notas compañeros.

1. Para saber la información de las redes: 

```console.log('IP address', os.networkInterfaces());```

Con eso se fijan todas sus interfaces de su red y luego con esto pueden mapear alguna para mostrarla

```console.log('IP address', os.networkInterfaces()['nombre red].map(i => i.address));```

2. Para interfaces WiFi en windows.

```console.log("IP addres", os.networkInterfaces().WiFi.map(i => i.address));```

3. [** npm** package que ayudará con el display/La muestra de los logs Chalk](https://www.npmjs.com/package/chalk)

4. Con Node podremos interactuar directamente con el sistema operativo gracias a su modulo os, (operative system).
Gracias a este modulo podremos conocer las diferentes características de nuestro sistema o del sistema donde esta en uso, para poder ejecutar acciones según esta.
Por ejemplo, la cantidad de cpus que tiene, o la capacidad de memoria libre que tiene actualmente.
También con Node podremos manipular los directorios y archivos de nuestro sistema, con el módulo fs, (File System). Con este módulo podremos hacer prácticamente todas las acciones que nosotros podemos hacer en nuestro directorio, crear, editar y/o eliminar archivos o carpetas enteras.
Es importante tener en cuenta que la mayoría de los métodos de estos módulos suelen ser asíncronos, ya que Node siempre trata de ser así, pero Node también nos ofrece su versión síncrona por si lo llegamos a requerir

## Administrar directorios y archivos

La palabra clave **__dirname** tiene la información del directorio actual.

Con el módulo fs podemos utilizar muchas cosas relacioandas con manejo de archivos y directorios, como leer directorios, crear directorios, borrarlos, copiar archivos, borrar archivos, etc.

Con este código podemos crear directorios recursivamente:

```
fs.mkdir('platzi/escuela-js/node', { recursive: true }, (err) => {
    if (err) {
        return console.log (err);
    }
});
```

### Notas de los compañeros

1. Para borrar archivos pueden usar el metodo ‘unlink’ de fs pasandole como primer parametro el archivo que desean borrar y como segundo parametro un callback

2. Pasados los vectores como parametros en el comando de ejecucion:

```
const fs = require('fs');
const arg1= process.argv[2];
const arg2= process.argv[3];

fs.copyFile(arg1, arg2, error => {
    if (error) {
        console.log(error);
    }
    console.log(`${arg1} fue copiado como ${arg2}`);
})
```
3. Si no les funciona el mkdir con múltiples subcarpetas, asegúrense de tener una versión de NodeJS actualizada.

## Consola, utilidades y Debuggin

Con la consola se pueden hacer muchas cosas en Node.js. Por defecto todo lo que se imprime por consola, usando console.log se va por el stdout, y todo lo que se imprime con console.err se va por stderr.

Con la clase consola se puede determinar estos aspectos para hacer cosas distintas, buscando con ello que en un archivo determinado se impriman los mensajes de console.log y en otro de console.err

Las utilidades console.info y console.warn son muy similares a console.log

La utilidad deprecate sirve para hacer un wrap de una funciòn que ya está obsoleta y se quiere informar de ello a los usuarios.

Para hacer debuggin en node se usa el flag --inspect

```node --inspect nombrearchivo.js ```

### Comentarios compañeros

1. [Artículo para poner colores a la consola](http://voidcanvas.com/make-console-log-output-colorful-and-stylish-in-browser-node/)

[Aquí pueve verse otro artículo sobre el mismo tema](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)

2. Node como modulo nativo nos ofrece el modulo de console, que suele ser muy útil para hacer un debugging básico de nuestro código y conocer funcionalidades de nuestro codigo.

Para realizar un buen debugging de nuestro código, podemos utilizar el comando node --inspect. El cual nos abrirá un navegador con la consola para debuggear de una manera mas avanzada y practica para nosotros.

3. El módulo útil esta diseñado para resolver las necesidades internas de las API de Node, sin embargo muchas de estas utilidades también son útiles para los módulos de las aplicaciones en desarrollo. Se puede acceder a estas utilidades usando:

```const util = require('util');```

**util.format()**

El método util.format () devuelve una cadena formateada utilizando el primer argumento como una cadena de formato tipo printf que puede contener cero o más especificadores de formato. Cada especificador se reemplaza con el valor convertido del argumento correspondiente. Los especificadores compatibles son:

%s - String
%d - Number
%i - parseInt(value, 10)
%f - parseFloat(value)
%j - JSON
%o - Object
%c - Css
%% - signo de '%'

**Inspector**

Cuando se inicia la inspección --inspect, Node escucha a un cliente de depuración , Por defecto escuchara el host y el puerto 127.0.0.1:9229 y a cada proceso se le asigna un id único.
Opciones de la línea de comandos

--inspect: Habilita el agente de inspección y escucha el puerto por defecto 127.0.0.1:9229
--inspect=[host:port]: Habilita el agente de inspección, vincula la dirección y el puerto a la dirección de inspección.

## Cluster y procesos hijo.

Sobre este tema leer [este artículo](https://platzi.com/clases/1646-backend-nodejs/22024-clusters-y-procesos-hijos/)

Puede verse más información [en este vínculo](https://pinchito.es/2013/modo-cluster). También en la documentación oficial.

# Primer Proyecto con Express.js

## ¿Qué es Express y para qué sirve?

Express.js es un framework para crear Web Apps, Web APIs o cualquier tipo de Web Services, es libre bajo la licencia MIT.

Express es muy liviano y minimalista además de ser extensible a través de Middlewares.

Los Middlewares interceptan el request y el response para ejecutar una acción en medio.

### Notas compañeros

1. Características de Express:

minimalista
template engines
routing (uso de expreciones regulares)
middlewares: interceptar request y response object.
plugins: hay gran cantidad de ellos

## Creando primer servidor con Express.js

Para el desarrollo del curso se creará un Backend para el proyecto de Platzi Video. Estará en la carpeta ```movies.api```

## Creando el primer servidor en Express.

Lo primero es crear nuestro package.json y dentro de él crear todos los scripts, dependencias, etc., que se requiera para el proyecto.

Creamos luego una configuración para eslint, en el archivo ```.eslintrc.json```, que quedará así:

```
{
    "parserOptions": {
      "ecmaVersion": 2018                             /** indica la versión de EcmaScript que se va a usar
    }, 
    "extends": ["eslint:recommended", "prettier"],    /** Indica que extienda la versión recomendada y que utilice prettier
    "env": {                                          /** Configura las variables de entorno indicando que se usarán es6, node, mocha
      "es6": true,
      "node": true,
      "mocha": true
    },
    "rules": {                                        /** regla de no poner la consola es unicamente un warning, no un error
      "no-console": "warn"
    }
  }
  ```
Después configuramos prettier para que se puedan tener reglas estándar en la codificación que deben usar los programadores y que serán leídas por el editor que se use. Esta configuración estará en el archivo **_.prettierrc.json_** y quedará así:

```
{
  "tabWidth": 2,        /** numero de espacios en los taps 
  "semi": true,         /** que se utilice ; 
  "singleQuote": true   /** comillas simples no dobles
}
```

Puede configurarse a gusto del cliente.

Luego se instalan las dependencias de producción, así:

- Express
- Dotenv

Las dependencias de desarrolo serán:

- nodemon
- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- prettier

Instalamos un hook que sirve para que el código haga el formateo autom{atico cada que vez que se haga commit y se suba a un repositorio

```
npm i express dotenv
npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier
npmx mrm lint-staged
```

**Es posible que genere un error porque nodemon ya puede estar instalado**.

Luego creamos un nuevo archivo de configuración que servirá para la carga de las variables de entorno, en caso que se cambie la manera de cargar. Estará en la carpeta _config_ y se llamara **index.js**, cuyo contenido será:

```
require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000
}

module.exports = { config };

```

Importante lo de port, pues debe asegurarse que no se queme, y que haya un puerto disponible para la aplicación.

Luego creamos el servidor de Express.

**_Se instaló una extensión para VSCode que ayuda a automáticamente insertar archivos que se requieran. _**

### Notas compañeros de clase.

1. **dotenv**
Es un módulo independiente que carga variables de entorno de un archivo .env en process.env.
npm i express dotenv

**Nodemon**
Nodemon es una utilidad que supervisará cualquier cambio en los recursos y reiniciará automáticamente su servidor.
npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier

**Husky hooks**
Es un módulo que puede prevenir realizar git commit o git push sin formato u otros conflictos no deseados.
npx mrm lint-staged

2. Si estan en windows y la consola le salta error ‘porque no reconoce a DEBUG=app:*’, coloquen ‘**set **DEBUG=app…’ y de paso tambien tienen que usar & antes de nodemon index

3. Para crear los scripts del package.json en windows se deben separar los comandos con &
```
"scripts": {
    "dev": "DEBUG=app:* & nodemon index",
    "start": "NODE_ENV=production & node index.js"
},
```

4. En package.json en el script de desarrollo se puede incluir en nodemon más tipos de archivos para que se refresquen automáticamente cuando sean modificados:

parámentro -e

Linux Mac:
“dev”: “DEBUG=app:* nodemon index -e js,hbs,html,css”,

Windows:
“dev”: “set DEBUG=app:* &nodemon index -e js,hbs,html,css”

## Request y Response Objects

[Ver el artículo de Platzi](https://platzi.com/clases/1646-backend-nodejs/22027-request-y-response-objects/)

# Aprendiendo a crear un API con REST

## Anatomía de una API Restful

REST (Representational State Transfer) es un estilo de arquitectura para construir web services, no es un estándar pero si una especificación muy usada.

Las peticiones HTTP van acompañadas de un “verbo” que define el tipo de petición:

- GET. Lectura de datos.
- PUT. Reemplazar datos.
- PATCH. Actualizar datos en un recurso específico.
- POST. Creación de datos.
- DELETE. Eliminación de datos.

No es recomendable habilitar un endpoint de tipo PUT y DELETE para toda nuestra colección de datos, sólo hacerlos para recursos específicos, ya que no queremos que por error se puedan borrar todos nuestros datos.

[ESta página es útil para APIS. - www.swagger.io](https://swagger.io/)

### Notas de los compañeros.

1. Delete jamás me ha tocado usarlo, o al menos a mi que me ha tocado manejar grandes cantidades de datos, al eliminar un dato se pierde la integridad de la DB, lo que se hace es hacer un borrado lógico además de mantener la relación en la auditoría.

2. CRUD: Create - Read- Update - Delete

3. No me queda muy claro por qué no aplica POST para /api/movies/:id. Alguien me ayuda por favor?

Re* spuesta: _Porque cuando estás haciendo Post es para crear una nueva movie, si esta movie no está creada no tienes un id porqu este id se genera de manera sistematizada en el backend para asegurar que no se repita 😄_

## Estructura de una película con Moockaru

_Mockaroo*_ es un servicio que nos permite crear datos simulados a partir de una estructura, por ejemplo para generar la estructura de nuestra película:

```
{
    id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e',
    title: 'Notti bianche, Le (White Nights)',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 66,
    contentRating: 'G',
    source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
    tags: [
      'Action|Adventure',
      'Action|Adventure|Thriller',
      'Horror|Western',
      'Horror|Thriller',
      'Comedy|Romance|Sci-Fi',
      'Adventure|Animation|Children|Comedy|Fantasy',
      'Drama'
    ]
  }
```

## Implementando un CRUD en Express.js

Las siglas CRUD vienen de las palabras en inglés:

* Create - crear
* Read - leer
* Update - actualizar
* Delete - eliminar

En este ejercicio se creó la ruta para obtener todas las películas, a través de Express, Router y ayudados por Postman.

### Notas de los compañeros.

1. Otra alternativa a Postman es [Insomnia](https://insomnia.rest/download/), muy similar a Postman.

2. Si no tienen Postman, igual pueden hacer la consulta GET en el navegador en: http://localhost:3000/api/movies

3. ¿Por qué no se usa PUT y sí patch? ¿cual es la diferencia ?

Respuesta: "_Ambos se utilizan para realizar UPDATE en la data, la diferencia es que con el PUT debes enviar todo el set de datos que conforman la entidad que quieres actualizar, aunque solo quieras modificar un valor de este, y con el PATCH puedes enviar únicamente la el elemento que deseas modifcar._"

4. Si quieren saber acerca de cuando se debe aplicar cada código http hay un diagrama enorme. Siempre es útil tenerlo a la mano si no sabes que código mandar dependiendo la situación 🕵️‍♂️

[Aquí puede verse](https://github.com/for-GET/http-decision-diagram)

5. [Códigos de estado de respuesta HTTP:](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

## Métodos idempotentes del CRUD

Se implementa el resto de métodos del crud, utilizando los métodos **get**, **post** (para crear), **put** (para actualizar) y **delete** (para borrar).

Se prueba ayudados por Postman, en donde se creó una variable global para no tener que repetir tanto la dirección del servidor. (En este caso es http://localhost:3000). La variable de entorno se llamó _url_. Para usarla: _{{url}}_

El gitignore nos ayuda qué archivos no compartir en el repositorio.

Se ayuda con la página [www.gitignore.io](www.gitignore.io)

[Colecciones de Postman](https://drive.google.com/drive/folders/1Latsb5hLuGS9XuLprGtbpgL3NLGnxh6O)

















