"use strict";
let nombre = 'pepe';
nombre = null;
// Evitar any o usarlo si no sabemos el tipo de dato y dsp reemplazarlo
let datoRandom = 'hola';
function sumar(a, b) {
    return a + b;
}
sumar(1, 2);
// El signo de pregunta hace que el parametro sea opcional
// Se pueden poner parametros por defecto como la edad
const saludar = (edad = 10, nombre) => {
    if (nombre) {
        return 'hola ' + nombre;
    }
    else {
        'Hola, no se tu nombre';
    }
};
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
};
// void: cuando no va a retornar nada en tu funcion
const saludarAPersona = (persona) => {
    alert('hola' + persona.nombre);
};
/* calcularIva que recibe un numero y devuelve un numero que sera el 21% del numero recibido */
const calcularIva = (a) => {
    return a * 0.21;
};
const obtenerImpuestoIva = (a) => {
    const iva = a + 0.21;
    const total = a + iva;
    return {
        iva,
        total,
        base: a
    };
};
const crearPersonaje = (nombre, edad, ciudadOrigen) => {
    return {
        nombre,
        edad,
        ciudadOrigen,
        vida: 100,
        armadura: 0,
        ataque: 0,
        defensa: 0
    };
};
