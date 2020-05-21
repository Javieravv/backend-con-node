/**
 * Creamos un servidor de Express
 */

const express = require('express');

const app = express();

// Cargamos el archivo de configuración 
const { config } = require('./config/index');
const moviesApi = require ('./routes/movies');

// para que cuando se envíen datos en formato JSon sepan interpretarlos las rutas
// es un middeware de body parser
app.use(express.json());

moviesApi(app);

// // primeras rutas
// app.get('/', function (req, res) {
//     res.send('Hello Word...');
// });

// app.get('/json', function (req, res) {
//     res.send({ Hello: 'Word...' });
// });


// //Solución al reto.
// // Crear un servidor que devuelva si el año es bisiesto o no
// app.get('/bisiesto/:ano', function (req, res) {
//     // Sacamos los dos últimos dígitos que vienen por parámetro de la variable ano
//     let bisiesto;
//     let cad = req.params.ano;
//     bisiesto = parseInt(cad.slice(cad.length - 2, cad.length));
//     bisiesto = bisiesto % 4;

//     (bisiesto === 0) ? res.send('<h1>El año es bisiesto</h1>')
//         : res.send('<h1>El año NO es bisiesto</h1>');
// });


app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});


