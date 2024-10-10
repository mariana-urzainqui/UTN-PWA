## Importacion y Exportacion
Dos opciones:
En el package.json debajo del main ponemos:  "type":"module"
con module el import y export es como en react

Si ponemos  "type":"commonjs",
exportar:
module.exports = {nombre: pepe, calcularPrecioConIva: calcularPrecioConIva}
importar:
const moduloCalculosVarios = require('./utils/calculosVarios.js)

