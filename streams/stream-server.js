// Cargamos el archivo gigante, pero ocupando menos memoria

const fs = require('fs');

const server = require ('http').createServer ();

server.on('request', (req, res) => {
    // Leemos ese archivo gigante, pero con streams.
    const src = fs.createReadStream('./big');
    src.pipe(res);
})

console.log ('Servidor corriendo en http://localhost:3000');
server.listen(3000);


