import { alerta, buttonContrate } from "../../script.js"
class users {
    constructor(root) {
        this.root = document.querySelector(root)
        this.table = this.root.querySelector('table')
    }
}

export class usuario extends users {
    constructor(root) {
        super(root)
    
        this.update()
        this.user()
    }

    createsrc() {
        let { value } = document.querySelector('#username')

        const criate = this.criatehtml()
    
        criate.querySelector('.perfil img').src = `https://github.com/${value}.png`
        this.table.append(criate)
        criate.querySelector('.perfilname').innerText = `${value}`       
    
        return value
    }
       
    user() {
        document.querySelector('.loginPage button').onclick = () => {

            const valor = document.querySelector('#username').value;
            
            // fazer a tela de login aparecer apenas uma vez e salvar o nome do usuário

            if(valor === '') {
                alert('insira um nome!')
            } else {
                document.querySelector('.loginPage').classList.add('hide')
                document.querySelector('.page.hide').classList.remove('hide')
                document.querySelector('.texts h2').innerText = `seja bem vindo(a) ${valor}`
                this.createsrc()
            }
        }
    }

    update() {
        this.removeAlltr()
    }

    removeAlltr() {
        this.table.querySelectorAll('tr').forEach( (tr) => {
            tr.remove()
        });
    }

    criatehtml() {
        const tr = document.createElement('tr')

        tr.innerHTML = 
        `<td class="perfil">
            <img src="./imgs/instagram-line.png" alt="">
            <h1 class="perfilname"></h1>
        </td>
        <td class="feed">
            <input type="text" placeholder="digite algum comentário">
            <button>enviar feedback</button>
        </td>
        `

        return tr
    }
}