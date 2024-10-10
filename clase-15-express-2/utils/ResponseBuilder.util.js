/* Object.freeze (protege nuestro objeto)
- Hace que el objeto sea inmutable
- No se puede editar las propiedades
- No se puede crear propiedades
- No se puede eliminar propiedades
*/

/* static: una propiedad estatica significa que la puedo acceder desde la misma clase
Ejemplo:
class ClaseX{
    static valor = 9
}
console.log(ClaseX.valor) //esto mostrara 9 por consola
*/

class ResponseBuilder {
    static CODE = Object.freeze({
        GET_INFO_SUCCESS: 'GET_INFO_SUCCESS'
    })

    constructor() {
        this.response = {
            ok: false,
            status: 500,
            payload: {},
            code: null
        }
    }
    setStatus(status){
        this.response.status = status
        return this
    }

    setOk (ok){
        this.response.ok = ok
        return this
    }

    setPayload(payload){
        this.response.payload = payload
        return this
    }

    setCode(code){
        this.response.code = code
        return this
    }

    build(){
        return this.response
    }
}

export default ResponseBuilder

