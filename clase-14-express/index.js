/* EXPRESS
Es una libreria que nos permite crear APIS

API: Application Programming Interface
Es una aplicacion que se se ejecuta en mi PC y nos va a permitir conectar cosas y manejar logica de negocio

Va a hacer el registro y la conexion con la base de datos 
*/

import express from 'express'
import filesystem from 'fs'

//Aqui guardaremos a nuestra api
const app = express()

//Middleware que nos habilita a recibir consultas con url encoded
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.send('hola')
})

app.get('/fecha', (request, response) => {
    response.send(new Date().toString())
})


/* 
POST usuario
1)
Deben usar filesystem y asincronia
vamos a verificar que valores hay en ./usuarios.json
Si la resupuesta es '':
crearemos un array y agregaremos el usuario recibido.
Si la resupuesta es distinta de '':
Vamos a transformar la respuesta a objeto de JS y agregregaremos al usuario recibido
Finalmente lo guardaremos en el archivo usuarios.json
2)
Validar que la consulta este bien hecha, es decir que reciba el nombre y el email
En caso de no recibir deberemos responder con el detalle del error:
Ej:
{nombre:''} => Falta ingresar nombre
Aplicar try catch sobre el codigo, si alguna operacion como readFile, writeFile, JSON.parse o JSON.stringrify falla
debemos capturar el fallo en el catch, mostrar dicho fallo por consola de error y responder con un 'Fallo interno en el servidor'
*/

//request es el objeto donde se guarda los datos de consulta
//request.body es la carga util recibida (los datos recibidos)

app.post('/usuario', async (request, response) => {
    const usuario = {
        nombre: request.body.nombre,
        email: request.body.email
    }

    let usuarios
    const resultado = await filesystem.promises.readFile('./usuarios.json', 'utf-8')
    if(!resultado){
        usuarios = []
        usuarios.push(usuario)
    }
    else{
        //En caso de que haya usuarios
        usuarios = JSON.parse(resultado)
    }
    usuarios.push(usuario)
    await filesystem.promises.writeFile('./usuarios.json', JSON.stringify(usuarios), {encoding:'utf-8'})
    response.send('Usuario registrado con exito')
})


app.listen(3000, () => {
    console.log('Aplicacion escuchandose en el http://localhost:3000')
})
