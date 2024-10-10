import Usuario from "../models/user.model.js"
import ERRORES from "../constants/errors.js"

const crearUsuario = async (nombre, email, rol, password, nro_telefono, direccion) => {
    try {
        const usuario = new Usuario({
            nombre,
            email,
            rol,
            password,
            nro_telefono,
            direccion})
        const resultado = await usuario.save()
        return resultado
    }
    catch(error){
        const customError = ERRORES[error.code]
        console.log(customError)
        console.log(error)
    }
}

// Todo lo que interactue con la base de datos va aser asincronico. (Por eso va el async)
// Como puede fallar hay que poner un try - catch

const buscarUsuarioPorId = async (id) => {
    try{
        if(!id){
            throw {error:'No recibi un id', code: 3}
        }
        const result = await Usuario.findById(id)
        return result
    }
    catch(error){
        throw error
    }
}

const actualizarUsuario = async (id, data) => {
    try{
        // findByIdAndUpdate

        const usuarioActualizado = await Usuario.findByIdAndUpdate(id, data, {new: true})
        console.log(usuarioActualizado)
    }
    catch(error){
        console.log("ERROR", error)
    }
}

actualizarUsuario('66e976f03c61dbddfda3c8e5', {direccion: 'prueba 2'})


const eliminarUsuarioPorId = async (id) => {
    try{
        const resultado = await Usuario.findByIdAndDelete(id)
        console.log(resultado)
    }
    catch(error){
        console.error(error)
    }
}

eliminarUsuarioPorId('66e97d2587b4a37baa29eb69')


export { crearUsuario, buscarUsuarioPorId }