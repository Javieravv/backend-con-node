const { Transform } = require('stream');

// Recibe una cadena y la devuelve en formato camel case.
// JAVIER VARGAS = JavierVargas

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk
            .toString()
            .toLowerCase()
            .split(' ')
            .map(item => item[0].toUpperCase() + item.slice(1, item.length))
            .join(''));
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);