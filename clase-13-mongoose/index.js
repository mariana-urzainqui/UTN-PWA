import { mongoose } from "./config/mongoDB.config.js";
import { buscarUsuarioPorId } from "./managers/user.manager.js";

// En vez de hacer esto:
/* console.log(await buscarUsuarioPorId('66e976f03c61dbddfda3c8e5')) */

// Es mejor hacer esto:
// then se ejecuta cuando la promesa se cumpla (osea la funcion retorne)
// catch se ejecuta cuando la promesa no se cumpla (osea la funcion hizo un throw)
// finally es un metodo de promesa que se ejecuta al finalizar la misma (independientemente de si la accion funciono o fallo)

/* Solo conviene usar .then .chatch si no se deben hacer multiples operaciones asincronicas, sino podemos caer en el callback hell*/
buscarUsuarioPorId('66e976f03c61dbddfda3c8e5')
.then(
    (retorno) => {
        console.log(retorno)
    }
)
.catch(
    (error)=> {
        console.log('Ocurrio una excepcion', error)
    }
)
.finally(() => {
    console.log('proceso terminado')
})



