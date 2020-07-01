const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
    // Esta función devuelve un middelware
    // 
    return function (req, res, next) {
        if (!req.user || (req.user && !req.user.scopes)) {
            next(boom.unauthorized('Missing scopes'));
        }

        // verificamos si tiene acceso el usuario, pues hay scopes públicos 
        // y scopes de administración
        const hasAccess = allowedScopes.map(allwedScope => req.user.scopes.includes(allwedScope))
            .find(allowed => Boolean(allowed));

        // Si tiene acceso se llama el otro middleware
        if (hasAccess) {
            next ();
        } else {
            next(boom.unauthorized('Insuficient scopes'));
        }
    }

}

module.exports = scopesValidationHandler;