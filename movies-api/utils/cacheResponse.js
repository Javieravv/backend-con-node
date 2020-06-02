const { config } = require ('../config/index');

function cacheResponse (res, seconds) {
    if (!config.dev) {
        // Se debe escribir exactamente así: Cache-Control
        res.set("Cache-Control", `public, max-age=${seconds}`);
    }
}

// Np tpdas ñas ritas debem tener cache. Solo las que requiren recursos.

module.exports =  cacheResponse;