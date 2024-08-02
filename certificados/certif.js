function openimg(evento) {
    evento = window.event || event
    const lol = evento.target.id
    
    if(lol === 'one') {
        document.querySelector('#one').classList.add('hide')
    } if(lol === 'two') {
        document.querySelector('#two').classList.add('hide')
    } if(lol === 'three') {
        document.querySelector('#three').classList.add('hide')
    } if(lol === 'four') {
        document.querySelector('#four').classList.add('hide')
    }
}

function toclose() {
    
}

window.openimg = () => openimg()