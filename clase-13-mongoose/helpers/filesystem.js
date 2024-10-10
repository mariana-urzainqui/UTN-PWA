import filesystem from 'fs'
import ERRORES from './constants/errors.js'

const crearTxt = async (nombre_archivo, texto) => {
    try{
        if(!nombre_archivo){
            throw {detail: 'No hay nombre de archivo', name: 'INVALID_ARGUMENT'}
        }
        if(!texto){
            throw {detail: 'No hay texto', name: 'INVALID_ARGUMENT'}
        }
        await filesystem.promises.writeFile('./logs/' + nombre_archivo + '.txt', texto, 'utf8' )
        console.dir('Archivo creado con exito!')
        return true
    }
    catch(error){
        const errorCustom = ERRORES[error.name]
        if(errorCustom){
            errorCustom.action('index.js linea 31', error.detail)
        }
        

        console.log(error)
        console.error('No se pudo guardar el archivo')
        throw error
    }

}


const procesoX = async () =>{
    try{
        await crearTxt('log-1')
        await crearTxt('log-2', 'juan')
        /* console.log('accion super importante') */
    }
    catch(error){
        console.error('Error en el proceso X')
    }
    
    
}

procesoX()

