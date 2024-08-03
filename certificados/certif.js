function openimg(evento) {
    evento = window.event || event
    const lol = evento.target.id
    
    document.querySelector(`#${lol}`).classList.add('hide')

    setTimeout(() => document.querySelector('.X').classList.add('hide'), 500);
}

function toclose() {
    document.querySelector('.X').classList.remove('hide')
}

window.toclose = () => toclose()
window.openimg = () => openimg()