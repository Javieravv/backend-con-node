// Cuando se quiere avisar que ya está obsoleta alguna función

const util = require('util');

const helloPluton = util.deprecate ( () => {

}, "Plutón is deprecated. It is not a planet anymore" );

helloPluton();