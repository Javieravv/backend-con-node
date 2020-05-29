/**
 * Creamos el primer test
 */

const assert = require('assert'); // verifica si es verda o no la comparación enel text
const proxyquire = require('proxyquire'); // no traer paquete real sino un mock

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');

const testServer = require('../utils/testServer');

describe('routes - movies', function () {
    // Como probamos las rutas, no nos interesa que se enlace el archivo que contiene los
    // servicios sino un mock. Por eso se usa proxyquire y MoviesServiceMock
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    })

    const request = testServer(route);

    // test para las rutas.

    describe('GET /movies', function () {
        it('should respond with status 200', function (done) {
            request.get('/api/movies').expect(200, done);
        });

        // Deberá ser exactamente igual
        it('should respond with the list of movies', function (done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'Movies listed...!!'
                })
                done(); // indica que el test finalizó.
            })
        })

    });
});




