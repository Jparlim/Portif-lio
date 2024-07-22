class users {
    
    names() {
        const usernameGit = document.querySelector('')
    }

    creathtml() {
        const tr = document.createElement('tr')
        tr.innerHTML = 
            `
                    <td class="perfil">
                        <img src="./imgs/instagram-line.png" alt="">
                        <h1 class="perfilname">${usernameGit}</h1>
                    </td>
                    <td class="feed">
                        <input type="text" placeholder="digite algum comentário">
                        <button>enviar feedback</button>
                    </td>
           `
    }
}