function initInicio() {
    console.warn('initInicio()')

    function Card(heading, image, price) {
        this.heading = heading
        this.image = image
        this.price = price
        this.appendTo = function (destinationElement){
            var card = document.createElement('a')
            card.classList.add('card')
            card.href = 'https://sony.com'
            var that = this
            card.addEventListener('click', function (ev) {
                ev.preventDefault()
                console.log(this)
                this.classList.toggle('card--seleccionada')
                
                var nuevoItemCarrito = document.createElement('div')
                nuevoItemCarrito.classList.add('carrito__item')
                nuevoItemCarrito.innerHTML = that.heading

                elemSectionCarrito.append(nuevoItemCarrito)

            })
            card.innerHTML = `
            <article class="card__article">
                <div
                    class="card__image"
                    style="background-image: url(' ${image} ')"
                >
                </div>
                
                <div class="card__content">
                    <h3 class="card__heading"> ${heading} </h3>
                    <div class="card__description">
                        <p class="card__description-price">${price} </p>
                        <button class="card__description--button">Agregar al carrito</button>
                    </div>
                </div>
            </article>
            `

            destinationElement.appendChild(card)
        }
    }

    var elemCardsContainer = document.getElementsByClassName('cards-container')[0]

    var card1 = new Card('Cámara Ip Hikvision Full Hd', 'img/productos/hikvision/camaras-vigilancia.jpg', 4900)
    var card2 = new Card('Cámara Hikvision infraroja','img/productos/hikvision/camara-analogica.jpg', 4200)
    var card3 = new Card('Cámara Hikvision domo','img/productos/ezviz/camara-ezviz.jpg', 2100)
    var card4 = new Card('Cámara Ip Ezviz Wifi','img/productos/ezviz/ezviz-lluvia.jpg', 8000)
    var card5 = new Card('Cámara Ip wifi Ezviz','img/productos/ezviz/ezviz-mini.jpg', 8200)
    var card6 = new Card('Cámara Ip Ezviz inalámbrica','img/productos/alarmas/alarma1.jpg', 4300)
    var card7 = new Card('Alarma Honeywell inalámbrica','img/productos/alarmas/kit-alarmas.jpg', 20000)
    var card8 = new Card('Kit alarma Alonso','img/productos/hikvision/camaras-termicas.jpg', 28000)
    var card9 = new Card('Kit alarma + cámara Alonso','img/productos/kit/alarmas-camaras1.jpg', 32000)
    var card10= new Card('Perro guardián Terry','img/productos/perritos/perrito-policia.jpg', 30000)
    var card11 = new Card('Perro chihuahua con colmillos','img/productos/perritos/perrito-malo.jpg', 30000)
    var card12 = new Card('Perro vigilante','img/productos/perritos/perrito-dormido.jpg', 30000)


    // console.log (nuevaCArd)

    var cards = [
        card1,
        card2,
        card3,
        card4,
        card5,
        card6,
        card7,
        card8,
        card9,
        card10,
        card11,
        card12,
    ]

    // card1.appendTo(elemCardsContainer)
    // card2.appendTo(elemCardsContainer)
    // card3.appendTo(elemCardsContainer)
    // card4.appendTo(elemCardsContainer)
    // card5.appendTo(elemCardsContainer)
    // card6.appendTo(elemCardsContainer)
    // card7.appendTo(elemCardsContainer)
    // card8.appendTo(elemCardsContainer)
    // card9.appendTo(elemCardsContainer)
    // card10.appendTo(elemCardsContainer)
    // card11.appendTo(elemCardsContainer)
    // card12.appendTo(elemCardsContainer)

    for (var unaCard of cards) {
        unaCard.appendTo(elemCardsContainer)
    }
}