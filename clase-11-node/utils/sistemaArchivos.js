/* Modulo nativo del sistema de archivos de nodejs
Nos permite interactuar con el sistema de archivos
 */
const filesystem = require('fs')


const crearTxt = () => {
    // Crear un archivo de manera sincronica
    /* 
    writeFileSync recibe 3 parametros:
    1) direccion o path con el nombre de archivo a crear y extension
    2) info o data a escribir
    3) encoding o codificacion de caracteres
    */
    filesystem.writeFileSync('./archivos/archivo.txt', 'Hola mundo desde node.js', 'utf-8')
}


/* Funcion que nos permita leer archivos */
const leerTxt = () => {
    const data = filesystem.readFileSync('./archivos/archivo.txt', 'utf-8')
    console.log('El contenido de archivo.txt es: ' + data)
}


const crearJSON = (direccion_y_nombre, contenido) => {
    filesystem.writeFileSync('./archivos/json/' + direccion_y_nombre + '.json', JSON.stringify(contenido), 'utf-8')
    console.log(`Archivo: ./archivos/json/${direccion_y_nombre}.json ha sido creado con exito`)
}

const leerJSON = (direccion_y_nombre) => {
    const data = filesystem.readFileSync('./archivos/json/' + direccion_y_nombre + '.json', 'utf-8')
    return JSON.parse(data)
}

module.exports = {
    crearTxt,
    leerTxt,
    crearJSON,
    leerJSON
}