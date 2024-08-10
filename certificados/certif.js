let selectedId = null; 

/*a principio ele é null, ou seja, quando a função rodar na primeira vez
ele será null, então no if ele sera igual a null, o que ja será suficiente pra 
não entrar no código do if.
após passar pelo if, o selectedID receberá o valor de alvo, ai vai começa a rodar o código!!*/


function analist(alvo) {
    if(selectedId !== null && selectedId !== alvo) {
        document.querySelector(`#${selectedId}`).classList.remove('imgflluter');
    }
    selectedId = alvo
    console.log(selectedId)
}

function openimg(evento) {
    evento = window.event || event
    const lol = evento.target.id
    
    analist(lol)
    
    document.querySelector(`#${lol}`).classList.add('imgflluter')
    
    setTimeout(() => document.querySelector('#X').classList.add('hide'), 500);
    
}


window.openimg = () => openimg()