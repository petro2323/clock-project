setInterval(setClock, 1000)

const hour_hand = document.querySelector('[hour-hand]')
const minute_hand = document.querySelector('[minute-hand]')
const second_hand = document.querySelector('[second-hand]')
const ticking = new Audio('tick.wav')
ticking.autoplay = true

function setClock() {
    const current_date = new Date()

    const seconds = current_date.getSeconds() / 60
    const minutes = (seconds + current_date.getMinutes()) / 60
    const hours = (minutes + current_date.getHours()) / 12

    setRotation(second_hand, seconds)
    setRotation(minute_hand, minutes)
    setRotation(hour_hand, hours)
    ticking.load()
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360)
}

setClock()