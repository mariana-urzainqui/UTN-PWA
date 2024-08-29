import { Empleado, Puesto, Pasante } from "./Types/Empleado.js"
/*
# Consiga POO Ts

*Negocio:*
-Somos una empresa de Software (software factory) que se dedica a crear soluciones IT variadas
-Tenemos empleados del rubro IT
    *Tipos de empleados*
    *Project Manager
    *Developers
    *Designers
    *Marketing

*Problema:*
Necesitamos crear un software que nos permita administrar el manejo de los empleados de la empresa
*Clase empleado:*
    *nombre
    *sueldo
    *fecha_de_contratacion
    *id_empleado
    *tipo: Project Manager, Developer, Disigner, Marketing

*Clase manejador empleados*
    *id_manejador
    *empleados (lista de empleados)

*metodos*
    *agregar_empleado
    *obtener_empleado_por_id
    *obtener_empleados_por_tipo 
*/

class ManejadorEmpleados {
    id_empleados: number
    empleados: Empleado[]
    empresa: string

    constructor(empresa: string) {
        this.id_empleados = 0
        this.empleados = []
        this.empresa = empresa
    }

    agregar_empleado(
        nombre: string, 
        sueldo: number, 
        fecha_de_contratacion: string, 
        puesto: Puesto
    ) : Empleado[] {
        const nuevoEmpleado = new Empleado(nombre, sueldo, fecha_de_contratacion, puesto, this.id_empleados++)
        this.empleados.push(nuevoEmpleado)
        return this.empleados
    }
    obtener_empleado_por_id(id: number): Empleado | undefined {
        return this.empleados.find((empleado : Empleado) : boolean => (empleado.id_empleado === id))
    }
    obtener_empleados_por_puesto(puesto: Puesto): Empleado[] {
        return this.empleados.filter((empleado : Empleado) : boolean => (empleado.puesto === puesto))
    }
}

const manejadorEmpleados = new ManejadorEmpleados('Banco de la Pampa');
manejadorEmpleados.agregar_empleado('Martin Gubler', 1800000, '20/08/2024', 'Developer')
manejadorEmpleados.agregar_empleado('Guillermo Eduardo', 2000000, '20/08/2024', 'Project Manager')
console.log(manejadorEmpleados)


const guille : Empleado | undefined = manejadorEmpleados.obtener_empleado_por_id(1)
console.log(guille)

const developersBancoDeLaPampa : Empleado[] = manejadorEmpleados.obtener_empleados_por_puesto('Developer')
console.log(developersBancoDeLaPampa)

const pasante_1 = new Pasante('Pepe', 200000, '20/8/2024', 'Developer', 2, 3)
console.log(pasante_1)
guille.aumentarSueldo(40000)
pasante_1.aumentarSueldo(30000)
pasante_1.finalizarPasantia()
pasante_1.presentar()
guille.presentar()