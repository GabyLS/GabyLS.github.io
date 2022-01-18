function initAlta() {
    console.warn('initAlta()')

    let productos = [
    { nombre: 'Alarma Honeywell inalámbrica', precio: '$ 20000', stock: '26', marca: 'Honeywell', categoria: 'Centrales',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Con teclado' },
    { nombre: 'Alarma silenciosa', precio: '$ 30000', stock: '20', marca: 'Bulldog Inglés', categoria: 'De interior',foto: 'img\productos\perritos\perrito-dormido.jpg', detalles: 'Vigilante' },
    { nombre: 'Cámara Hikvision domo', precio: '$ 2600', stock: '21', marca: 'Hikvision', categoria: 'De interior',foto: 'img\productos\hikvision\camara-analogica.jpg', detalles: 'Seguimiento automático' },
    { nombre: 'Cámara Hikvision  Ip Full Hd', precio: '$ 4900', stock: '23', marca: 'Hikvision', categoria: 'De exterior',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Lente 2.8' },
    { nombre: 'Cámara Hikvision infraroja', precio: '$ 4200', stock: '14', marca: 'Hikvision', categoria: 'De exterior',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'IR30m' },
    { nombre: 'Cámara Ip Ezviz inalámbrica', precio: '$ 4300', stock: '30', marca: 'Ezviz', categoria: 'De interior',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Full HD' },
    { nombre: 'Cámara Ip Ezviz domo', precio: '$ 8000', stock: '22', marca: 'Ezviz', categoria: 'De interior',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Seguimiento automático' },
    { nombre: 'Cámara Ip Ezviz Wifi', precio: '$ 8200', stock: '26', marca: 'Ezviz', categoria: 'De exterior',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Full HD' },
    { nombre: 'Cámara Terry', precio: '$ 30000', stock: '17', marca: 'Terrier', categoria: 'De interior',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Guardián' },
    { nombre: 'Kit alarma + cámara Alonso', precio: '$ 32000', stock: '11', marca: 'Alonso', categoria: 'Centrales',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Kit completo' },
    { nombre: 'Kit alarma Alonso', precio: '$ 2800', stock: '25', marca: 'Alonso', categoria: 'Centrales',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Kit completo' },
    { nombre: 'Kit chihuahuas', precio: '$ 30000', stock: '10', marca: 'Chihuahua', categoria: 'Centrales',foto: 'img\productos\alarmas\alarma1.jpg', detalles: 'Con colmillos' }

    ]

    const inputs = document.querySelectorAll('.alta-input')
    const form = document.querySelector('.alta-form')
    const button = document.querySelector('main form button')

    button.disabled = true
    let camposValidos = [false, false, false, false, false, false, false]

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
        /^.+$/, //regexp nombre
        /^.+$/, //regexp precio
        /^[0-9]+$/, //regexp stock
        /^.+$/, //regexp marca
        /^.+$/, //regexp categoria
        /^.+$/, //regexp foto
        /^.+$/, //regexp detalles

    ]

    inputs.forEach((input,index) => {
        if(input.type != 'checkbox'){
                input.addEventListener('input', () => {
                validar(input.value, regExpValidar[index], index)
            })
        }
    })

    form.addEventListener('submit', e => {
        e.preventDefault()

        let producto = {
            nombre: inputs[0].value,
            precio: inputs[1].value,
            stock: inputs[2].value,
            marca: inputs[3].value,
            categoria: inputs[4].value,
            foto: inputs[5].value,
            detalles: inputs[6].value,
            envio: inputs[7].checked,
        }
        //Borrar inputs
        inputs.forEach(input => {
            if(input.type != 'checkbox') input.value = ''
            else if(input.type == 'checkbox') input.checked = false
        })
           

        // console.log(producto)
        productos.push(producto)

        // console.log(productos)
        renderProds()

        button.disabled = true
        camposValidos = [false, false, false, false, false, false, false]
    }
    )

    function renderProdsObjetos() {
    
        let html = ''
        for(let i=0; i<productos.length; i++){
            html += `<p>${JSON.stringify(productos[i])}</p>`
        }
        document.getElementById('listado-productos').innerHTML = html
    }

    function renderProdsTemplateString() {
        let html = ''

        html += '<table>'
        html += `
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Categoria</th>
                <th>Foto</th>
                <th>Detalles</th>
                <th>Envio</th>
            </tr>
        `



        for(let i=0; i<productos.length; i++){
            
            let producto = productos[i]

            html += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td>${producto.marca}</td>
                <td>${producto.categoria}</td>
                <td>${producto.foto}</td>
                <td>${producto.detalles}</td>
                <td>${producto.envio}</td>
            </tr>
            `
        }
        html += '</table>'
        document.getElementById('listado-productos').innerHTML = html
    }

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

    renderProds()
}
