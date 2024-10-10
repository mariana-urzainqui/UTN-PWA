import express, { response } from 'express'
import ResponseBuilder from '../utils/ResponseBuilder.util.js'
import { getUserByName } from '../repositories/user.repository.js'

const userRouter = express.Router()

// SI QUIERO USAR PARAMETROS DE BUSQUEDA EL ENDPOINT VA A ARRIBA DE TODO
// nombre es un parametro de busqueda
userRouter.get('/:nombre', async (request, response) => {
    //request.params es un objeto con todos los parametros de busqueda que hubieron en mi consulta
    console.log(request.params)
    const nombre = request.params.nombre
    const usuario = await getUserByName(nombre)
    response.send(usuario)
})

userRouter.get("/", (request, response) => {
    let res = new ResponseBuilder()
    .setOk(true)
    .setStatus(200)
    .setPayload({
        mensaje: 'datos del usuario'
    })
    .setCode(ResponseBuilder.CODE.GET_INFO_SUCCESS)
    .build()
    response.json(res)
})

userRouter.get("/cantidad", (request, response) => {
    let res = new ResponseBuilder()
    .setOk(true)
    .setStatus(200)
    .setPayload({
        cantidad: '9'
    })
    .setCode(ResponseBuilder.CODE.GET_INFO_SUCCESS)
    .build()
    response.json(res)
})




/* 
Estructuras tipicas de respuesta: (para estandarizar las respuestas)

{
    ok: boolean,
    payload | data: objeto con informacion,
    code: number | string,
    message: string
}

{
    ok: boolean,
    payload | data: objeto con informacion,
}

{
    ok: boolean,
    payload | data: {},
    code: 5,
    message: 'Datos de usuario obtenidos'
}

 */
export default userRouter