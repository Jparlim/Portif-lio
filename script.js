let buttonContrate = document.querySelector('.footer-top button').addEventListener('click', () => {
    open('https://www.linkedin.com/in/joao-paulo-aparecido-rosa-3377a226a/')
})

function alerta() {
    alert('Este projeto está em desenvolvimento!')
}

window.alerta = () => alerta();

export { alerta, buttonContrate}

