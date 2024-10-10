// con importarlo ya lo estoy ejecutando
import { mongoose } from "./config/mongoDB.config.js";
import ERRORES from "./constants/errors.js";

/* 
MongoDB no tiene schemas
Mongoose trae schemas
Schema es una plantilla que define como se va a registrar un dato
*/

const usuarioSchema = new mongoose.Schema(
    {
        nombre: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        rol: {type: String, required: true},
        password: {type: String, required: true},
        nro_telefono: {type: String, required: true},
        direccion: {type: String, required: true},
        creado_en: {type: Date, default: Date.now}
    }
)

const Usuario = mongoose.model('Usuario', usuarioSchema)


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

crearUsuario('mariana', 'mariana@gmail.com', 'user', 'mariana123', '4587448888', 'direccion')

