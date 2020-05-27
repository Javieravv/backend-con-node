// traemos archivo configuración
const { config } = require('../../config');
const boom = require('@hapi/boom');

function withErrorStack(error, stack) {
    if (config.dev) {
        console.log('IMPRIMISMOS POR AQUÍ EL ERROR...');
        return { ...error, stack }
    }

    return error;
};

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);  // llam siguiente middleware de error
};

function wrapErrors(err, req, res, next) {
    if (!err.isBoom) {
        next(boom.badImplementation());
    }

    next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
    const { output: { statusCode, payload } } = err;
    res.status(statusCode);
    res.json(withErrorStack(payload, err.stack));
};

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
};
