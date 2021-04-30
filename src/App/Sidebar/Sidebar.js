import PerfilDoUsuario from './Usuario';
import Sugestoes from './Sugestoes';

export default function Sidebar() {

    const dadosDoUsuario = {nome: "Catana", apelido: "catanacomics", imagem: "assets/img/catanacomics.svg"};
    
    return(
        <div class="sidebar">
            
            <PerfilDoUsuario nome={dadosDoUsuario.nome} apelido={dadosDoUsuario.apelido} imagem={dadosDoUsuario.imagem} />

            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}