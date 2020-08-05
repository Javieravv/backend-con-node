const jwt = require ('jsonwebtoken');

// los argumentos los sacamos del a terminal
// option será verificar o firmar
const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) {
    return console.log ("Missgin arguments");
}

function signToken (payload, secret) {
    return jwt.sign (payload, secret);
}

function verifyToken (token, secret) {
    return jwt.verify(token, secret);
}

if (option == 'sign') {
    console.log (signToken( { sub: nameOrToken }, secret));
} else if (option == 'verify') {
    console.log (verifyToken( nameOrToken, secret))
} else {
    console.log ('Options need to be "sign" or "verify"');
}

