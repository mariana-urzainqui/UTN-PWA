/* # Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en JavaScript

En este ejercicio, vamos a crear un sistema básico de historial utilizando Programación Orientada a Objetos (POO) en JavaScript. Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.

## Objetivo

- **Crear una clase de historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
- **Usar métodos avanzados de arrays** como `filter`, `find`, y `findIndex` para gestionar el historial.
- **Aplicar conceptos de POO** como clases, objetos, métodos y encapsulamiento.

## Tareas

1. **Definir una clase `Historial`**:
    - Esta clase tendrá una propiedad interna para almacenar las acciones en un array.
    - Incluirá métodos para agregar una nueva acción, eliminar una acción por ID, eliminar todas las acciones y mostrar el historial.

2. **Crear una clase `Accion`**:
    - Cada acción será representada por una instancia de la clase `Accion`.
    - Esta clase tendrá propiedades para `id`, `descripcion` y `fecha`.

3. **Crear métodos en la clase `Historial`**:
   - **`agregarAccion(accion)`**: Método para agregar una nueva acción al historial.
   - **`eliminarAccionPorID(id)`**: Método para eliminar una acción específica del historial usando su ID.
   - **`eliminarTodo()`**: Método para eliminar todas las acciones del historial.
   - **`mostrarHistorial()`**: Método para mostrar en la consola todas las acciones en el historial. */

class Accion {
    id: number
    descripcion: string
    fecha: string

    constructor(
        id: number,
        descripcion: string,
        fecha: string
    ) {
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
    }
}

class Historial {
    acciones: Accion[]
    contadorId: number

    constructor() {
        this.acciones = []
        this.contadorId = 0
    }

    agregarAccion(descripcion: string, fecha: string): Accion[] {
        const nuevaAccion = new Accion(this.contadorId++, descripcion, fecha)
        this.acciones.push(nuevaAccion)
        return this.acciones
    }

    obtenerAccionPorId(id: number): Accion | undefined {
        return this.acciones.find((accion: Accion) => accion.id === id)
    }

    eliminarAccionPorId(id: number): Accion[] {
        this.acciones = this.acciones.filter((accion: Accion) => accion.id !== id)
        return this.acciones
    }

    eliminarTodo(): void {
        this.acciones = []
    }

    mostrarHistorial(): void {
        console.log('Historial de acciones: ')
        this.acciones.forEach(accion => {
            console.log(`Id: ${accion.id}, Descripción: ${accion.descripcion}, Fecha: ${accion.fecha}`)
        })
    }
}


const historial = new Historial()
historial.agregarAccion('Inicio sesion', '26/08/2024')
historial.agregarAccion('Vio el perfil', '26/08/2024')
historial.agregarAccion('Cerro sesion', '26/08/2024')

historial.mostrarHistorial()

const obtenerAccion = historial.obtenerAccionPorId(1)
console.log(obtenerAccion)

historial.eliminarAccionPorId(1)
historial.mostrarHistorial()

historial.eliminarTodo()
historial.mostrarHistorial()






