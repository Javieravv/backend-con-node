# Curso de Autenticación con Passport.Js

Las notas de este curso y de los sucesivos tomados se escriben en la aplicación Notion.

 [Aquí están las notas de Jasán Hernández](https://github.com/JasanHdz/passportjs/blob/master/notes/notes.md)

 ## Paquetes y configuraciones usados en el curso de Passports.Js

- Para ***jwt***: ```npm i jsonwebtoken```

- Para manejar _cookies_ se necesita:
Express,
Express-session: permite hacer el manejo de sesiones con cookies.
Nodemon: ```npm i -D nodemon```

Para nuestros equipos ya está instalado nodemon de manera global.

Usamos la librería bcrypt.

## Configuración de Passports.js

Paquetes que se usan:

- passport
- jsonwebtoken
- passport-http: para implementar estrategia basic
- passport-jwt: para implementar estrategia de JWT
- chalk: en modo de desarrollo. Permite pintar colores en la terminal.

```
npm i passport jsonwebtoken passport-http passport-jwt 
npm i -D chalk
```
También deberemos agregar otras variables de entorno.

