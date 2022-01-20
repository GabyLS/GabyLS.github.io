const URL_PRODUCTOS = 'https://61e842dee32cd90017acc179.mockapi.io/productos'

async function obtenerProductosService() {
    let productos = await get(URL_PRODUCTOS)
    //console.log(productos)
    return productos
}

async function guardarProductoService(producto) {
    let productoGuardado = await post(URL_PRODUCTOS, producto)
    //console.log(productoGuardado)
    return productoGuardado
}

async function actualizarProductoService(id,producto) {
    let productoActualizado = await put(URL_PRODUCTOS, id, producto)
    //console.log(productoActualizado)
    return productoActualizado
}

async function borrarProductoService() {
    let productoBorrado = await del(URL_PRODUCTOS, id)
    //console.log(productoBorrado)
    return productoBorrado
}

// obtenerProductos()

// async function test() {
//     let productos = await obtenerProductos()
//     console.log(productos)
// }

// test()