let selectedId = null; 

function analist(alvo) {
    if(selectedId !== null && selectedId !== alvo) {
        document.querySelector(`#${selectedId}`).classList.remove('imgflluter');
        document.querySelector("#X").classList.remove('hide')
    }
    selectedId = alvo
}

function toclose() {
    document.querySelector(`#${selectedId}`).classList.remove("imgflluter")
    document.querySelector("#X").classList.remove("hide")
}

function openimg(evento) {
    evento = window.event || event
    const lol = evento.target.id
    
    analist(lol)
    
    document.querySelector(`#${lol}`).classList.add('imgflluter')
    
    setTimeout(() => document.querySelector('#X').classList.add('hide'), 500);   
}


window.toclose = () => toclose()
window.openimg = () => openimg()