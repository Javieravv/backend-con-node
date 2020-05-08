const fs = require('fs');

try {
    // argv : leer lo que le pasamos desde la terminal
    // Lee el segundo argumento porque ahí va el nombre del archivo cuyas líneas pretendemos contar.
    const file = process.argv[2];

    const content = fs.readFileSync(file).toString();

    const lines = content.split('\n').length;
    console.log(lines);
} catch(err) {
    return console.log ('error...', err);
}