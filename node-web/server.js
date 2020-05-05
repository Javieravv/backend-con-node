const http = require('http');

const server = http.createServer();

// El servidor funciona con eventos.

server.on('request', (req, res) => {
    res.statusCode = 200; // todo ok
    res.setHeader ('Content-Type', 'text/plain');

    res.end('<h2>Hello Word pretty \n</h2>');
})

server.listen (8000);
console.log ('Servidor en la url http://localhost:8000'); // solo informativo

// creamos otro servicdor que sirve cono eco. recibe datos y los imprime directamente
