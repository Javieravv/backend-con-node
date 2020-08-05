/*
* Estrategia basic de autenticación
*/

const passport = require ('passport');
const { BasicStrategy } = require ('passport-http');
const boom = require ('@hapi/boom'); // errores
const bcrypt = require ('bcrypt'); // para encriptar y desencriptar

const UsersService = require ('../../../services/users');


passport.use(
    new BasicStrategy (async function (email, password, cb) {
    const userService = new UsersService();
    console.log ('EL EMAIL ENVIADOA BASIC ES ', email);
    console.log ('LA CLAVE ENVIADA A BASIC ES ', password);
    try {
        const user = await userService.getUser( { email } );
        console.log ('EL USUARIO ENCONTRADO EN MONGODB ES...', user);
        //Verificamos que el usuario sí exista
        if (!user) {
            return cb(boom.unauthorized('ESTE USUARIO NO EXISTE...'), false);
        }

        // Si el usuario existe, verificamos que el password ingresado coincida con el 
        // password registrado del usuario.
        if (!(await bcrypt.compare(password, user.password))) {
            return cb (boom.unauthorized('EL PASSWORD ES ERRADO...'), false);
        }
        // Si llegamos aquí es porque usuario y pasword son correctos.

        delete user.password;
        return cb (null, user);
    } catch (error) {
        console.log ('SE HA PRESENTAEDO UN ERROR EN ESTE PÚNTO', error);
        return cb (error);
    }
}))

// Agregamos esta estrategia como un middelware.

