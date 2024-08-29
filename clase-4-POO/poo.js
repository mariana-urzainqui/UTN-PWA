let id_counter = 1

const crearProducto = (nombre, precio) => {
    return {
        nombre: nombre,
        precio: precio,
        id: id_counter++
    }
}

const producto_1 = crearProducto('pc dell', 300)

const producto_2 = crearProducto('pc samsung', 600)

const producto_3 = crearProducto('pc escritorio', 1400)


/* 
this: es una autoreferencia. Hace referencia al contexto en el cual esta siendo invocado, es un dato que va a ir variando depende el contexto en el que este usado.

new: se usa para crear una instancia de un objeto a apartir de una funcion constructora.
*/

//POO EN ES5 (ya no se hace asi)
/* Propiedades: se crean en cada instancia del objeto */
function Producto(nombre, precio, descripcion) {
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.id = id_counter++
}

// Metodos: se crean una sola vez
Producto.prototype.saludar = function () {
    console.log('hola')
}

const producto_x = new Producto('pc', 100, 'lorem')

//POO en la actualidad


/* 
- constructor es una funcion que se invocara al instanciarse la clase 
- las clases devuelven objetos
- las clases retornan siempre a this, que es un objeto
- this en una clase hace una autoreferencia al propio objeto que va a retornar
- podemos modificar a this como si fuera un objeto (es un objeto)
*/
class Personaje {
    constructor(nombre) {
        console.log('hola, me estoy instanciando')
        console.log(nombre)
        //Crear la propiedad en el objeto llamada 'propiedad_x' con valor random
        this.propiedad_x = 'random'
        this.nombre = nombre
        //muestro por consola el objeto
        console.log(this)
    }
    comer(comida) {
        return this.nombre + 'esta comiendo ' + comida
    }
}
// Instanciando la clase personaje
const personaje = new Personaje('pepe')
const personaje_2 = new Personaje('juan')

alert(personaje.comer('pollo con fritas'))
