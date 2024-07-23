import { users } from "./pi.js"

let buttonContrate = document.querySelector('.footer-top button').addEventListener('click', () => {
    open('https://www.linkedin.com/in/joao-paulo-aparecido-rosa-3377a226a/')
})

function alerta() {
    alert('Este projeto está em desenvolvimento!')
}

function user() {
    const { value } = document.querySelector('#username')
    if(value === '') {
        alert('insira um nome!')
    } else {
        console.log("ola")
        document.querySelector('.page hide').classList.remove('hide')
    }
}

window.user = () => user()
window.alerta = () => alerta()