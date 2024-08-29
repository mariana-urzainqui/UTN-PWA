let nombre: string | null = 'pepe'
nombre = null

// Evitar any o usarlo si no sabemos el tipo de dato y dsp reemplazarlo
let datoRandom: any = 'hola'

function sumar(a: number, b: number): number {
    return a + b
}

sumar(1, 2)
// El signo de pregunta hace que el parametro sea opcional
// Se pueden poner parametros por defecto como la edad
const saludar = (edad: number = 10, nombre?: string) => {
    if (nombre) {
        return 'hola ' + nombre
    }
    else {
        'Hola, no se tu nombre'
    }
}

/* const persona : {
    nombre: string,
    apellido: string,
    edad: number
} = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
} */

interface Persona {
    nombre: string,
    apellido: string,
    edad: number
}

const persona: Persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
}

// void: cuando no va a retornar nada en tu funcion
const saludarAPersona = (persona: Persona): void => {
    alert('hola' + persona.nombre)
}

/* calcularIva que recibe un numero y devuelve un numero que sera el 21% del numero recibido */

const calcularIva = (a: number): number => {
    return a * 0.21
}


/* obtenerImpuestoIva que recibira un numero y retornara un objeto, el objeto tendra el siguiente esquema:
{
    iva:21% del numero recibido,
    total: numero recibido + iva,
    base: numero recibido
}
 */

interface DetalleImpuesto {
    iva: number,
    total: number,
    base: number
}

const obtenerImpuestoIva = (a: number): DetalleImpuesto => {
    const iva = a + 0.21
    const total = a + iva

    return {
        iva,
        total,
        base: a
    }
}

/* Crear una funcion que se llame crearPersonaje que recibira un nombre, una edad y una ciudad de origen. Retornar un objeto con el siguiente esquema:
{
    nombre: nombre,
    edad: edad,
    ciudadOrigen: ciudadOrigen,
    vida: 100,
    armadura: 0,
    ataque: 0,
    defensa: 0
} 
*/

interface Personaje {
    nombre: string,
    edad: number,
    ciudadOrigen: string,
    vida: number,
    armadura: number,
    ataque: number,
    defensa: number
}

const crearPersonaje = (nombre: string, edad: number, ciudadOrigen: string): Personaje => {
    return {
        nombre,
        edad,
        ciudadOrigen,
        vida: 100,
        armadura: 0,
        ataque: 0,
        defensa: 0
    }
}

