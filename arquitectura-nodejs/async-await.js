const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        let i = Math.random();
        console.log('Valor de i = ', i);
        if (i < 0.5) {
            resolve ('Hello world...todo bien')
        } else {
            reject (new Error('Hola. Hubo un error'))
        }
    }, 2000);
});

async function asyncAwait () {
    try {
        const msg = await promiseFunction();
        console.log ('MENSAJE QUE ELLEGA...', msg)
    } catch (error) {
        console.log ('error...', error)
    }
};

asyncAwait();