const fs = require ('fs');

const files = fs.readdir(__dirname, (err, files) => {
    if (err) {
        return console.log ('Se ha presnetado error...', err);
    };

    console.log (files);
})