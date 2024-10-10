/*
con module: 
import { calcularPrecioConIva } from "./utils/calculosVarios"; 
*/
/* con commonjs:*/
const { default: nodemon } = require('nodemon')
const { calcularPrecioConIva } = require('./utils/calculosVarios.js')
const { formatearPrecio } = require('./utils/formatos.js')
const { crearTxt, leerTxt, crearJSON, leerJSON } = require('./utils/sistemaArchivos.js')
const { validarEmail, validarNombre, validarNumero } = require('./utils/validaciones.js')

/* crearTxt()
leerTxt()

const persona = {
    nombre: 'pepe',
    edad: 90
}
crearJSON('persona-1', persona) */

let persona_1 = leerJSON('persona-1')
console.log(persona_1)


/* const precio_vaso = 20

const objeto_iva = calcularPrecioConIva(precio_vaso)
console.log('El iva del vaso es: ' + formatearPrecio(objeto_iva.iva))

let email_recibido = 'pepe@pepe'
console.log('Email valido:', validarEmail(email_recibido))

let numero_recibido = '1'
console.log('Número valido:', validarNumero(numero_recibido))

let nombre_recibido = 'pepe'
console.log('Nombre valido:', validarNombre(nombre_recibido)) */

