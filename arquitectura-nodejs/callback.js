const asyncCallback = function (cb) {
    setTimeout(() => {
        let i = Math.random();
        console.log ('Valor de i = ', i);
        if (i < 0.5) {
            return cb (null, 'Hello world...todo bien')
        } else {
            cb (new Error ('Hola. Hubo un error'))
        }
    }, 2000);
}

asyncCallback( (err, msg) => {
    if (err) {
        console.log ('HUBO UN ERROR...');
    } else {
        console.log ('EL MENSAJE QUE LLEGA ES ', msg);
    }
} )