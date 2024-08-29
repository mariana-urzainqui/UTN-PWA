// Tipado de arrays

const nombres: string[] = ['pepe', 'juan', 'maria']

const notas: number[] = [10, 7, 2]

const arrayEspecial: [string, number] = ['pepe', 15]

interface Producto {
    nombre: string,
    id: number,
    precio: number,
    descripcion: string
}

/* const producto_1: Producto = {
    nombre: 'tv samsung',
    id: 1,
    precio: 10,
    descripcion: 'lorem'
} */
/* const lista_productos: Producto[] = [
    producto_1,
    {
        nombre: 'tv noblex',
        id: 2,
        precio: 20,
        descripcion: 'lorem'
    },
    {
        nombre: 'tv LG',
        id: 3,
        precio: 41,
        descripcion: 'lorem'
    },
    {
        nombre: 'tv LG',
        id: 4,
        precio: 50,
        descripcion: 'lorem'
    }
]
 */
/* const tvNoblex: Producto | undefined = lista_productos.find(
    (producto : Producto) : boolean => {
        return producto.id === 2
    })

 */
/* 
retornos metodos avanzados
forEach => void
map => array
filter => array con el tipo de array original
find => elemento del array | undefined
findIndex => number 
*/

/* Quiero un array de booleanos donde los productos cuyo precio sea menor a 40 esten como true, pero los que sean mayores o iguales esten como false */
/* 
const preciosMenoresA40 : boolean[] = lista_productos.map((producto : Producto) : boolean => producto.precio < 40)
console.log(preciosMenoresA40) */

//POO

class Personaje {
    nombre: string

    constructor(nombre: string){
        this.nombre = nombre
    }
    comer(comida : string) : string{
        return this.nombre + ' esta comiendo ' + comida
    }
}

const personaje_principal : Personaje = new Personaje('pepe')
let mensaje: string = personaje_principal.comer('pollo frito')
document.write(mensaje)


// La clase es la encargada de modificar las propiedades y acciones de mi objeto
let id_counter = 0
class Producto{
    nombre : string
    precio : number
    
    constructor(nombre : string, precio : number){
        this.nombre = nombre
        this.precio = precio
    }
}


class ManejadorProductos {
    productos : Producto[]
    id : number

    constructor(){
        this.productos = []
        this.id = id_counter++
    }
    agregarProducto (producto : Producto) : Producto[]{
        this.productos.push(producto)
        return this.productos
    }
}

const manejadorProducto : ManejadorProductos = new ManejadorProductos()

const producto_1 : Producto = new Producto('tv', 700)
manejadorProducto.agregarProducto(producto_1)

console.log(manejadorProducto)