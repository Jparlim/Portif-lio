export class users {
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

        this.createsrc()

    }

    async createsrc() {
        
        let { value } = document.querySelector('#username')

        const criate = this.criatehtml()

        criate.querySelector('.perfil img').src = `https://github.com/${value}.png`
            
        this.table.append(criate)

    }
       
    user() {
        document.querySelector('.loginPage button').onclick = () => {
            
            if(this.value === '') {
                alert('insira um nome!')
            } else {
                document.querySelector('.loginPage').classList.add('hide')
                document.querySelector('.page.hide').classList.remove('hide')
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