const fs = require('fs');

const server = requiere ('http').createServer ();

server.on('request', (req, res) => {
    // cargamos el archivo gigante.
    // Esto consumirá mucha memoria, si no se utilizan streams.
    fs.readFile("./big", (err, data) => {
        if (err) {
            console.log ('error...', err);
        }
        res.end(data);
    })
})

server.listen(3000);

