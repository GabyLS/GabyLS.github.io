// DECLARACIONES DE VARIABLES Y FUNCIONES GLOBALES
let inputs
let form
let button
let camposValidos

const setCustomValidityJS = function(mensaje, index) {
    let divs = document.querySelectorAll('.validation')
    divs[index].innerHTML = mensaje
    divs[index].style.display = mensaje? 'block' : 'none'

}

function algunCampoNoValido() {
    let valido = 
        camposValidos[0] &&
        camposValidos[1] &&
        camposValidos[2] &&
        camposValidos[3] &&
        camposValidos[4] &&
        camposValidos[5] &&
        camposValidos[6] 
        
    return !valido
}

function validar(valor, validador, index) {
// console.log(valor,index)

    if(!validador.test(valor)) {
        setCustomValidityJS('Campo no válido',index)
        camposValidos[index] = false
        button.disabled = true
        return null
    }

    camposValidos[index] = true
    button.disabled = algunCampoNoValido()
    setCustomValidityJS('',index)
    return valor
}

const regExpValidar = [
    /^.+$/,     //regexp nombre
    /^.+$/,     //regexp precio
    /^[0-9]+$/, //regexp stock
    /^.+$/,     //regexp marca
    /^.+$/,     //regexp categoria
    /^.+$/,     //regexp foto
    /^.+$/,     //regexp detalles

]

function renderProds() {

    const xhr = new XMLHttpRequest
    xhr.open('get','plantillas/listado.hbs')
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let plantillaHbs = xhr.response
            // console.log(plantillaHbs)

            var template = Handlebars.compile(plantillaHbs);
            // execute the compiled template and print the output to the console
            let html = template({ productos: productos })
        
            document.getElementById('listado-productos').innerHTML = html

        }
    })
    xhr.send()
}

function leerProductoIngresado(){
    return {
        nombre: inputs[0].value,
        precio: inputs[1].value,
        stock: inputs[2].value,
        marca: inputs[3].value,
        categoria: inputs[4].value,
        foto: inputs[5].value,
        detalles: inputs[6].value,
        envio: inputs[7].checked,
    }
}

function limpiarFormulario(){
 //Borrar inputs
 inputs.forEach(input => {
    if(input.type != 'checkbox') input.value = ''
    else if(input.type == 'checkbox') input.checked = false
})
   

button.disabled = true
camposValidos = [false, false, false, false, false, false, false]
}

// INICIALIZACIONES PARA EL FUNCIONAMIENTO DEL MODULO
async function initAlta() {
    console.warn('initAlta()')



    inputs = document.querySelectorAll('.alta-input')
    form = document.querySelector('.alta-form')
    button = document.querySelector('main form button')

    button.disabled = true
    camposValidos = [false, false, false, false, false, false, false]

    

    inputs.forEach((input,index) => {
        if(input.type != 'checkbox'){
                input.addEventListener('input', () => {
                validar(input.value, regExpValidar[index], index)
            })
        }
    })

    form.addEventListener('submit', e => {
        e.preventDefault()

        
        guardarProducto()
        
       
    })


    obtenerProductos()
}
