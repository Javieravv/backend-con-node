const EventEmiter = require ('events');

class Logger extends EventEmiter {
    execute (cb) {
        console.log ('Before');
        this.emit('start');
        cb();
        this.emit ('finish');
        console.log ('After');
    }
}

const logger = new Logger();

logger.on ('start', () => console.log ('STARTING...'));
logger.on ('finish', () => console.log ('FINALIZANDO...'));
logger.on ('finish', () => console.log ('IT IS DONE...'));
logger.on ('start', () => console.log ('STARTING...'));


// logger.execute( () => console.log ('HOLA MUNDO...') );
logger.execute( () => setTimeout (() => console.log ('HOLA MUNDO CON SETTIMEOUT...'), 500));