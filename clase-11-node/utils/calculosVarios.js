/* Crear una funcion que reciba un precio y retorne un objeto con
ej:
recibe 100
{
    iva: 21,
    precio_original: 100,
    precio_final: 121
}
*/
/*con module:
 export const calcularPrecioConIva = (precio) => { */
const calcularPrecioConIva = (precio) => {
    const iva = precio * 0.21
    const precio_final = precio + iva
    
    return {
        iva,
        precio_original: precio,
        precio_final
    }
}


/*
con commonjs: */
module.exports = {
    calcularPrecioConIva
}
