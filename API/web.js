export class Apisweb {

    add(linkname, link) {
        this.add[linkname] = link
    }
    
    rota(evento) {
        evento = event || window.event
        evento.preventDefault()
    
        window.history.pushState('', {}, evento.target.href)
        
        this.handle()
    }
    
    handle() {
        const { pathname } = window.location
        const route = this.add[pathname] || alerta()
        
        fetch(route).then( data => data.text()).then( html => {
            document.querySelector('#app').innerHTML = html
        })
    }
    
}

