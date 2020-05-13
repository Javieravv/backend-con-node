// Este script imprime en archivos separados los mensajes de console.log y console.err

const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const consoleFile = new console.Console(out, err);

setInterval(() => {
    consoleFile.log(new Date());
    consoleFile.error('error presentado...', new Error ('Opppsss!!!...'));
}, 2000);

