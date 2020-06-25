/**
 * Creamos un servidor de Express
 */

const express = require('express');
const bodyParse = require('body-parser');
const app = express();

// Cargamos el archivo de configuración 
const { config } = require('./config/index.js');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies.js');

const {
    logErrors,
    wrapErrors,
    errorHandler
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require ('./utils/middleware/notFoundHandle');

app.use(express.json());

// routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

// para capturar error 404
app.use(notFoundHandler);

// Los middlewares siempre deben ir al final de las rutas.
// Manejadores de errores
app.use(bodyParse.urlencoded({ extended: false }));
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});
