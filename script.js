let buttonContrate = document.querySelector('.footer-top button').addEventListener('click', () => {
    open('https://www.linkedin.com/in/joao-paulo-aparecido-rosa-3377a226a/')
})


function alerta() {
    alert('Este projeto está em desenvolvimento!')
}

function login() {
    const username = document.querySelector('#username')
    // document.querySelector('.login-page .hide').classList.remove('hide')
    // document.querySelector('.page .hide').classList.remove('hide')    

    if(username !== '') {
        console.log('certo')
    } else {
        console.log('erro')
    }
}

window.login = () => login()
window.alerta = () => alerta()