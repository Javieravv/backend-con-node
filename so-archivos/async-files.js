const fs = require('fs');

// argv : leer lo que le pasamos desde la terminal
// Lee el segundo argumento porque ahí va el nombre del archivo cuyas líneas pretendemos contar.
const file = process.argv[2];

if (!file) {
    throw new Error('Debes indicar qué archivo leer');
}

const content = fs.readFile(file, function (err, content) {
    if (err) {
        return console.log(err);
    }
    const lines = content.toString().split('\n').length;
    console.log(lines);
})


