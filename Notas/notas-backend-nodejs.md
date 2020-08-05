# BNackend con Node.js

En este ejercicio se recopilan anotaciones ddel curso de Platzi de node.js, relacionado con Backend, el cual hace parte de la Escuela de JavaScript.

Notas Importantes:

1. [Página Web del Curso](https://platzi.com/clases/backend-nodejs/)

2. [Anotaciones del compañero Jasán Hernández](https://github.com/JasanHdz/backendnodejs/tree/master/notes#duplex-y-transforms-streams). Estos apuntes están realmente buenos. Sí que valen la pena.

3. [Repositorio del curso](https://github.com/glrodasz/platzi-backend-node/tree/introduccion-a-streams)

4. [Anotaciones del curso de Passport.Js de Jasán Hernández](https://github.com/JasanHdz/passportjs/blob/master/notes/notes.md)

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

## Implementando una capa de servicios

La arquitectura tradicional MVC se queda corta en aplicaciones modernas, por eso necesitamos una arquitectura diferente cómo la **Clean Arquitecture** que tiene una capa de servicios para manejar la lógica de negocio.

No basta con tener modelo, vista y controlador, sino una distinta que tiene controladores, servicios y librerías. Los controladores solo llaman servicios y estos pueden llamar otros servicios y librerías.

Se sugiere dejar de usar MVC.

En el ejercicio se creó un archivo que contiene los diferentes servicios que se proveen a la API, como **get**, **put**, **patch**, **post**, **delete**. Una vez hecho esto estos servicios gestionan la API, efecutando los procesos CRUD. Se prueba con postman.

### Notas de los compañeros.

1. ¿Qué son servicios?

Por ejemplo en una red social los servicios serían:
posts
users
chat
cada feature de tu app tendra un servicio que lo gestione


¿Qué es la lógica de negocios?

La logica de negocio es toda la logica que le agregas a cada servicio. Por ejemplo cada vez que un usuario se crea:

- se autenticara
- se guardara la fecha de creacion
- etc etc

En la logica de negocio definis que pasa con cada accion. 

Esta **clean architecture** se basa en **_controller(routes)_**, **_services(logica de negocio)_** y **_librerias(acceso a DB)_**.

2. [Más información sobre **Clean Arquitecture**](https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/)

3. Recordar que la diferencia entre PUT y PATH es:

**PUT**: remplazo total del recurso.
**PATH**: actualización de algunos elementos del recurso.

[Artículo sobre el tema](https://medium.com/backticks-tildes/restful-api-design-put-vs-patch-4a061aa3ed0b)

4. Las rutas están para enviar los parámetros y datos a los servicios, los servicios saben de la lógica de negocio y saben devolver respuestas.

5. La diferencia entre req.query y req.params, es que paramentros se utiliza cuando estan establecidos en la URL y query cuando se usa ?, el nombre query y se puede concatenar.

6. **Controladores**: Es toda la capa del middleware y el router que se comunica con al API y reciben/envia Json.
Los controladores no llaman a otros controladores, solo llaman servicios.

**Servicios**: Contiene toda la logica de negocio. Los servicios pueden llamar a otros servicios o librerias.

**Librerias**: Es la capa que adjunta librerias externas, bases de datos, bases de datos en la nube.

7. [Imagen sobre arquitectura Clean]()

8. De lo que mencionas al final de la clase me queda el principio de responsabilidad única de la programación.

El panadero que haga pan, el ladrillero que haga ladrillo.

En la práctica recuerdas la idea de separar responsabilidad cuando hablas de las rutas y los servicios. No sobrcargar.

# Cómo funcionan los Middleware en Express.js

## Creación de una BD en MongoAtlas.

Creamos una base de datos **_MongoDb_** en la utilidad [MongoAtlas](www.mongodb.com/cloud/atlas)

Haremos unso de las variables de entorno para trabajar en producción o en desarrollo, para lo cual se usarán distintas bases de datos.

Para crear una BD en Mongo Atlas, se siguen estos pasos:

- Crear una cuenta en Mongo Atlas
- Seguir los pasos para configurar un Cluster. Se recomienda dejar la que tiene por defecto.
- REvisar ciertas configuraciones, como el **Network Access**, para ver qué IP puede conectarse a la base de datos. Se aconseja restringir conexciones por IP.

- Una vez creada la base de datos, se crea un usuario, con las configuraciones que se quieran. Para el ejercicio, un usuario que solo lee y escribe. Para este caso:

```
usuario: db_user_xavier
password: DBXavier1
```


MongoDb crea varias instancias de la base de datos (Clusters).

Luego de creada la base de datos, debemos buscar los datos de conexión, lo cual puede hacerse pulsando la opción **connect**, pudiendo ahí ver la URL a la cual nos conectaremos.

Lo que resta es crear la base de atos, lo cual se hace con la opción **collections**

Para este caso será:

Nombre base: **_platzivideos_db_**
Nombre colección: **_movies_**

## Conexión a MongoAtlas una instancia de MongoDB

Una vez creada la base de datos en MongoDb, nos conectaremos a ella utilizando Express.js.

Debe primero instalarse el paquete MongoDb, con ```npm i mongodb``` en modo de producción.

Luego creamos dos archivos para agregar las variables de entorno: **.env.example** y **.env**

.env.example es necesario para saber qué variables de entorno alimenta localemente. 

.env es el que tiene las variables de entorno. Nunca deben subirse a los repositorios.

En esos archivos se colocarán las variables que servirán para conectarse a la base de datos de MongoDb.

Luego de crear las variables de entorno se actualizan en el archivo de configuración.

Después creamos un archivo de librerías.

**_Se instaló el plugin material icon theme en Vs Code_**

### Notas de los compañeros.

1. Creo que sería más limpio usar un patron repository y injectar la dependencia de mongo. Así queda desacoplado y el día de mañana se puede cambiar mongo por otro client.

2. ¿Entonces el archivo .env debe ir al .gitignore?

Respuesta: _"Si companero, el archivo .env lo agregas en .gitignore, el que puedes omitir es el archivo .env.example. En este solo declaras el nombre de las variables globales pero no su contenido."_

3. ¿Queésucedio con ObjectId? lo importamos pero no lo utilizamos

Sirve para genererar un ID de cada dato insertado, te lo genera mongo por defecto pero se ocupará más adelante

4. **retryWrite = true**

Las escrituras recuperables permiten a los controladores MongoDB reintentar automáticamente ciertas operaciones de escritura una sola vez si encuentran errores de red, o si no pueden encontrar un primario sano en los conjuntos de réplica o clúster fragmentado.
[Ver la documentaión](https://docs.mongodb.com/manual/core/retryable-writes/)

**w=majority**: Solicita el reconocimiento de que las operaciones de escritura se han propagado al majority ( M) de los miembros con derecho a voto. La mayoría ( M) se calcula como la mayoría de todos los miembros con derecho a voto [1] , pero la operación de escritura devuelve el reconocimiento después de propagarse al número M de miembros con derecho a voto (primarios y secundarios con members[n].votesmayor que 0).

Por ejemplo, considere una réplica configurada con 3 miembros votantes, Primario-Secundario-Secundario (PSS). Para este conjunto de réplica, M es dos [1] , y la escritura debe propagarse a la primaria y una secundaria para reconocer la preocupación de escritura al cliente._
[Ver documentación](https://docs.mongodb.com/manual/reference/write-concern/)

## Conexión con Robot3T y MongoDB Compass a una BD

[Documento de platzi sobre ese tema](https://platzi.com/clases/1646-backend-nodejs/22034-conexion-con-robot3t-y-mongodb-compass-a-una-bd/)

## Implementación de las acciones CRUD de MongoDb

Los métodos de MongoDB para implementar un CRUD son:

Create: insertOne
Read: find, findOne
Update: updateOne
Delete: deleteOne

- [Documentación sobre colecciones MongoDb](https://docs.mongodb.com/manual/reference/method/js-collection/)

- [Documentación sobre operaciones con MongoDb](https://docs.mongodb.com/manual/crud/)

- [Muy buen libro sobre MongoDb](https://github.com/uokesita/the-little-mongodb-book/blob/master/es/mongodb.markdown)

### Notas de los compañeros.

1. No deberiamos controlar el rechazo de la promesa de connect con el catch y mostar un mensaje si llegara a fallar la conexion.
Donde posteriormente en los servicios verificariamos el valor que retornara la funcion,en este caso,por ejemplo en getAll
devuelvo null en caso de que falle y en el servicio validaria si me regresa un falsyvalue(null,undefines,etc),y responder algo al respecto.

```
async getAll({ collection, filter = {} }) {
    let response = null;
    try {
      const db = awaitthis.connect();
      response = await db.collection(collection).find(filter).toArray();
    }
    catch(e) {
      console.log(`ERROR: ${e.message}`);
    }

    return response;
  }
``` 
## Conexión de nuestros SErvicios con MongoDb

En este capítulo se hace uso de los servicios, ya no con los datos falsos sino con datos persistentes alojados en la base de datos de MongoDb.

Para eso modificamos el archivo movies.js en los servicios, para conectarnos con la librería de MongoDb.

Pueden verse los datos con la aplicación descargada de Mongo Atlas, desde donde también se pueden insertar, modificar y eliminar registros.

Hacer uso también de las variables de entorno y de las colecciones creadas en Postman. Hacen mucho más fácil la vida para hacer pruebas.

**Para el challenge de la clase, deberá estudiarse cómo crear una instancia local de Mongo Db y desde ahí conectarse a la aplicación. Tener en cuenta los archivos env, que deberán modificarse para la nueva información de la instancia local.**

### Notas de los compañeros.

1. Algún heroe sin capa que explique esta linea a detalle: ```const query = tags && {tags: {$in: tags}};```

Respuesta:

Esto es lo que se llama un IF Ternario, cumple la misma función de un condicional IF, nada más que escrito de distinta manera.

```
const ifBasico = <condición> && <haz esto>;
const ifConElse = <condición> && <haz esto> : <sino haz esto>;
```
En el caso del profesor, lo que hace es una verificación para ver si la variable tags está definida (hay datos) y en caso de que así sea está creando un objeto con el atributo tags

2. Una alternativa puede ser Model View Controller(MVC) y se puede usar [Moongose](https://mongoosejs.com/) si se te dificulta el clean code architecture.

3. A diferencia de los JSON que escribimos comúnmente, para que express logre parcear correctamente el json, deben usar comillas dobles en la clave.

```
//bad 💥
{
	title: "lorem ipsum"
}

// bad 💥
{
	'title': 'lorem ipsum'
}


//Good ✨
{
	"title": "lorem ipsum"'
}
```

4. Para conectarme a mi base de datos tuve que modificar mi endpoint de la siguiente manera

```const MONGO_URI = `${config.dbConnectionType}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}`;```

Donde _dbConnectionType_ cambia a mongodb, también tuve que quitar la base de datos porque tenemos el código

```resolve(this.client.db(this.dbName));```

En ese código realizamos de nuevo la conección a una base de datos específica, si alguien batalla por conectarse a base de datos privada, le ayudaré desde este mensaje.

# Conoce como funcionan los Middleware en Express.js

## ¿Qué es un middleware? Capa de manejo de errores usando un middleware

Es una pieza de software que está en medio de otra. 

### Notas de los compañeros.

1. Un Middleware es una capa intermedia que intercepta la información de algo, un middleware se define por defecto con una función del siguiente formato:

```
function(req,res,next){
	next()
}
```

Donde:

**req** es un httpRequest() con la información de la petición
**res** es un httpResponse() con la respuesta de la petición
**next** es un callback de la siguiente función a llamar

Para definir un middleware que reciba un error, sólo se le agregaría un argumento con el error

```
function errorHandler(err, req, res, next){
	if(err){
		res.status(err.status || 500);
		res.json({error:err})
	}
	next();
}
```

2. Trabajo con Windows y tuve un ligero problema con la variable de entorno en el archivo errorHandlres.js

```if(config.dev)``` siempre retornaba true

Haciéndome imposible visualizar el cambio de funcionalidad, de el errorHandler, en las pruebas con postman al cambiar de entorno(dev to prod).

Resulta que en Windows ocurre lo siguiente:

// En package.json
```"start": "set NODE_ENV=production && node index"```

//en errorHandlers.js

```
console.log(process.env.NODE_ENV === 'production') //false
console.log(process.env.NODE_ENV.trim() === 'production') //true
```

En windows al parecer inserta caracteres especiales a la variable de entorno. Por ello, realicé los siguientes cambios:

package.json:

```"dev": "set DEBUG=app:* && set NODE_ENV=development && nodemon index",```

config/index.js

```dev: process.env.NODE_ENV.trim() !== 'production',```

Para usar el entorno de desarrollo seteé la variable de entorno “development” para que al usar trim() no me marque error por asignar un método a un undefined.

3. Si cuando corren el servidor no diferencia si está en producción o en desarrollo, veriquen su package.json. El comando ‘start’ debe estar así:

```"start": "set NODE_ENV=production&&node index.js"```

Nota: Esto me parece que solo funciona en Windows

4. Si alguien no consigue que le salga el error capturado correctamente en modo production sólo tiene que hacer estos cambios:
package.json:

```“start”: " set NODE_ENV=production && node index"```

config/index.js:

```dev: process.env.NODE_ENV.trim() !== ‘production’,```

Mucha suerte!! 😄

5. Los middlewares son una capa de complejidad de código que se agrega en el intermedio de otras dos capas. Se le conocer como el pegamento de código, ya que se encarga de unir dos capas.

El objetivo principal de los middlewares es corroborar que los datos que están siendo enviados de una capa hacia otra sí cumplan los parámetros establecido o sean los datos correctos. De ser así, este middleware los dejará pasar; de lo contrario  se ejecutará la acción que le indiquemos, que en la mayoría de los casos suele ser un error.

6. **Dato:** El orden en el que ponemos los middlewares en este caso importa muchísimo.

Estamos poniendo los middlewares de error después de las rutas porque cuando se crea el error en la ruta pasa al catch y ese catch tiene un callback next() que le pasa el error al siguiente middleware.

El siguiente middleware es logErrors que igual tiene un callback next() que le envía el error al siguiente middleware.

Podemos comprobar que si invertimos el orden de los middlewares y ponemos _errorHandler antes que logErrors en el index después de las rutas vemos que no funcionará el middleware logErrors porque el middleware errorHandler no está pasándole el error a un siguiente middleware por medio del callback next().

## Manejo de errores asíncronos y síncronos en Express

[Aquí está el documento de Platzi](https://platzi.com/clases/1646-backend-nodejs/22039-manejo-de-errores-asincronos-y-sincronos-en-expres/)

[Documentación oficial sobre el manejo de errores](https://expressjs.com/en/guide/error-handling.html)

## Capa de validación de datos usando Middleware

Es necesaria para que cuando se consuman los endpoints se sepa o se puedan validar esquemas o validaciones de la información que se envía. Si los datos del usuario son errados, se puede devolver un error que le ayude al usuario.

## ¿Qué es Joi y Boom?

**Joi** (Object Schema Validation). Sirve para validar que los datos que recibimos vengan en el formato adecuado.

**Boom** (HTTP-friendly error objects). Nos ayuda a imprimir errores comunes en peticiones HTTP de forma sencilla

**Documentación oficial:**

[Boom](https://github.com/hapijs/boom)
[Joi](https://github.com/hapijs/joi)

## Implementando Boom

Instalamos Boom:

```npm i @hapi/boom```

### Notas compañeros.

1. Boom nos provee una serie de utilidades para retornar errores HTTP, cada utilidad es un objeto de respuesta de tipo Boom que incluye las siguientes propiedades:

**isBoom** - si es true indica que es una instancia de Boom.

**isServer** - si es true indica que el código de respuesta es mayor o igual 500, aquí más informacion de los codigos de respuesta [HTTP status Code](https://developer.mozilla.org/es/docs/Web/HTTP/Status).

**message** - el mensaje del error.
**typeof** - el constructor usado para crear el error (ejemplo: Boom.badRequest).
**output** - la respuesta formateada (generalmente esta es la que usamos) y contiene las siguientes claves:

**statusCode** - código de estatus HTTP.
**headers** - un objeto que contiene encabezados HTTP donde cada clave es un nombre de encabezado y el valor es el contenido del encabezado.
**payload** - el objeto formateado usado como respuesta y contiene las siguientes claves:
- **statusCode** - código de estatus HTTP, proviene de statusCode
- **error** - nombre derivado del error HTTP statusCode.
- **message** - mensaje de error derivado de error.message

## Implementando Joi

Instalamos Joi, en ```npm i @hapi/joi```

**_Nota Importante:_** Para cuando se hizo o se grabó el curso de Platzi, la versión de Joi era la 15.0.3 y para cuando tomé el curso (Mayo de 2020) Joi tenía la versión 17.0.1, razón por la cual presentó errores y no funcionó. Por eso para instalar la versión que usó el curso se empleó ```npm install --save @hapi/joi@15.0.3```.

Para desinstalar la versión inicialmente instalada se empleó el comando ```npm uninstall --save @hapi/joi```.

### Notas de los compañeros.

1. Estamos colocando el middleware validation handler entre la ruta y el middleware final. Asi mismo podemos colocar varios middleware.

¡Esto es lo que querias decir con la explicación del middleware con la metafora de la población y el agua! colocamos varios intermediarios antes de la acción HTTP final.

2. Recomendación:

Estas clases donde se implementan librerías de 3ros, hay que verlas, para aprender lo que se puede hacer y la razón por la que se hace así. El codigo como tal no es lo mas relevante ya que la implementacion puede variar de una version a otra.

3. Join no está deprecada, simplemente ahora forma parte del ecosistema hapi.

[Ecosistema Hapi](https://www.npmjs.com/package/@hapi/joi)

4. Hay una librería muy útil que nos da la validación para los id de mongodb. [Verla aquí.](https://www.npmjs.com/package/joi-objectid)

## Probar la validación de los endpoints

En esta parte se probó la validación efectuada de los endpoints utilizando la herramienta postman, previo haber corrido ```npm run dev```. Tener en cuenta que se tuvo que instalar la versión de **Joi** empleada en el curso, por cuanto la instalada al momento de hacerlo era una superior y había que cambiarse el código del curso.

**IMPORTANTE: Investigar cómo sería la implementación de _joi_ con la última versión.**

### Notas de lso compañeros.

1. [Pasar objeto js a json](https://www.convertonline.io/convert/js-to-json)

2. La versión 16.1.1 de Joi salió ayer con algunos cambios que rompen el código, por ende es muy probable que las validaciones de datos no te funcionen. Puedes encontrar [acá](https://github.com/hapijs/joi/issues/2037) más información al respecto.

Para corregir estos errores sólo debes meter tus objetos de schema que le pasas a la función validate en una función _joi.object()_. Y llamar el método validate desde el schema, ahora sólo va a recibir la data. Esto va a afectar principalmente tres porciones de código del proyecto, la primera son los schemas que declaras, quedarían así:

```
const joi = require('@hapi/joi')
const createMovieSchema = joi.object({
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: movieCoverSchema.required(),
    description: movieDescriptionSchema.required(),
    duration: movieDurationSchema.required(),
    contentRating: movieContentRatingSchema.required(),
    source: movieSourceSchema.required(),
    tags: movieTagsSchema
})
```

La segunda son los métodos de las rutas de movies, quedarían así:

```const express = require('express')
const joi = require('@hapi/joi')
const { MovieService } = require('../services')
const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
} = require('../utils/schemas/movies')

const validationHandler = require('../utils/middlewares/validation-handler')

functionmoviesApi(app) {
    const router = express.Router()
    const movieService = new MovieService()

    app.use('/api/movies', router)

    router.get(
        '/:movieId',
        validationHandler(joi.object({ movieId: movieIdSchema }), 'params'),
        asyncfunction(req, res, next) {
            const { movieId } = req.params
            try {
                const movie = await movieService.getMovie({ movieId })
                res.status(200).json({
                    data: movie,
                    message: 'movie by id'
                })
            } catch (error) {
                next(error)
            }
        }
    )
}

module.exports = moviesApi
```

Y la tercera es el método validate del validation handler que quedaría así:

```
functionvalidate(data, schema) {
    const { error } = schema.validate(data)
    returnerror
}
```

Habiendo hecho estos cambios vas a poder validar tus datos.

O podrías instalar la versión 15.1.0 de @hapi/joi que es la que usa el profesor 😛

## Middlewares populares en Express.js

Hay muchos Middlewares populares para Express. [Aquí hay una lista](https://platzi.com/clases/1646-backend-nodejs/22248-middlewares-populares-en-expressjs/) dada por el Profesor del curso de Platzi.

Como se trata de utilizar alguno, entonces se optó por _CORS_ que ya viene por defecto instalado con node.

Para usarlo:

```
const cors = require('cors);
...
app.use(cors());
```
# Implementa tests en Node.js

## Creación de tests para nuestros endpoints

Se explora cómo crear testin para la API que ha sido creada con node.js. 

Aquí se hace test para la capa de endpoints ubicados en las rutas.

Se deberán instalar dependencias para los test, que son:

- mocha
- supertest: para levantar servidor temporal
- sinon: ayuda a hacer mocks para test
- proxyquire: ayuda a inyectar mocks cuandose requieran los paquetes.

Para instalarlos: ```npm i -D mocha supertest sinon proxyquire```

- **Pasos a seguir:** 

* Modificamos archivo de mocks, creando algunas utilidades.
* Definimos archivo para levantar un servidor para pruebas.
* Creamos los archivos para los distintos test. Se recomienda que terminen con la extensión _.test.js_.
* En el _package.json_ creamos un script para los test, de la sigueinte manera: ```"test": "mocha --exit" ```.

Como los test están en la carpeta _test_ y terminan en _.test.js_, entonces esa línea los deberá encontrar.

### Notas de los compañeros.

1. Algo que me di cuenta, es que es super importante que al hacer el deepEqual asegurarse que los datos que estan comparando sean exactamente iguales. En este caso tanto la data como el mensaje que se reciben.

Lo que pasa es que , se levanta el servidor con supertest y le pasas las rutas de movies a ese servidor y cuando le hagas un request.get(/api/movies) por ejemplo va a realizar ese llamado y acuerdate que nos devuelve un json con data, y message y eso lo compara con lo que le digamos para ver si se cumple o no el test , si no tienen los mismos datos , es porque esta mal y el test fallara.

2. Les recomiendo jest para los test unitarios, tanto en el front como en el back

3. cuando vayan a crear los ‘servicios’ de mock, asegúrense que las funciones tenga el mismo nombre que del servicio original (osea, si en su capa de servicio para obtener peliculas es getAll, en el mock coloquenlo igual), dure media hora con un error por culpa de una ‘s’ 😃

## Creación de tests para nuestros servicios

Lo que interesa es testear los servicios en lo que va a devolver. Por ello se mokeará la librería de Mongo.

### Notas de lso compañeros.

1. ¿Que es un stub?

Respuesta: Un stub es una implementación de una interfaz que puede servir data o respuestas.

Por ejemplo, en la clasa pasada hubieron estas líneas.
```
const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock,
});
```
Ahí usamos un stub para reemplazar el servicio real por uno falso pero que tbm genere data.

2. [Artículo interesante para entender los test en Javascrpt](https://solidgeargroup.com/tests-unitarios-en-javascript-sinon/?lang=es)

## Creación de tests para nuestras utilidades

TDD es primero crear los test y luego la funcionalidad, lo cual se aconseja cuando se tiene claro la lógica del negocio o cuando se tiene un bug que ayuda a corregirlo y se asegura que no vuelva a ocurrir.

### Notas de los compañeros.

1. TDD es test driven development.

En otras palabras: crear primero las pruebas que hay que superar y después desarrollar el código.

El profesor considera magnífico usar esto cuando se tiene muy claro la lógica de negocio.
Si no lo tienes claro no es recomendable.
También es recomendable hacerlo cuando tienes un bug para que tu solución de él perdure en el tiempo.

2. Otra manera de resolver si el mensaje es listado lo pueden hacer con el operador ternario 😃

```
functionbuildMessage(entity, action) {
  return action === "list" ? `${entity}s ${action}ed` : `${entity}${action}d`;
}

module.exports = buildMessage;
```

## Agregando un comando para coverage

Un comando de coverage permite identificar en dónde se está fallando y cómo puede corregirse.

Para instalarlo usamos una herramienta denominada _nyc_ y se instala ```npm install -D nyc```

Luego creamos un comando en el _package.json_, así: ```"cover": "nyc npm run test" ```
Esto porque el cover se hace a partir de los test que han sido creados.

Para correrlo hay que crear los scripts en el package.json, así:

```
"cover": "nyc npm run test",
"report": "nyc report --reporter=html && open coverage/index.html"
```
El _report_ se emplea para que se haga un reporte de los test que se han hecho.

También hay que configurar los coverage al final del _package.json_, así:

```
"nyc": {
        "all": true,
        "includes": ["routes", "services", "lib", "utils"]
}
```

El reporte que se genera permite visualizar a qué se le ha hecho test y a qué no, con lo cual se podrá tener una idea de lo probado en el proyecto.

Se recomienda hacer test de un 80% de la aplicación, no completa, pues lo que importa no es hacer pruebas sino hacer productos.

El profesor dice que hacer test es más demorado que hacer el código de la aplicación. **Para ello hay que tener mucha paciencia**.

**RETO: Hacer los test de las demás funcionalidades de la API.**

## Debugging e inspect

Esta parte del curso se lee [aquí](https://platzi.com/clases/1646-backend-nodejs/22253-debugging-e-inspect/).

# Despliega tu primera aplicación en Express.js

## Considerando las mejores prácticas para el despliegue

* Remover contraseñas quemadas: tenerlas directamente en el código y no en variables o variables de entorno. Se recomienda esto último.

* Encapsular código spaghetti: código muy difícil de leer o crece mucho. Se recomienda mover porciones de código a funciones. Mas claro.

* Revisar la estructura del proyecto: 

* Configurar los scripts de build: confdigurar los scripts de buid. Debe estar esto claro.

* Agregar soporte de caché: para evitar ir a la BD a traer una misma película que ha ya sido consultada.

* Añadir HTTPS y CORS: por seguridad. CORS sirve para que no todo cliente se conecte al backed y no hagan males.

* Revisar otras prácticas de seguridad: revisar OWS y revisar lecturas de seguridad.

- [Artículo que explica cómo remover datos sensibles del repositorio](https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository)

- [OWASP](https://owasp.org/www-project-top-ten/)

- [Curso de buenas prácticas para escritura de código](https://platzi.com/cursos/mejor-codigo/)

## Variables de entorno, CORS y HTTPS

[Artículo del tema de Platzi](https://platzi.com/clases/1646-backend-nodejs/22255-variables-de-entorno-cors-y-https/)

## ¿Cómo implementar una capa de manejo de caché?

Para evitar problemas con el caché del navegador, se ejecuta una funcionalidad para que el caché se controle cada cierto tiempo. Mínimo cada 5 minutos.

- [Caché Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

- [Manejo del caché con Expresss en producción](https://expressjs.com/en/advanced/best-practice-performance.html#cache-request-results)

- [Manejo del caché con Expresss en producción - 1](https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production)

## ¿Cómo contener tu aplicación en Docker?

[Lectura del tema - Platzi](https://platzi.com/clases/1646-backend-nodejs/22257-como-contener-tu-aplicacion-en-docker/)

## Desplegar en Now la aplicación.

Desplegamos la aplicación en Now, que ahora se llama Vercel.

Se instala con ```npm i -g vercel ```

Lo primero que se debe hacer es considerar las variables de entorno, pues si no las pasamos al despliegue no tendrán valores.

Now o Vercel permite administrar esas variables mediante los _secrets_, el cual guarda la variable de entorno y NUNCA nos deja acceder a ese resultado.

Para hacerlo se emplea:

```now secret add platzivideos-db-user <valor> ``` 

Se hace lo mismo para cada variable de entorno.

Para saber los _secrets_ agregados se ejecuta ```vercel secrets ls ```lo cual reportará todos los secretos agregados. Se verá el nombre de las variables, pero no su valor.

El paso a seguir es crear en la raiz del proyecto un archivo llamado ```now.json ```  para que vercel sepa cómo desplegar la aplicación.

Para probar si sirve la configuración, se corre un despliegue local con la instrucción ```vercel dev ```, el cual nos mostrará posibles errores.








