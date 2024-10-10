//Motores de plantilla o template engine
//Tambien aprendemos a configurar archivos estaticos
//HANDLEBARS

import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

const PORT = 5000

//Indicar a nuestros server que pueda enviar archivos estaticos dentro de la carpeta /public
app.use(express.static('./public'))

//Este middleware nos transforma las consultas enviadas con url-encoded a objeto (BODY)
app.use(express.urlencoded({extended: true}))

//Indicamos que a los archivos con la extension handlebars deberemos tratarlos usando la libreria handlebars
app.engine('handlebars', engine())

//Cuando el servidor quiera renderizar respuestas, lo hara usando handlebars
app.set('view engine', 'handlebars')
app.set('views', './views')

const productos = [
    {
        id: 1,
        nombre: 'Tv samsung',
        precio: 100,
        descripcion: 'La mejor tv',
        stock: 5
    },
    {
        id: 2,
        nombre: 'Tv LG',
        precio: 150,
        descripcion: 'La mejor tv',
        stock: 15
    },
    {
        id: 3,
        nombre: 'Tv noblex',
        precio: 200,
        descripcion: 'La mejor tv',
        stock: 10
    }
]

app.get('/', (req, res) => {
    try {

        /* throw new Error('No hay productos ahora') */
        const response = {
            status: 200,
            message: 'Productos obtenidos',
            ok: true,
            data: {
                titulo: 'Titulo X',
                fecha_hoy: '3/10/2024',
                valor_dolar: 1200,
                productos
            },
            layout: 'products' //El nombre del layout que queremos mostrar
        }
        //Nombre del archivo que queremos renderizar (en este caso home.handlebars)
        res.render('home', response)
    }

    catch (error) {
        const response = {
            status: 500,
            message: 'Internal server error',
            ok: false,
            data: {
                detail: error.message
            }
        }
        res.render('home', response)
    }
})

app.get('/products/new', (req, res) => {
    res.render('product-form', {
        data: {
            errors: {
                nombre: null,
                precio: null,
                stock: null,
                descripcion: null
            },
            form_state: {
                product: {
                    nombre: '',
                    precio: '',
                    stock: '',
                    descripcion: ''
                }
            }
        }
    })
})

app.post('/products/new', (req, res) => {
    const {nombre, precio, stock, descripcion} = req.body
    const newProduct = {nombre, precio, stock, descripcion}
    console.log('Recibido!')
    /* Si el producto se creo, redireccionar a lista de prodctos o detalle de producto
    sino, mostrar el formulario con el error ocasionado */
    const errores = {
        nombre: null,
        precio: null,
        stock: null,
        descripcion: null
    }
    if (!req.body.nombre.trim() || !isNaN(req.body.nombre)) {
        errores.nombre = 'No se puede enviar un valor numerico o vacio'
    }
    if (!req.body.precio.trim() || isNaN(req.body.precio.trim())) {
        errores.precio = 'El precio debe ser un numero'
    }
    if (!req.body.stock.trim() || isNaN(req.body.stock.trim())) {
        errores.stock = 'El stock debe ser un numero'
    }
    console.log(errores)

    let hayError = Object.values(errores).some(error => error !== null)
    if (hayError) {
        return res.render(
            'product-form',
            {
                data: {
                    errors: errores,
                    form_state: {
                        product: newProduct
                    }
                }
            }
        )
    }
    productos.push({ ...newProduct, id: productos.length + 1 })
    res.redirect('/')
})


app.get('/products/:product_id', (req, res) => {
    const { product_id } = req.params
    //Aqui pueden validar el product id
    const producto_buscado = productos.find(producto => producto.id === Number(product_id))
    const response = {
        ok: true,
        message: 'Producto obtenido',
        status: 200,
        data: {
            esCaro: producto_buscado.precio > 100,
            product: producto_buscado
        }
    }
    res.render('product-detail', response)
})

/* 
Method: GET 
Endpoint: /product/:product_id/update
Accion: Mostrar formulario de actualizacion
Descripcion:
Recibiran un id por parametro de busqueda, deberan buscar ese producto y renderizar un formulario para actualizar el producto, el formulario cargara los valores actuales del producto

Ejemplo de respuesta: 
res.render('update-product-form',{
    errores: {
        nombre: null,
        stock: null,
        precio: null,
        descripcion: null
    },
    form_state: {
        product: {
            id: 1,
            nombre: 'Tv samsung',
            precio: 100,
            descripcion: 'La mejor tv',
            stock: 5
        }
    }
})

Ejemplo de plantilla:

<form action="/product/{{this.form_state.product.id}}/update" method="POST">

    <input type='submit' value="Actualizar" />
</form>


Method: POST
Endpoint /product/:product_id/update
Accion: Actualizar Producto
Descripcion:
Deberemos tener una ruta para actualizar producto, cuando se nos envie el producto deberemos validar los campos:
stock, precio, nombre (como en la ruta de POST). Si hay error, deberemos mostrar el error y NO actualizar
Si no hay errores deberemos actualizar el producto con los nuevos valores (NO agregar Ni cambiar el id bajo ningun termino)
Cuando se actualize redireccionar a '/product/:product_id'

*/

app.get('/products/:product_id/update', (req, res) => {
    const {product_id} = req.params
    const producto_buscado = productos.find(producto => producto.id === Number(product_id))


    res.render('product-form-update', {
        data: {
            errors: {
                nombre: null,
                precio: null,
                stock: null,
                descripcion: null
            },
            form_state: {
                product: {
                    id: producto_buscado.id,
                    nombre: producto_buscado.nombre,
                    precio: producto_buscado.precio,
                    stock: producto_buscado.stock,
                    descripcion: producto_buscado.descripcion
                }
                
            }
        }
    })
})

app.post('/products/:product_id/update', (req, res) => {
    const { product_id } = req.params
    const { nombre, precio, stock, descripcion } = req.body
    const productoActualizado = { nombre, precio, stock, descripcion }

    const errores = {
        nombre: null, 
        precio: null, 
        stock: null, 
        descripcion: null
    }

    if (!nombre.trim() || !isNaN(nombre)) {
        errores.nombre = 'No se puede enviar un valor numérico o vacío'
    }

    if (!precio.trim() || isNaN(precio.trim())) {
        errores.precio = 'El precio debe ser un valor numérico'
    }

    if (!stock.trim() || isNaN(stock.trim())) {
        errores.stock = 'El stock debe ser un valor numérico'
    }

    let hayError = Object.values(errores).some(error => error !== null)

    if (hayError) {
        return res.render(
            'product-form-update',
            {
                data: {
                    errors: errores,
                    form_state: {
                        product: {...productoActualizado, id: product_id}
                    }
                }
            }
        )
    }

    const productoIndex = productos.findIndex(producto => producto.id === Number(product_id))

    productos[productoIndex] = {
        ...productos[productoIndex],
        nombre,
        precio,
        stock,
        descripcion
    }

    res.redirect(`/products/${product_id}`)
})

app.listen(PORT, () => {
    console.log(
        `La aplicacion se esta ejecutando en http://localhost:${PORT}`
    )
})