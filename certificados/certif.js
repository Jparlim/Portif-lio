
/* ideia 1: quando o usuario clica em outro certificado e ja um ja estiver um com o flluter
o sistema vai ver qual dos 4 certificados tem o hide, vai tira-lo e adicionar o hide no outro certificado
que o usuario clicou*/

/*ideia 2: quando o usuario clica no primeiro ceertificado o ID do certificado
ficará salvo e quando o usuário clica em outro certificado será retirado o
flluter do certificado 1 e colocara no certificado que o usuário clicou*/

function analist(alvo) {
    
    

}


function openimg(evento) {
    evento = window.event || event
    const lol = evento.target.id
    
    analist(lol)
    
    document.querySelector(`#${lol}`).classList.add('imgflluter')
    
    setTimeout(() => document.querySelector('#X').classList.add('hide'), 500);
    
}


window.openimg = () => openimg()