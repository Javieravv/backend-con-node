const { Writable } = require('stream');

const writableStream = new Writable ({
    write (chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

// deben añadirse a un read

process.stdin.pipe(writableStream);

