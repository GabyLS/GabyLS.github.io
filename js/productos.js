let productos = []

async function obtenerProductos() {
    productos = await obtenerProductosService()
    
    renderProds()
}

//obtenerProductos()

async function guardarProducto() {
    let producto = leerProductoIngresado()
    limpiarFormulario()

    let productoGuardado = await guardarProductoService(producto)
    console.log(productoGuardado)

    productos.push(productoGuardado)

    renderProds()
    
}
