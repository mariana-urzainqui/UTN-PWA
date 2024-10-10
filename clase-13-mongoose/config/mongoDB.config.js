import mongoose from "mongoose";

const DB_URL = 'mongodb://localhost:27017'
const DB_NAME = 'APP_HOMEWORKING'
const DB_CONNECTION_STRING = `${DB_URL}/${DB_NAME}`

//Nos conectamos a la base de datos
mongoose.connect(DB_CONNECTION_STRING)

//Guardamos la conexion a mongodb
const database = mongoose.connection

//Una vez que se haya hecho la conexion
database.once('open', () => {
    console.log('Conexion exitosa con mongodb')
})

database.on('error', () => {
    console.error('ERROR MONGODB')
})

/* 
Estamos exportando a mongoose que ya esta conectado 
y database para poder interactuar con la DB
*/
export { mongoose, database }