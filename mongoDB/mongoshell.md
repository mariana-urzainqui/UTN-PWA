## Movernos a la base de datos que queremos usar, si no existe la crea
use <nombre_base_datos>
ej:
use APP_HOMEWORKING

## Crear una coleccion
db.createCollection("<nombre_coleccion>")
ej:
db.createCollection("usuarios")

## Insertar en nuestra coleccion

db.<nombre_coleccion_a_insertar>.insertOne(<objeto_de_insercion>)
db.<nombre_coleccion_a_insertar>.insertMany(<array_de_insercion>)

ej:
db.usuarios.insertOne({
    nombre: "Pepe",
    email: "pepe@gmail.com",
    rol: "usuario",
    password: "pepe123",
    nro_telefono: "+54 911 23221323",
    direccion: "Argentina, Buenos Aires",
    creado_en: new Date()
})

db.usuarios.insertMany(
    [
        {
             nombre: "Maria",
            email: "maria@gmail.com",
            rol: "usuario",
            password: "maria123",
            nro_telefono: "+54 911 23245623",
            direccion: "Argentina, Buenos Aires",
            creado_en: new Date()
        },
        {
             nombre: "Juan",
            email: "juan@gmail.com",
            rol: "usuario",
            password: "juan123",
            nro_telefono: "+54 911 23221563",
            direccion: "Argentina, Buenos Aires",
            creado_en: new Date()
        }
    ]
)

## Buscar en la base de datos 

// Busca usuarios con el mail pepe@gmail.com
db.usuarios.find({email:"pepe@gmail.com"})

// Busca todos los usuarios 
db.usuarios.find({})

// Busca solo uno
db.usuarios.findOne({email:"pepe@gmail.com"})

## Eliminar elementos en la base de datos

// Eliminar un elemento por id
db.usuarios.deleteOne({_id: ObjectId:('66d9ade7ea45242b72b046db')})

// Eliminar varios elementos
db.usuarios.deleteMany({<aca_iria_la_condicion>})

## Actualizar elementos en la base de datos

// Actualizar un elemento
db.usuarios.updateOne(
    {
        _id: ObjectId("66d9ade7ea45242b72b046db")
    },
    {
        $set: {
            email: "juansito@gmail.com",
            nro_telefono: "54 911 15422688 "
        }
    }
)