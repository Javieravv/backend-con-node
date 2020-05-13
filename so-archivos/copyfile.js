const fs = require ('fs');

// Pueden mejorarse este códiog, para por ejemplo enviar parámetros

fs.copyFile("naranja.txt", "limon.txt",err => {
    if (err) {
        return console.log ('errror...', err);
    }

    console.log ("Se copió el archivo naranja.txt a limon.txt");
})

