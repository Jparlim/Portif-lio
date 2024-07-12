let buttonContrate = document.querySelector('.footer-top button').addEventListener('click', () => {
    open('https://www.linkedin.com/in/joao-paulo-aparecido-rosa-3377a226a/')
})

const route = {
    '/inicio': '/pages/inicio.html',
    '/certificados': '/pages/certificados.html',
    '/projetos': '/pages/projetos.html',
    '/sobre': '/pages/sobre.html',
    404: '/pages/404.html',
}

function routes(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    handle()
}

function handle() {
    const { pathname } = window.location
    const rotas = route[pathname] || route[404]
    fetch(rotas)
    .then(resposta => resposta.text())
    .then(html => {
        document.querySelector('.page-2').innerHTML = html
    })
}