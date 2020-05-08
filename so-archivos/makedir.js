const fs = require ('fs');

// Creamos  un directorio.
// Pueden crearse directivos recursivos. En el ejemplo crea directorio platzi, 
// en este crea escuela-js y en este crea node.

fs.mkdir('platzi/escuela-js/node', { recursive: true }, (err) => {
    if (err) {
        return console.log (err);
    }
});