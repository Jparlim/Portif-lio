import { Apisweb } from "../API/web.js";
import { usuario } from "./api.js";

new usuario("#feedbacks")


// API

const caminho = new Apisweb()

caminho.add("/sobre", "./pages/sobremim.html")
// caminho.add("/certificados", "./pages/sobremim.html")
// caminho.add("/sobre", "./pages/sobremim.html")
// caminho.add("/sobre", "./pages/sobremim.html")

window.rota = () => caminho.rota()