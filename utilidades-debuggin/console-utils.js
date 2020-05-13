/**
 * %s =  stream
 * %d = número
 * $j = json
 */

//  console.log ("Un %s y un %s son mis mascotas", "perrito", "gatito");

//  console.info ("Hola mundo bello");
//  console.warn ("Hola mundo. Este es un Warm");

//  // Este muestra si hay un error en una comparación lógica
 
//  console.assert(42 == "42"); // Aquì no pasará nada
//  console.assert(42 === "42"); // Aquí sí: son tipos de datos distintos.

//  console.trace ("Aquí hay un error. Muestra línea...");

 const util = require("util");

 const debuglog = util.debuglog('foo'); // variable

 // solo funcionarà si la variable foo se pasa al entorno

 debuglog('Hola mundo for foo');

