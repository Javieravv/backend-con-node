const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let i = Math.random();
        console.log('Valor de i = ', i);
        if (i < 0.5) {
            resolve ('Hello world...todo bien')
        } else {
            reject (new Error('Hola. Hubo un error'))
        }
    }, 2000);
})

promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log('Mensaje: ', msg))
    .catch(err => console.log('Error...', err));